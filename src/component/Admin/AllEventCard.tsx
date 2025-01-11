import { EventCardProps } from "@/src/type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faTrash } from "@fortawesome/free-solid-svg-icons";

const AllEventCard = ({
  date,
  title,
  ticketsSold,
  revenue,
  onDelete,
  onManage,
}: EventCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center text-gray-600 text-sm">
          <FontAwesomeIcon icon={faCalendar} className="mr-1" />
          {date}
        </div>
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-700 transition-colors"
          aria-label="Delete Event"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <h3 className="text-gray-900 text-lg font-medium mb-4">{title}</h3>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4 ">
        <div className="flex flex-col items-center py-3 px-2 shadow-sm border-[1px] rounded-md">
          <span className="text-gray-900 text-xl font-semibold">
            {ticketsSold}
          </span>
          <span className="text-gray-500 text-sm">TICKETS SOLD</span>
        </div>
        <div className="flex flex-col items-center py-3 px-2 shadow-sm border-[1px] rounded-md">
          <span className="text-gray-900 text-xl font-semibold">{revenue}</span>
          <span className="text-gray-500 text-sm">Revenue</span>
        </div>
      </div>

      {/* Manage Event Button */}
      <button
        onClick={onManage}
        className="bg-blue-500 text-white py-2 rounded-lg font-medium text-sm hover:bg-blue-600 transition-colors"
      >
        Manage Event
      </button>
    </div>
  );
};

export default AllEventCard;
