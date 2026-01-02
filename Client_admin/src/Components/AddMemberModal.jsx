import { useState } from "react";
import api from "../api/axios";

function AddMembersModal({ yearId, onClose, onSuccess }) {
  const [members, setMembers] = useState([
    { memberName: "", memberBranch: "", mail: "", linkedin: "" },
  ]);
  const [loading, setLoading] = useState(false);

  /* --------- HANDLE INPUT CHANGE --------- */
  const handleChange = (index, field, value) => {
    const updated = [...members];
    updated[index][field] = value;
    setMembers(updated);
  };

  /* --------- ADD NEW SLAB --------- */
  const addRow = () => {
    setMembers([
      ...members,
      { memberName: "", memberBranch: "", mail: "", linkedin: "" },
    ]);
  };

  /* --------- REMOVE SLAB --------- */
  const removeRow = (index) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  /* --------- SUBMIT --------- */
  const handleSubmit = async () => {
    // minimal validation
    for (const m of members) {
      if (!m.memberName || !m.memberBranch) {
        return alert("Member name and branch are required");
      }
    }

    try {
      setLoading(true);
      const res = await api.post("/admin/addmembers", {
        yearGroupId: yearId,
        members,
      });

      if (res.data.ok) {
        onSuccess(res.data.members); // backend should return created members
        onClose();
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert("Failed to add members");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
      <div className="bg-white text-black p-6 rounded w-175 max-h-[90vh] overflow-y-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add Members</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {/* MEMBER SLABS */}
        {members.map((member, index) => (
          <div
            key={index}
            className="border p-4 mb-3 rounded relative"
          >
            {members.length > 1 && (
              <button
                onClick={() => removeRow(index)}
                className="absolute top-2 right-2 text-red-600"
              >
                ✕
              </button>
            )}

            <div className="grid grid-cols-2 gap-3">
              <input
                placeholder="Member Name *"
                className="border px-3 py-2"
                value={member.memberName}
                onChange={(e) =>
                  handleChange(index, "memberName", e.target.value)
                }
              />

              <input
                placeholder="Branch *"
                className="border px-3 py-2"
                value={member.memberBranch}
                onChange={(e) =>
                  handleChange(index, "memberBranch", e.target.value)
                }
              />

              <input
                placeholder="Email"
                className="border px-3 py-2"
                value={member.mail}
                onChange={(e) =>
                  handleChange(index, "mail", e.target.value)
                }
              />

              <input
                placeholder="LinkedIn URL"
                className="border px-3 py-2"
                value={member.linkedin}
                onChange={(e) =>
                  handleChange(index, "linkedin", e.target.value)
                }
              />
            </div>
          </div>
        ))}

        {/* ACTIONS */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={addRow}
            className="border px-4 py-2"
          >
            + Add Another Member
          </button>

          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="border px-4 py-2"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2"
            >
              {loading ? "Saving..." : "Save Members"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMembersModal;
