export default function MemberCard({ member }) {
    return (
      <div className="w-40 h-28 border rounded p-2">
        <h3 className="font-semibold">{member.memberName}</h3>
        <p className="text-sm opacity-70">{member.memberBranch}</p>
      </div>
    );
  }
  