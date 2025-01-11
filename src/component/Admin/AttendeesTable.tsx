import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { attendancees } from "@/src/constant";

const AttendeesTable = () => {
  return (
    <div className="overflow-x-auto p-5 mt-10">
      <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Passenger</th>
            <th className="py-3 px-6 text-left">Date</th>
            <th className="py-3 px-6 text-left">Time</th>
            <th className="py-3 px-6 text-left">Seats</th>
            <th className="py-3 px-6 text-left">E-ticket</th>
            <th className="py-3 px-6 text-left">Payment</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm font-light">
          {attendancees.map((attendancee, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-50"
            >
              <td className="py-3 px-6 text-left">
                <div className="flex  items-center">
                  <div className="ml-3">
                    <span className="font-medium ">{attendancee.name}</span>{" "}
                    <span className="text-gray-500 text-sm ">
                      ({attendancee.phone})
                    </span>
                  </div>
                </div>
              </td>
              <td className="py-3 px-6 text-left">{attendancee.date}</td>
              <td className="py-3 px-6 text-left">{attendancee.time}</td>
              <td className="py-3 px-6 text-left">{attendancee.seats}</td>
              <td className="py-3 px-6 text-left">{attendancee.eTicket}</td>
              <td className="py-3 px-6 text-left">
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    attendancee.paymentStatus === "Pending"
                      ? "bg-orange-100 text-orange-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {attendancee.paymentStatus}
                </span>
              </td>
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
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendeesTable;
