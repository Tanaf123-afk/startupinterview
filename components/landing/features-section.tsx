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
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-200/40 to-transparent dark:from-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-200/40 to-transparent dark:from-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-gradient-to-r from-purple-200/30 to-transparent dark:from-purple-600/15 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-0 w-1/3 h-1/3 bg-gradient-to-l from-cyan-200/30 to-transparent dark:from-cyan-600/15 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Everything You Need to
            <span className="block text-blue-600 dark:text-blue-400">Ace Your Interviews</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our comprehensive platform offers all the tools you need to practice and perfect your interview skills.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}