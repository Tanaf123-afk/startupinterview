import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Response } from "@prisma/client";
import { Play } from "lucide-react";
import { ResponseFeedback } from "@/components/summary/response-feedback";

interface ResponseListProps {
  responses: Response[];
}

export function ResponseList({ responses }: ResponseListProps) {
  if (responses.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Responses</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground py-8">
            No responses recorded for this interview session.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Responses</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {responses.map((response, index) => (
            <AccordionItem key={response.id} value={response.id}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4 text-left">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium">{index + 1}</span>
                  </div>
                  <div className="flex-1 truncate">
                    {response.questionText}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-4 space-y-4">
                  {response.videoUrl && (
                    <div className="rounded-lg overflow-hidden bg-muted/50 h-40 flex items-center justify-center">
                      <div className="text-center">
                        <Play className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Video recording available</p>
                      </div>
                    </div>
                  )}
                  
                  {response.transcription && (
                    <div className="space-y-2">
                      <h4 className="font-medium">Your Answer:</h4>
                      <p className="text-sm text-muted-foreground">
                        {response.transcription}
                      </p>
                    </div>
                  )}
                  
                  <ResponseFeedback response={response} />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}