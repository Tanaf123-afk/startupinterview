import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InterviewSessionWithRelations } from "@/lib/types";

interface FeedbackSectionProps {
  session: InterviewSessionWithRelations;
}

export function FeedbackSection({ session }: FeedbackSectionProps) {
  // Use placeholder feedback if not available
  const feedback = session.overallFeedback || "Your responses showed good technical knowledge, but there's room to improve clarity and confidence in your delivery. Try to structure your answers more coherently and maintain a confident tone throughout.";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Overall Feedback</CardTitle>
        <CardDescription>
          AI-powered analysis of your interview performance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm">{feedback}</p>
          
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Strengths:</h4>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Technical knowledge of key concepts</li>
              <li>Good examples from past experiences</li>
              <li>Positive attitude throughout the interview</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Areas for Improvement:</h4>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Structure responses more clearly</li>
              <li>Maintain consistent confidence level</li>
              <li>Provide more specific details in examples</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}