function MemberCard({ member, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-40 border rounded cursor-pointer hover:bg-gray-900"
    >
      {/* IMAGE */}
      {member.memberImageKey ? (
        <img
          src={`https://gdgwce-web.s3.ap-south-1.amazonaws.com/${member.memberImageKey}`}
          className="w-full h-24 object-cover"
        />
      ) : (
        <div className="w-full h-24 bg-gray-700 flex items-center justify-center text-xs">
          No Image
        </div>
      )}

      {/* BASIC INFO */}
      <div className="p-2">
        <h3 className="font-semibold text-sm">
          {member.memberName}
        </h3>
        <p className="text-xs opacity-70">
          {member.memberBranch}
        </p>
      </div>
    </div>
  );
}

export default MemberCard;
