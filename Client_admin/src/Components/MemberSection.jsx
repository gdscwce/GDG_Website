import { useEffect, useState } from "react";
import api from "../api/axios";
import MemberCard from "./MemberCard";
import MemberDetailsModal from "./MemberDetailsModal";
import AddMembersModal from "./AddMemberModal";
function MembersSection({ year }) {
  const [members, setMembers] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      const res = await api.get(`/public/members/${year._id}`);
      setMembers(res.data.members);
    };
    fetchMembers();
  }, [year]);

  return (
    <div className="mt-10">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl">Members</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="border px-4 py-2 rounded"
        >
          + Add Members
        </button>
      </div>

      {/* MEMBERS GRID */}
      <div className="flex gap-4 flex-wrap">
        {members.map((member) => (
          <MemberCard
            key={member._id}
            member={member}
            onClick={() => setSelectedMember(member)}
          />
        ))}
      </div>

      {/* ADD MEMBERS MODAL */}
      {showAddModal && (
        <AddMembersModal
          yearId={year._id}
          onClose={() => setShowAddModal(false)}
          onSuccess={(newMembers) =>
            setMembers((prev) => [...prev, ...newMembers])
          }
        />
      )}

      {/* MEMBER DETAILS MODAL */}
      {selectedMember && (
        <MemberDetailsModal
          memberId={selectedMember._id}
          onClose={() => setSelectedMember(null)}
          onUpdate={(updatedMember) =>
            setMembers((prev) =>
              prev.map((m) =>
                m._id === updatedMember._id ? updatedMember : m
              )
            )
          }
        />
      )}
    </div>
  );
}

export default MembersSection;
