import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InterviewSessionWithRelations } from "@/lib/types";
import { format } from "date-fns";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface RecentSessionsProps {
  sessions: InterviewSessionWithRelations[];
}

export function RecentSessions({ sessions }: RecentSessionsProps) {
  if (sessions.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Interviews</CardTitle>
          <CardDescription>
            Your most recent interview sessions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">
              You haven't completed any interviews yet
            </p>
            <Button asChild>
              <Link href="/browse">Start Practicing</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Interviews</CardTitle>
        <CardDescription>
          Your most recent interview sessions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sessions.map((session) => {
            // Calculate overall score
            const technicalScore = session.technicalScore || 0.7;
            const clarityScore = session.clarityScore || 0.65;
            const confidenceScore = session.confidenceScore || 0.75;
            const overallScore = Math.round(
              ((technicalScore + clarityScore + confidenceScore) / 3) * 100
            );
            
            return (
              <Link
                key={session.id}
                href={`/summary/${session.id}`}
                className="block"
              >
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div>
                    <p className="font-medium">{session.role.title}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{session.role.company.name}</span>
                      <span>•</span>
                      <span>
                        {format(new Date(session.createdAt), "MMM d, yyyy")}
                      </span>
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium">{overallScore}%</span>
                  </div>
                </div>
              </Link>
            );
          })}
          
          <Button variant="outline" className="w-full" asChild>
            <Link href="/dashboard">View All</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}