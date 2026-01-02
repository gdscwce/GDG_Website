import { useState } from "react";
import api from "../api/axios";

function CreateYearModal({ onClose, onSuccess }) {
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    if (!year) return alert("Year is required");

    try {
      setLoading(true);
      const res = await api.post("/admin/addyear", { year });

      if (res.data.ok) {
        onSuccess(res.data.yearGroup); // pass created year
        onClose();
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert("Failed to create year");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-white text-black p-6 rounded w-80">
        <h2 className="text-lg font-semibold mb-4">Create Year</h2>

        <input
          type="text"
          placeholder="Enter year (e.g. 2024)"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border w-full px-3 py-2 mb-4"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border"
            disabled={loading}
          >
            Cancel
          </button>

          <button
            onClick={handleCreate}
            className="px-4 py-2 bg-blue-600 text-white"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateYearModal;
