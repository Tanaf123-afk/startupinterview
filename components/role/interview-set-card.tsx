"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InterviewSet } from "@prisma/client";
import { Clock, BookOpen, CheckSquare, Brain, Users } from "lucide-react";
import { useRouter } from "next/navigation";

interface ExtendedInterviewSet extends InterviewSet {
  questionsCount: number;
}

interface InterviewSetCardProps {
  set: ExtendedInterviewSet;
  roleId: string;
}

export function InterviewSetCard({ set, roleId }: InterviewSetCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  // Format duration to minutes
  const durationInMinutes = Math.round(set.duration / 60);
  
  // Choose icon based on interview type
  const getIcon = () => {
    switch (set.type) {
      case "TECHNICAL":
        return <Brain className="h-5 w-5" />;
      case "COMPETENCY":
        return <CheckSquare className="h-5 w-5" />;
      case "BEHAVIORAL":
        return <Users className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };
  
  const startInterview = async () => {
    try {
      setIsLoading(true);
      
      // Create interview session
      const response = await fetch("/api/interviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          roleId,
          interviewSetId: set.id,
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to create interview session");
      }
      
      const { sessionId } = await response.json();
      
      // Redirect to interview simulation
      router.push(`/simulate/${sessionId}`);
    } catch (error) {
      console.error("Error starting interview:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              {getIcon()}
            </div>
            <CardTitle>{set.name}</CardTitle>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{durationInMinutes} min</span>
          </div>
        </div>
        <CardDescription>{set.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-1 text-sm">
          <BookOpen className="h-4 w-4" />
          <span>{set.questionsCount} {set.questionsCount === 1 ? "question" : "questions"}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={startInterview} disabled={isLoading} className="w-full">
          {isLoading ? "Starting..." : "Start Interview"}
        </Button>
      </CardFooter>
    </Card>
  );
}