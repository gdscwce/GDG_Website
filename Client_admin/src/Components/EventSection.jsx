import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import api from "../api/axios";

function EventsSection({ year }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await api.get(`/public/events/${year._id}`);
      setEvents(res.data.events);
    };
    fetchEvents();
  }, [year]);

  return (
    <div className="mb-10">
      <h2 className="text-xl mb-4">Events</h2>

      <div className="flex gap-4 flex-wrap">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}

        <button className="w-40 h-28 border rounded">
          + Add Event
        </button>
      </div>
    </div>
  );
}





export default EventsSection;