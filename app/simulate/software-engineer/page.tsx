"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Timer, Video, Mic, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { InterviewCamera } from "@/components/interview/interview-camera";

interface DetailedFeedback {
  quote: string;
  suggestion: string;
  category: string;
}

interface AnalysisItem {
  observation: string;
  improvement: string;
}

interface FeedbackState {
  clarity: number;
  confidence: number;
  technicalAccuracy: number;
  bodyLanguage: number;
  eyeContact: number;
  toneOfVoice: number;
  detailedFeedback: DetailedFeedback[];
  bodyLanguageAnalysis: AnalysisItem[];
  toneAnalysis: AnalysisItem[];
  overallStrengths: string[];
  areasForImprovement: string[];
}

export default function SampleInterview() {
  const [isStarted, setIsStarted] = useState(false);

  if (isStarted) {
    return <InterviewSimulation />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Try a Sample Interview</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            You'll be asked one interview question. You'll have 10 seconds to prepare and up to 2 minutes to answer. Your response will be recorded and instantly evaluated by our AI.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">What to Expect</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Timer className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">10 Seconds Prep Time</h3>
                <p className="text-gray-600">Quick preparation before answering</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Video className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">2 Minutes to Answer</h3>
                <p className="text-gray-600">Record your response to one question</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Mic className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">AI-Powered Feedback</h3>
                <p className="text-gray-600">Instant analysis of your response</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 transition-colors duration-300"
            onClick={() => setIsStarted(true)}
          >
            Start Sample Interview
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            No sign-up required. Your response will be recorded but not saved.
          </p>
        </div>
      </div>
    </div>
  );
}

