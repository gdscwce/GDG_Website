function EventCard({ event, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-40 h-28 border rounded p-2 cursor-pointer hover:bg-gray-900"
    >
      <h3 className="font-semibold">{event.eventName}</h3>
      <p className="text-sm opacity-70">
        {new Date(event.eventDate).toDateString()}
      </p>
    </div>
  );
}

export default EventCard;
