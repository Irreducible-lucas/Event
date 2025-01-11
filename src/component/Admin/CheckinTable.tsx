import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faClock } from "@fortawesome/free-solid-svg-icons";
import { checkTable } from "@/src/constant";

const CheckinTable = () => {
  return (
    <div className="overflow-x-auto mt-8">
      <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Event Name</th>
            <th className="py-3 px-6 text-left">Location</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Organizer</th>
            <th className="py-3 px-6 text-left">Attendees</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm font-light">
          {checkTable.map((event, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-50"
            >
              <td className="py-3 px-6 text-left">{event.name}</td>
              <td className="py-3 px-6 text-left">{event.location}</td>
              <td className="py-3 px-6 text-left">
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    event.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {event.status}
                </span>
              </td>
              <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                  <img
                    src={event.image}
                    alt="Organizer"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="ml-3">
                    <span className="font-medium">{event.organizer}</span>
                  </div>
                </div>
              </td>
              <td className="py-3 px-6 text-left">{event.attendees}</td>

              <td className="py-3 px-6 text-center">
                <div className="flex justify-center items-center space-x-4">
                  <button
                    className="text-blue-500 hover:text-blue-600 transform hover:scale-110"
                    aria-label="Edit"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-600 transform hover:scale-110"
                    aria-label="Delete"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button
                    className="text-gray-500 hover:text-gray-700 transform hover:scale-110"
                    aria-label="Time"
                  >
                    <FontAwesomeIcon icon={faClock} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckinTable;
