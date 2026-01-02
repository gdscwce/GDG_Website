import { useEffect, useRef, useState } from "react";
import api from "../api/axios";

function EventDetailsModal({ eventId, onClose }) {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(false);

  const thumbnailInputRef = useRef(null);
  const subImagesInputRef = useRef(null);

  // 🔥 fetch latest event data
  useEffect(() => {
    const fetchEvent = async () => {
      const res = await api.get(`/public/event/${eventId}`);
      setEventData(res.data.event);
    };
    fetchEvent();
  }, [eventId]);

  /* ---------------- THUMBNAIL UPLOAD ---------------- */

  const uploadThumbnail = async (file) => {
    const formData = new FormData();
    formData.append("thumbnail", file);

    setLoading(true);
    const res = await api.post(
      `/admin/${eventId}/thumbnail`,
      formData
    );

    setEventData((prev) => ({
      ...prev,
      thumbnailKey: res.data.thumbnailKey,
    }));
    setLoading(false);
  };

  /* ---------------- DELETE THUMBNAIL ---------------- */

  const deleteThumbnail = async () => {
    if (!window.confirm("Delete thumbnail?")) return;

    setLoading(true);
    await api.delete(`/admin/${eventId}/thumbnail`);

    setEventData((prev) => ({
      ...prev,
      thumbnailKey: null,
    }));
    setLoading(false);
  };

  /* ---------------- SUB IMAGES UPLOAD ---------------- */

  const uploadSubImages = async (files) => {
    const formData = new FormData();
    files.forEach((f) => formData.append("images", f));

    setLoading(true);
    const res = await api.post(
      `/admin/${eventId}/sub-images`,
      formData
    );

    setEventData((prev) => ({
      ...prev,
      eventsubImagesKey: [
        ...(prev.eventsubImagesKey || []),
        ...res.data.eventsubImagesKey,
      ],
    }));
    setLoading(false);
  };

  /* ---------------- DELETE ONE SUB IMAGE ---------------- */

  const deleteSubImage = async (imageKey) => {
    if (!window.confirm("Delete this image?")) return;

    setLoading(true);
    await api.delete(
      `/admin/${eventId}/sub-images/${encodeURIComponent(imageKey)}`
    );

    setEventData((prev) => ({
      ...prev,
      eventsubImagesKey: prev.eventsubImagesKey.filter(
        (key) => key !== imageKey
      ),
    }));
    setLoading(false);
  };

  if (!eventData) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
      <div className="bg-white text-black p-6 rounded w-150 max-h-[90vh] overflow-y-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{eventData.eventName}</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {/* INFO */}
        <p className="mb-2">
          <b>Date:</b>{" "}
          {new Date(eventData.eventDate).toDateString()}
        </p>
        <p className="mb-4">
          <b>Info:</b> {eventData.eventInfo}
        </p>

        {/* ---------------- THUMBNAIL ---------------- */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Thumbnail</h3>

          {eventData.eventThumbnailKey ? (
            <>
              <img
                src={`https://gdgwce-web.s3.ap-south-1.amazonaws.com/${eventData.eventThumbnailKey}`}
                className="w-48 h-32 object-cover mb-2"
              />
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    thumbnailInputRef.current.click()
                  }
                  className="border px-3 py-1"
                >
                  Replace
                </button>
                <button
                  onClick={deleteThumbnail}
                  className="border px-3 py-1 text-red-600"
                >
                  Delete
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={() => thumbnailInputRef.current.click()}
              className="border px-3 py-1"
            >
              Add Thumbnail
            </button>
          )}

          <input
            type="file"
            accept="image/*"
            hidden
            ref={thumbnailInputRef}
            onChange={(e) =>
              uploadThumbnail(e.target.files[0])
            }
          />
        </div>

        {/* ---------------- SUB IMAGES ---------------- */}
        <div>
          <h3 className="font-semibold mb-2">Sub Images</h3>

          <div className="flex gap-3 flex-wrap mb-3">
            {eventData.eventsubImagesKey?.map((key) => (
              <div key={key} className="relative">
                <img
                  src={`https://gdgwce-web.s3.ap-south-1.amazonaws.com/${key}`}
                  className="w-24 h-24 object-cover"
                />
                <button
                  onClick={() => deleteSubImage(key)}
                  className="absolute top-1 right-1 bg-black bg-opacity-60 text-white px-1"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={() => subImagesInputRef.current.click()}
            className="border px-3 py-1"
          >
            Add Images
          </button>

          <input
            type="file"
            multiple
            accept="image/*"
            hidden
            ref={subImagesInputRef}
            onChange={(e) =>
              uploadSubImages(Array.from(e.target.files))
            }
          />
        </div>

        {loading && (
          <p className="text-sm mt-4 opacity-70">
            Processing...
          </p>
        )}
      </div>
    </div>
  );
}

export default EventDetailsModal;
