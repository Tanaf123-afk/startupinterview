import { RoleWithCompany } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import Link from "next/link";

interface RoleHeaderProps {
  role: RoleWithCompany;
}

export function RoleHeader({ role }: RoleHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/browse" className="hover:text-foreground">
          Industries
        </Link>
        <span>/</span>
        <Link href={`/company/${role.company.slug}`} className="hover:text-foreground">
          {role.company.name}
        </Link>
        <span>/</span>
        <span className="text-foreground">{role.title}</span>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
          <Briefcase className="h-8 w-8 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{role.title}</h1>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="outline">{role.company.name}</Badge>
          </div>
        </div>
      </div>
      
      {role.description && (
        <p className="text-muted-foreground max-w-3xl">
          {role.description}
        </p>
      )}
    </div>
  );
}