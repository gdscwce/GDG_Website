import { useState } from "react";
import api from "../api/axios";

function AddEventModal({ yearId, onClose, onSuccess }) {
  const [eventName, setEventName] = useState("");
  const [eventInfo, setEventInfo] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddEvent = async () => {
    if (!eventName || !eventInfo || !eventDate) {
      return alert("All fields are required");
    }

    try {
      setLoading(true);
      const res = await api.post("/admin/addevent", {
        yearGroupId: yearId,
        eventName,
        eventInfo,
        eventDate,
      });

      if (res.data.ok) {
        onSuccess(res.data.event);
        onClose();
      }
    } catch (err) {
      alert("Failed to add event");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-white text-black p-6 rounded w-96">
        <h2 className="text-lg font-semibold mb-4">Add Event</h2>

        <input
          placeholder="Event Name"
          className="border w-full px-3 py-2 mb-3"
          onChange={(e) => setEventName(e.target.value)}
        />

        <textarea
          placeholder="Event Info"
          className="border w-full px-3 py-2 mb-3"
          onChange={(e) => setEventInfo(e.target.value)}
        />

        <input
          type="date"
          className="border w-full px-3 py-2 mb-4"
          onChange={(e) => setEventDate(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="border px-4 py-2">
            Cancel
          </button>
          <button
            onClick={handleAddEvent}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2"
          >
            {loading ? "Adding..." : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEventModal;
