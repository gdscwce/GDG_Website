import api from "../api/axios";

export default function EventCard({ event, onDeleted, onClick }) {
  const handleDelete = async (e) => {
    e.stopPropagation(); // 🚫 prevent opening details modal

    if (!window.confirm("Delete this event?")) return;

    await api.post(`/admin/deleteevent/${event._id}`);
    onDeleted(event._id);
  };

  return (
    <div
      onClick={onClick}
      className="w-40 h-28 border rounded p-2 relative cursor-pointer"
    >
      {/* DELETE BUTTON */}
      <button
        onClick={handleDelete}
        className="absolute top-1 right-1 text-red-500"
      >
        ✕
      </button>

      <h3 className="font-semibold">{event.eventName}</h3>
      <p className="text-sm opacity-70">
        {new Date(event.eventDate).toDateString()}
      </p>
    </div>
  );
}
