import { useEffect, useState } from "react";
import { useYear } from "@/contexts/YearContext";
import TeamMemberCard, { TeamMember } from "./TeamMemberCard";
import CONFIG from "../../config";
const Team = () => {
  const { selectedYearId, availableYears } = useYear();

  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // For display only (2022 / 2023 / 2024 ...)
  const selectedYearLabel =
    availableYears.find((y) => y._id === selectedYearId)?.year;

  useEffect(() => {
    if (!selectedYearId) return;

    const fetchMembers = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `${CONFIG.API_BASE_URL}/public/members/${selectedYearId}`
        );

        const data = await res.json();
        if (!data.ok) throw new Error("API error");

        const formattedMembers: TeamMember[] = data.members.map(
          (member: any) => ({
            id: member._id,
            name: member.memberName,
            role: member.memberBranch,
            image: member.memberImageKey,
            linkedin: member.linkedin || "",
            mail: member.mail || "",
          })
        );

        setMembers(formattedMembers);
      } catch (err) {
        console.error("Failed to load team members:", err);
        setError("Failed to load team members");
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [selectedYearId]);

  return (
    <section id="team" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Our Team {selectedYearLabel ? `– ${selectedYearLabel}` : ""}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the passionate individuals who make our community thrive.
          </p>
        </div>

        {loading && (
          <p className="text-center text-muted-foreground">
            Loading team members...
          </p>
        )}

        {error && (
          <p className="text-center text-red-500">{error}</p>
        )}

        {!loading && !error && members.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {members.map((member, index) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                index={index}
              />
            ))}
          </div>
        )}

        {!loading && !error && members.length === 0 && (
          <p className="text-center text-muted-foreground">
            No team members found for this year.
          </p>
        )}
      </div>
    </section>
  );
};

export default Team;
