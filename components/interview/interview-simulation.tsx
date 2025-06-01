"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InterviewCamera } from "@/components/interview/interview-camera";
import { InterviewTimer } from "@/components/interview/interview-timer";
import { InterviewQuestion } from "@/components/interview/interview-question";
import { InterviewSetWithQuestions, InterviewSessionWithRelations } from "@/lib/types";
import { useRouter } from "next/navigation";

interface InterviewSimulationProps {
  session: InterviewSessionWithRelations;
  interviewSets: InterviewSetWithQuestions[];
}

export function InterviewSimulation({ session, interviewSets }: InterviewSimulationProps) {
  const router = useRouter();
  const [activeSetIndex, setActiveSetIndex] = useState(0);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(
    interviewSets[0]?.questions[0] ? 60 : 0
  );
  const [isTimerActive, setIsTimerActive] = useState(false);
  
  const activeSet = interviewSets[activeSetIndex];
  const questions = activeSet?.questions || [];
  const currentQuestion = questions[activeQuestionIndex];
  
  // Handle recording state
  const startRecording = () => {
    setIsRecording(true);
    setIsTimerActive(false);
  };
  
  const stopRecording = () => {
    setIsRecording(false);
    
    // Move to next question or complete interview
    if (activeQuestionIndex < questions.length - 1) {
      setActiveQuestionIndex(activeQuestionIndex + 1);
      // Reset timer for next question
      setTimeRemaining(60);
    } else if (activeSetIndex < interviewSets.length - 1) {
      setActiveSetIndex(activeSetIndex + 1);
      setActiveQuestionIndex(0);
      // Reset timer for next set's first question
      setTimeRemaining(60);
    } else {
      setIsCompleted(true);
    }
  };

  const finishAnswer = () => {
    stopRecording();
  };
  
  // Handle timer
  useEffect(() => {
    if (!isRecording || timeRemaining <= 0) return;
    
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          stopRecording();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isRecording, timeRemaining]);

  // Start timer for preparation
  useEffect(() => {
    if (isTimerActive) {
      const timer = setTimeout(() => {
        setIsTimerActive(false);
        startRecording();
      }, 10000); // 10 seconds preparation time
      return () => clearTimeout(timer);
    }
  }, [isTimerActive]);
  
  // Handle completion
  const completeInterview = async () => {
    try {
      // In a real implementation, you would save the interview results
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Redirect to summary page
      router.push(`/summary/${session.id}`);
    } catch (error) {
      console.error("Error completing interview:", error);
    }
  };
  
  // Handle tab change
  const handleTabChange = (value: string) => {
    const index = interviewSets.findIndex((set) => set.id === value);
    if (index !== -1) {
      setActiveSetIndex(index);
      setActiveQuestionIndex(0);
      setTimeRemaining(60);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{session.role.title}</h1>
          <p className="text-muted-foreground">{session.role.company.name}</p>
        </div>
        {isCompleted ? (
          <Button onClick={completeInterview}>
            View Results
          </Button>
        ) : (
          <InterviewTimer seconds={timeRemaining} isActive={isRecording} />
        )}
      </div>
      
      {!isCompleted ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card className="overflow-hidden">
              <InterviewCamera
                isRecording={isRecording}
                onStart={startRecording}
                onStop={stopRecording}
                onFinish={finishAnswer}
                isTimerActive={isTimerActive}
              />
            </Card>
          </div>
          
          <div className="space-y-6">
            <Tabs
              value={activeSet?.id}
              onValueChange={handleTabChange}
              className="w-full"
            >
              <TabsList className="w-full">
                {interviewSets.map((set, index) => (
                  <TabsTrigger
                    key={set.id}
                    value={set.id}
                    className="flex-1"
                    disabled={isRecording || isTimerActive}
                  >
                    {set.type.charAt(0) + set.type.slice(1).toLowerCase()}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {interviewSets.map((set) => (
                <TabsContent key={set.id} value={set.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{set.name}</CardTitle>
                      <CardDescription>{set.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <InterviewQuestion
                        question={currentQuestion}
                        questionNumber={activeQuestionIndex + 1}
                        totalQuestions={questions.length}
                      />
                    </CardContent>
                    <CardFooter className="justify-between">
                      {!isRecording && !isTimerActive ? (
                        <Button onClick={() => setIsTimerActive(true)}>
                          Start Recording
                        </Button>
                      ) : (
                        <Button variant="destructive" onClick={stopRecording}>
                          Stop Recording
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      ) : (
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Interview Completed!</h2>
          <p className="text-muted-foreground mb-6">
            Great job! We're analyzing your responses to provide you with feedback.
          </p>
          <Button size="lg" onClick={completeInterview}>
            View Your Results
          </Button>
        </Card>
      )}
    </div>
  );
}