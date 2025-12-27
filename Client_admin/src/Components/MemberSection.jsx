import { useEffect, useState } from "react";
import api from "../api/axios";
import MemberCard from "./MemberCard";

export default function MembersSection({ year }) {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const res = await api.get(`/public/members/${year._id}`);
      setMembers(res.data.members);
    };
    fetchMembers();
  }, [year]);

  return (
    <div>
      <h2 className="text-xl mb-4">Members</h2>

      <div className="flex gap-4 flex-wrap">
        {members.map((member) => (
          <MemberCard key={member._id} member={member} />
        ))}

        <button className="w-40 h-28 border rounded">
          + Add Member
        </button>
      </div>
    </div>
  );
}
