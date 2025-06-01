import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { InterviewSessionWithRelations } from "@/lib/types";

interface ScoreSectionProps {
  session: InterviewSessionWithRelations;
}

export function ScoreSection({ session }: ScoreSectionProps) {
  // Use placeholder scores if not available
  const technicalScore = session.technicalScore || 0.75;
  const clarityScore = session.clarityScore || 0.65;
  const confidenceScore = session.confidenceScore || 0.70;
  
  // Calculate overall score
  const overallScore = Math.round(((technicalScore + clarityScore + confidenceScore) / 3) * 100);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Scores</CardTitle>
        <CardDescription>
          How you performed across different categories
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-6">
          <div className="text-4xl font-bold">{overallScore}%</div>
          <p className="text-sm text-muted-foreground">Overall Score</p>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Technical Accuracy</span>
              <span className="font-medium">{Math.round(technicalScore * 100)}%</span>
            </div>
            <Progress value={technicalScore * 100} className="h-2" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Clarity & Structure</span>
              <span className="font-medium">{Math.round(clarityScore * 100)}%</span>
            </div>
            <Progress value={clarityScore * 100} className="h-2" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Confidence & Delivery</span>
              <span className="font-medium">{Math.round(confidenceScore * 100)}%</span>
            </div>
            <Progress value={confidenceScore * 100} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}