import { db } from "@/lib/db";
import { RoleCard } from "@/components/company/role-card";

interface RolesListProps {
  companyId: string;
}

export async function RolesList({ companyId }: RolesListProps) {
  const roles = await db.role.findMany({
    where: {
      companyId,
    },
    include: {
      company: true,
      interviewSets: true,
    },
  });

  if (roles.length === 0) {
    return (
      <div className="text-center p-8 border rounded-lg">
        <p>No roles found for this company. Check back later.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Available Roles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roles.map((role) => (
          <RoleCard key={role.id} role={role} />
        ))}
      </div>
    </div>
  );
}