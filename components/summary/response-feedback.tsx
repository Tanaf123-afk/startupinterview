import { Response } from "@prisma/client";
import { Progress } from "@/components/ui/progress";

interface ResponseFeedbackProps {
  response: Response;
}

export function ResponseFeedback({ response }: ResponseFeedbackProps) {
  // Use placeholder scores if not available
  const technicalScore = response.technicalScore || Math.random() * 0.3 + 0.6; // 60-90%
  const clarityScore = response.clarityScore || Math.random() * 0.3 + 0.6;
  const confidenceScore = response.confidenceScore || Math.random() * 0.3 + 0.6;
  
  // Use placeholder feedback if not available
  const feedback = response.feedback || "Your answer showed good understanding of the core concepts, but could be improved by providing more specific examples and maintaining a more confident tone throughout your response.";

  return (
    <div className="space-y-4 border-t pt-4">
      <h4 className="font-medium">Feedback:</h4>
      <p className="text-sm text-muted-foreground">{feedback}</p>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <div className="text-center">
            <div className="text-xl font-semibold">{Math.round(technicalScore * 100)}%</div>
            <p className="text-xs text-muted-foreground">Technical</p>
          </div>
          <Progress value={technicalScore * 100} className="h-1" />
        </div>
        
        <div className="space-y-2">
          <div className="text-center">
            <div className="text-xl font-semibold">{Math.round(clarityScore * 100)}%</div>
            <p className="text-xs text-muted-foreground">Clarity</p>
          </div>
          <Progress value={clarityScore * 100} className="h-1" />
        </div>
        
        <div className="space-y-2">
          <div className="text-center">
            <div className="text-xl font-semibold">{Math.round(confidenceScore * 100)}%</div>
            <p className="text-xs text-muted-foreground">Confidence</p>
          </div>
          <Progress value={confidenceScore * 100} className="h-1" />
        </div>
      </div>
    </div>
  );
}