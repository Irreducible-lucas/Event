import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const EventDropdown = () => {
  // Define dropdown options for each filter
  const dropdownOptions = {
    Type: ["Conference", "Workshop", "Webinar", "Meetup"],
    Date: ["Today", "This Week", "This Month", "This Year"],
    Location: ["Online", "New York", "San Francisco", "London"],
    Popularity: ["Trending", "Most Attended", "Highly Rated"],
  };

  return (
    <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4 lg:w-[80%]">
      {Object.keys(dropdownOptions).map((filter) => (
        <div key={filter} className="relative ">
          <select
            className="block w-full px-4 py-2 pr-10 rounded-md bg-gray-800 text-white focus:outline-none cursor-pointer appearance-none"
            defaultValue=""
            aria-label={`Filter by ${filter}`}
          >
            <option value="" disabled>
              {filter}
            </option>
            {dropdownOptions[filter].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {/* Downward Chevron Icon */}
          <FontAwesomeIcon
            icon={faChevronDown}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        </div>
      ))}
    </div>
  );
};

export default EventDropdown;
