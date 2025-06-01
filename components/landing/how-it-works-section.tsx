"use client";

import { CheckCircle2 } from "lucide-react";
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
    <section id="how-it-works" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four simple steps to transform your interview skills and boost your confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-muted-foreground/20 -z-10">
                  <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                </div>
              )}
              
              <div className="bg-card rounded-lg p-6 border relative h-full">
                <div className="absolute -top-5 left-6 bg-primary text-primary-foreground rounded-md px-3 py-1 text-sm font-medium">
                  {step.number}
                </div>
                <div className="pt-4 space-y-4">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  <div className="flex items-center text-primary">
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