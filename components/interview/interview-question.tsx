"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Question } from "@prisma/client";
import { HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface InterviewQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
}

export function InterviewQuestion({ question, questionNumber, totalQuestions }: InterviewQuestionProps) {
  const [showHint, setShowHint] = useState(false);
  
  if (!question) {
    return (
      <div className="text-center p-4">
        <p>No questions available</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">
          Question {questionNumber} of {totalQuestions}
        </span>
        
        {question.hints && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowHint(!showHint)}
                >
                  <HelpCircle className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Show hint</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      
      <div className="text-lg font-medium">{question.text}</div>
      
      {showHint && question.hints && (
        <div className="bg-muted p-3 rounded-md text-sm">
          <p className="font-medium mb-1">Hint:</p>
          <p>{question.hints}</p>
        </div>
      )}
    </div>
  );
}