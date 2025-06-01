import { InterviewSessionWithRelations } from "@/lib/types";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface SummaryHeaderProps {
  session: InterviewSessionWithRelations;
}

export function SummaryHeader({ session }: SummaryHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/dashboard" className="hover:text-foreground">
          Dashboard
        </Link>
        <span>/</span>
        <span className="text-foreground">Interview Summary</span>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{session.role.title} Interview</h1>
          <div className="flex items-center gap-2 mt-1 text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <span>{format(new Date(session.createdAt), "MMMM d, yyyy")}</span>
            <span>•</span>
            <span>{session.role.company.name}</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href={`/role/${session.roleId}`}>Try Again</Link>
          </Button>
          <Button asChild>
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}