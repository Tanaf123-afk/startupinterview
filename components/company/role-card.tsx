import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Book } from "lucide-react";
import { Role, InterviewSet } from "@prisma/client";
import { Button } from "@/components/ui/button";

interface RoleCardProps {
  role: Role & {
    company: {
      name: string;
    };
    interviewSets: InterviewSet[];
  };
}

export function RoleCard({ role }: RoleCardProps) {
  // Count total questions
  const totalQuestions = role.interviewSets.reduce((acc, set) => acc + 1, 0);
  
  // Calculate total duration in minutes
  const totalDuration = role.interviewSets.reduce((acc, set) => acc + set.duration, 0) / 60;

  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardHeader>
        <CardTitle>{role.title}</CardTitle>
        <CardDescription>{role.company.name}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {role.description && (
          <p className="text-sm text-muted-foreground">{role.description}</p>
        )}
        <div className="flex flex-wrap gap-2">
          {role.interviewSets.map((set) => (
            <Badge key={set.id} variant="secondary">
              {set.type.charAt(0) + set.type.slice(1).toLowerCase()}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Book className="h-4 w-4" />
            <span>{totalQuestions} {totalQuestions === 1 ? "set" : "sets"}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>~{Math.round(totalDuration)} min</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/role/${role.id}`}>Practice Interview</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}