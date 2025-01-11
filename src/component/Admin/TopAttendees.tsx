import { topAttendees } from "../../constant/index";
import GenderAge from "./GenderAge";

const TopAttendees = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-5 pb-11">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg text-black font-semibold mb-4">
          Top 5 Attendees
        </h2>
        <div className="space-y-4">
          {topAttendees.slice(0, 3).map((attendee) => (
            <div
              key={attendee.id}
              className="flex justify-between items-center"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={attendee.image}
                  alt="profile"
                  className="w-10 h-10 bg-gray-200 rounded-full"
                />
                <div>
                  <p className="font-medium text-black">{attendee.name}</p>
                  <p className="text-sm text-gray-500">{attendee.event}</p>
                </div>
              </div>
              <p
                className={`font-semibold ${
                  attendee.positive ? "text-green-500" : "text-red-500"
                }`}
              >
                {attendee.amount}
              </p>
            </div>
          ))}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {topAttendees.slice(3, 5).map((attendee) => (
              <div
                key={attendee.id}
                className="flex-1 space-x-5 bg-purple-100 rounded-lg p-3 flex items-center"
              >
                <img
                  src={attendee.image}
                  alt="profile"
                  className="w-10 h-10 bg-gray-200 rounded-full"
                />
                <div>
                  <p className="text-sm text-black font-medium">
                    {attendee.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {attendee.event.length > 10
                      ? `${attendee.event.slice(0, 10)}...`
                      : attendee.event}
                  </p>
                </div>
                <p
                  className={`font-semibold   ${
                    attendee.positive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {attendee.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Attendees Demography */}
      <GenderAge />
    </div>
  );
};

export default TopAttendees;
