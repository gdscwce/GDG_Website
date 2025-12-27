export default function EventCard({ event }) {
    return (
      <div className="w-40 h-28 border rounded p-2">
        <h3 className="font-semibold">{event.eventName}</h3>
        <p className="text-sm opacity-70">
          {new Date(event.eventDate).toDateString()}
        </p>
      </div>
    );
  }
  