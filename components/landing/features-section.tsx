"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Laptop, PieChart, Video, MessageCircle, CheckSquare } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI-Powered Feedback",
    description: "Get detailed feedback on your technical accuracy, clarity, and confidence from our advanced AI.",
    icon: Brain,
  },
  {
    title: "Industry-Specific Questions",
    description: "Practice with questions tailored to specific industries, companies, and roles.",
    icon: Laptop,
  },
  {
    title: "Performance Analytics",
    description: "Track your progress over time with comprehensive performance analytics.",
    icon: PieChart,
  },
  {
    title: "Video Recording",
    description: "Record your interview responses to review your body language and presentation.",
    icon: Video,
  },
  {
    title: "Real-time Transcription",
    description: "Your responses are transcribed in real-time for immediate analysis.",
    icon: MessageCircle,
  },
  {
    title: "Skill Improvement Recommendations",
    description: "Receive personalized recommendations to improve your interview skills.",
    icon: CheckSquare,
  },
];

export function FeaturesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything You Need to Ace Your Interviews
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform offers all the tools you need to practice and perfect your interview skills.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full transition-all hover:shadow-md">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}