import { useEffect, useRef, useState } from "react";
import api from "../api/axios";

function MemberDetailsModal({ memberId, onClose, onUpdate }) {
  const [member, setMember] = useState(null);
  const fileRef = useRef(null);
  const [loading, setLoading] = useState(false);

  // 🔥 Always fetch latest member
  useEffect(() => {
    const fetchMember = async () => {
      const res = await api.get(`/public/member/${memberId}`);
      setMember(res.data.member);
    };
    fetchMember();
  }, [memberId]);

  /* -------- UPLOAD IMAGE -------- */
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    setLoading(true);
    const res = await api.post(
      `/admin/member/${memberId}/image`,
      formData
    );

    const updated = {
      ...member,
      memberImageKey: res.data.memberImageKey,
    };

    setMember(updated);
    onUpdate(updated);
    setLoading(false);
  };

  /* -------- DELETE IMAGE -------- */
  const deleteImage = async () => {
    if (!window.confirm("Delete image?")) return;

    setLoading(true);
    await api.delete(`/admin/member/${memberId}/image`);

    const updated = { ...member, memberImageKey: undefined };
    setMember(updated);
    onUpdate(updated);
    setLoading(false);
  };

  if (!member) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
      <div className="bg-white text-black p-6 rounded w-105">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold">{member.memberName}</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {/* IMAGE */}
        {member.memberImageKey ? (
          <>
            <img
              src={`https://gdgwce-web.s3.ap-south-1.amazonaws.com/${member.memberImageKey}`}
              className="w-full h-40 object-cover mb-2"
            />
            <div className="flex gap-2">
              <button
                onClick={() => fileRef.current.click()}
                className="border px-3 py-1"
              >
                Replace Image
              </button>
              <button
                onClick={deleteImage}
                className="border px-3 py-1 text-red-600"
              >
                Delete Image
              </button>
            </div>
          </>
        ) : (
          <button
            onClick={() => fileRef.current.click()}
            className="border px-3 py-1"
          >
            Upload Image
          </button>
        )}

        <input
          type="file"
          hidden
          ref={fileRef}
          accept="image/*"
          onChange={(e) => uploadImage(e.target.files[0])}
        />

        {/* DETAILS */}
        <div className="mt-4 text-sm space-y-1">
          <p><b>Branch:</b> {member.memberBranch}</p>
          <p><b>Email:</b> {member.mail || "-"}</p>
          <p><b>LinkedIn:</b> {member.linkedin || "-"}</p>
        </div>

        {loading && (
          <p className="text-xs mt-3 opacity-70">Processing...</p>
        )}
      </div>
    </div>
  );
}

export default MemberDetailsModal;
