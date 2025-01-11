import { EventProps } from "../../type";

const EventCard = ({ image, status, imgName }: EventProps) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow">
      <img src={image} alt={imgName} className="w-full h-auto  object-cover" />
      <div
        className={`absolute top-2 right-2 px-3 py-1 text-sm font-semibold rounded-full ${
          status === "Approved"
            ? "bg-green-100 text-green-600"
            : "bg-red-100 text-red-600"
        }`}
      >
        {status}
      </div>
    </div>
  );
};

export default EventCard;
