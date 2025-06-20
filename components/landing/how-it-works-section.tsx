"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Choose Your Industry & Role",
    description: "Browse through our extensive collection of industries and roles to find the one that matches your career goals.",
  },
  {
    number: "02",
    title: "Select an Interview Set",
    description: "Choose from technical, competency, or behavioral interview sets tailored to your selected role.",
  },
  {
    number: "03",
    title: "Practice with Realistic Questions",
    description: "Answer real interview questions while our system records your responses for evaluation.",
  },
  {
    number: "04",
    title: "Receive AI Feedback",
    description: "Get comprehensive feedback on your performance, with scores for technical accuracy, clarity, and confidence.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-bl from-blue-200/30 to-transparent dark:from-blue-600/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-200/30 to-transparent dark:from-indigo-600/15 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Get Started in
            <span className="block text-blue-600 dark:text-blue-400">4 Simple Steps</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Four simple steps to transform your interview skills and boost your confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-10">
                  <ArrowRight className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
                </div>
              )}
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-blue-300 dark:group-hover:border-blue-600 relative h-full">
                <div className="absolute -top-4 left-8 bg-blue-600 dark:bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
                <div className="pt-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                  <div className="flex items-center text-blue-600 dark:text-blue-400">
                    <CheckCircle2 className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">Easy to follow</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}