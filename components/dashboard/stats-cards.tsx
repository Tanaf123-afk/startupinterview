import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InterviewSessionWithRelations } from "@/lib/types";
import { Activity, Briefcase, Clock, TrendingUp } from "lucide-react";

interface StatsCardsProps {
  sessions: InterviewSessionWithRelations[];
}

export function StatsCards({ sessions }: StatsCardsProps) {
  // Calculate total practice time in minutes
  const totalPracticeTime = sessions.reduce((total, session) => {
    // Estimate 5 minutes per response
    return total + (session.responses.length * 5);
  }, 0);
  
  // Count unique roles
  const uniqueRoles = new Set(sessions.map((session) => session.roleId)).size;
  
  // Calculate average score
  const averageScore = sessions.reduce((total, session) => {
    const technicalScore = session.technicalScore || 0.7;
    const clarityScore = session.clarityScore || 0.65;
    const confidenceScore = session.confidenceScore || 0.75;
    const sessionScore = (technicalScore + clarityScore + confidenceScore) / 3;
    return total + sessionScore;
  }, 0) / (sessions.length || 1);
  
  // Find best score
  const bestScore = sessions.reduce((best, session) => {
    const technicalScore = session.technicalScore || 0.7;
    const clarityScore = session.clarityScore || 0.65;
    const confidenceScore = session.confidenceScore || 0.75;
    const sessionScore = (technicalScore + clarityScore + confidenceScore) / 3;
    return Math.max(best, sessionScore);
  }, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Total Sessions
          </CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{sessions.length}</div>
          <p className="text-xs text-muted-foreground">
            Total interview sessions completed
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Practice Time
          </CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalPracticeTime} min</div>
          <p className="text-xs text-muted-foreground">
            Total time spent practicing
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Roles Practiced
          </CardTitle>
          <Briefcase className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{uniqueRoles}</div>
          <p className="text-xs text-muted-foreground">
            Unique roles you've practiced
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Best Score
          </CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{Math.round(bestScore * 100)}%</div>
          <p className="text-xs text-muted-foreground">
            Your highest interview score
          </p>
        </CardContent>
      </Card>
    </div>
  );
}