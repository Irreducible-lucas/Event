import EventCard from "./EventCard";
import { events } from "../../constant";

const MyEvents = () => {
  return (
    <div className="p-6 shadow">
      <h2 className="text-lg font-semibold mb-4">My Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {events.map((event) => (
          <EventCard
            key={event.id}
            image={event.image}
            imgName={event.imgName}
            status={event.status}
          />
        ))}
      </div>
    </div>
  );
};

export default MyEvents;