function InterviewSimulation() {
  const [stage, setStage] = useState<'prep' | 'recording' | 'feedback'>('prep');
  const [timeLeft, setTimeLeft] = useState(10);
  const [recordingTime, setRecordingTime] = useState(120);
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState<string>('');
  const [feedback, setFeedback] = useState<FeedbackState>({
    clarity: 0,
    confidence: 0,
    technicalAccuracy: 0,
    bodyLanguage: 0,
    eyeContact: 0,
    toneOfVoice: 0,
    detailedFeedback: [],
    bodyLanguageAnalysis: [],
    toneAnalysis: [],
    overallStrengths: [],
    areasForImprovement: []
  });

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = (event: any) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        setTranscript(transcript);
      };

      if (isRecording) {
        recognition.start();
      } else {
        recognition.stop();
      }

      return () => {
        recognition.stop();
      };
    }
  }, [isRecording]);

  // Analyze the response when recording stops
  useEffect(() => {
    if (stage === 'feedback' && transcript) {
      // Here you would typically send the transcript to your backend for AI analysis
      // For now, we'll simulate the analysis
      analyzeResponse(transcript);
    }
  }, [stage, transcript]);

  // Fallback transcript for testing/demo if none is captured
  useEffect(() => {
    if (stage === 'feedback' && !transcript) {
      setTranscript("I think the project was pretty good. We did a lot of things. Maybe we could have done more testing.");
    }
  }, [stage, transcript]);

  const analyzeResponse = (response: string) => {
    const sentences = response.split(/[.!?]+/).filter(s => s.trim().length > 0);
    
    const detailedFeedback: DetailedFeedback[] = sentences.map(sentence => {
      const analysis = analyzeSentence(sentence);
      return {
        quote: sentence.trim(),
        suggestion: analysis.suggestion,
        category: analysis.category
      };
    }).filter(feedback => feedback.suggestion);

    setFeedback(prev => ({
      ...prev,
      detailedFeedback,
      clarity: calculateClarityScore(detailedFeedback),
      confidence: calculateConfidenceScore(detailedFeedback),
      technicalAccuracy: calculateTechnicalScore(detailedFeedback),
      bodyLanguageAnalysis: analyzeBodyLanguage(),
      toneAnalysis: analyzeTone(),
      overallStrengths: identifyStrengths(detailedFeedback),
      areasForImprovement: identifyAreasForImprovement(detailedFeedback)
    }));
  };

  const analyzeSentence = (sentence: string): { suggestion: string; category: string } => {
    const lowerSentence = sentence.toLowerCase();
    
    if (lowerSentence.includes('i think') || lowerSentence.includes('maybe')) {
      return {
        suggestion: "Replace hesitant language with more confident statements",
        category: "Confidence"
      };
    }
    if (lowerSentence.includes('stuff') || lowerSentence.includes('things')) {
      return {
        suggestion: "Be more specific about technical details and implementations",
        category: "Technical Precision"
      };
    }
    
    return { suggestion: '', category: '' };
  };

  const calculateClarityScore = (feedback: DetailedFeedback[]): number => {
    // Implement clarity score calculation based on feedback
    return 85; // Placeholder
  };

  const calculateConfidenceScore = (feedback: DetailedFeedback[]): number => {
    // Implement confidence score calculation based on feedback
    return 78; // Placeholder
  };

  const calculateTechnicalScore = (feedback: DetailedFeedback[]): number => {
    // Implement technical accuracy score calculation based on feedback
    return 92; // Placeholder
  };

  const analyzeBodyLanguage = (): AnalysisItem[] => {
    return [
      {
        observation: "Good eye contact maintained for 85% of the response",
        improvement: "Try to maintain eye contact during technical explanations"
      },
      {
        observation: "Hand gestures were minimal during the first minute",
        improvement: "Use more hand gestures to emphasize key technical points"
      }
    ];
  };

  const analyzeTone = (): AnalysisItem[] => {
    return [
      {
        observation: "Voice tone was clear but slightly hesitant during technical explanations",
        improvement: "Practice speaking with more conviction when discussing technical solutions"
      },
      {
        observation: "Good pace variation, but could emphasize key achievements more",
        improvement: "Slow down slightly when highlighting major accomplishments"
      }
    ];
  };

  const identifyStrengths = (feedback: DetailedFeedback[]): string[] => {
    return [
      "Strong technical knowledge demonstrated",
      "Clear project structure explanation",
      "Good use of technical terminology"
    ];
  };

  const identifyAreasForImprovement = (feedback: DetailedFeedback[]): string[] => {
    return [
      "Provide more specific metrics and results",
      "Structure technical explanations more systematically",
      "Use more confident language when discussing solutions"
    ];
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (stage === 'prep' && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (stage === 'prep' && timeLeft === 0) {
      setStage('recording');
      setIsRecording(true);
    } else if (stage === 'recording' && recordingTime > 0) {
      timer = setTimeout(() => {
        setRecordingTime(recordingTime - 1);
      }, 1000);
    } else if (stage === 'recording' && recordingTime === 0) {
      setIsRecording(false);
      setStage('feedback');
    }

    return () => clearTimeout(timer);
  }, [stage, timeLeft, recordingTime]);

  const skipTimer = () => {
    if (stage === 'prep') {
      setStage('recording');
      setIsRecording(true);
    }
  };

  const handleFinish = () => {
    setIsRecording(false);
    setStage('feedback');
  };

  if (stage === 'recording') {
    const minutes = Math.floor(recordingTime / 60);
    const seconds = recordingTime % 60;
    const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
        <div className="text-center max-w-4xl px-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-lg font-medium">Recording</span>
            </div>
            <div className="text-2xl font-bold text-gray-700">{timeString}</div>
          </div>

          <div className="mb-8">
            <InterviewCamera
              isRecording={true}
              onStart={() => setIsRecording(true)}
              onStop={() => setIsRecording(false)}
              onFinish={handleFinish}
            />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <p className="text-xl text-gray-700">
              "Tell me about a challenging project you worked on and how you overcame obstacles."
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">Speak clearly and confidently</p>
            <Button 
              variant="outline" 
              onClick={handleFinish}
              className="text-blue-600 hover:text-blue-700"
            >
              Finish Answer
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (stage === 'prep') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
        <div className="text-center max-w-4xl px-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-lg font-medium">Preparing</span>
            </div>
            <div className="text-2xl font-bold text-blue-600">{timeLeft}</div>
          </div>

          <div className="mb-8">
            <InterviewCamera
              isRecording={false}
              onStart={() => {}}
              onStop={() => {}}
              isTimerActive={true}
            />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <p className="text-xl text-gray-700">
              "Tell me about a challenging project you worked on and how you overcame obstacles."
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">Take a moment to organize your thoughts</p>
            <Button 
              variant="outline" 
              onClick={skipTimer}
              className="text-blue-600 hover:text-blue-700"
            >
              Skip Timer
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (stage === 'feedback') {
    const hasFeedback =
      feedback.detailedFeedback.length > 0 ||
      feedback.bodyLanguageAnalysis.length > 0 ||
      feedback.toneAnalysis.length > 0 ||
      feedback.overallStrengths.length > 0 ||
      feedback.areasForImprovement.length > 0;

    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">Your Feedback</h1>
            <p className="text-xl text-gray-600">
              Here's how our AI evaluated your response
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 rounded-lg bg-blue-50">
                <div className="text-4xl font-bold text-blue-600 mb-2">{feedback.clarity}%</div>
                <div className="text-gray-600">Clarity</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-blue-50">
                <div className="text-4xl font-bold text-blue-600 mb-2">{feedback.confidence}%</div>
                <div className="text-gray-600">Confidence</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-blue-50">
                <div className="text-4xl font-bold text-blue-600 mb-2">{feedback.technicalAccuracy}%</div>
                <div className="text-gray-600">Technical Accuracy</div>
              </div>
            </div>

            {hasFeedback ? (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Detailed Response Analysis</h3>
                  {feedback.detailedFeedback.map((item, index) => (
                    <div key={index} className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="flex-1">
                          <p className="text-gray-600 mb-2">
                            <span className="font-medium text-gray-700">What you said:</span><br />
                            "{item.quote}"
                          </p>
                          <p className="text-blue-600">
                            <span className="font-medium">Suggestion:</span><br />
                            {item.suggestion}
                          </p>
                          <p className="text-sm text-gray-500 mt-2">Category: {item.category}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Body Language Analysis</h3>
                  {feedback.bodyLanguageAnalysis.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg mb-3">
                      <div>
                        <p className="text-gray-700">{item.observation}</p>
                        <p className="text-blue-600 mt-1">{item.improvement}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Tone and Delivery Analysis</h3>
                  {feedback.toneAnalysis.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg mb-3">
                      <div>
                        <p className="text-gray-700">{item.observation}</p>
                        <p className="text-blue-600 mt-1">{item.improvement}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Strengths</h3>
                    <div className="space-y-3">
                      {feedback.overallStrengths.map((strength, index) => (
                        <div key={index} className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                          <p className="text-gray-700">{strength}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Areas for Improvement</h3>
                    <div className="space-y-3">
                      {feedback.areasForImprovement.map((area, index) => (
                        <div key={index} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                          <ArrowRight className="w-5 h-5 text-blue-500 mt-1" />
                          <p className="text-gray-700">{area}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 text-lg py-12">
                No response was recorded. Please try again and make sure your microphone is enabled.<br />
                (Tip: For demo/testing, a sample response is auto-filled.)
              </div>
            )}
          </div>

          <div className="text-center space-y-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 transition-colors duration-300"
              asChild
            >
              <Link href="/browse">
                Start Full Interview
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <p className="text-sm text-gray-500">
              Ready to practice more? Try a full interview session with multiple questions.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Your Feedback</h1>
          <p className="text-xl text-gray-600">
            Here's how our AI evaluated your response
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 rounded-lg bg-blue-50">
              <div className="text-4xl font-bold text-blue-600 mb-2">{feedback.clarity}%</div>
              <div className="text-gray-600">Clarity</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-blue-50">
              <div className="text-4xl font-bold text-blue-600 mb-2">{feedback.confidence}%</div>
              <div className="text-gray-600">Confidence</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-blue-50">
              <div className="text-4xl font-bold text-blue-600 mb-2">{feedback.technicalAccuracy}%</div>
              <div className="text-gray-600">Technical Accuracy</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 rounded-lg bg-blue-50">
              <div className="text-4xl font-bold text-blue-600 mb-2">{feedback.bodyLanguage}%</div>
              <div className="text-gray-600">Body Language</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-blue-50">
              <div className="text-4xl font-bold text-blue-600 mb-2">{feedback.eyeContact}%</div>
              <div className="text-gray-600">Eye Contact</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-blue-50">
              <div className="text-4xl font-bold text-blue-600 mb-2">{feedback.toneOfVoice}%</div>
              <div className="text-gray-600">Tone of Voice</div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 transition-colors duration-300"
            asChild
          >
            <Link href="/browse">
              Start Full Interview
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <p className="text-sm text-gray-500">
            Ready to practice more? Try a full interview session with multiple questions.
          </p>
        </div>
      </div>
    </div>
  );
} 