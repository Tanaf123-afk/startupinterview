"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, MessageSquare } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50/50 to-blue-100/80 dark:from-background dark:via-blue-950/10 dark:to-blue-950/20 -z-10" />
      
      {/* Additional radial gradient for smoother transition */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent dark:from-blue-950/20 -z-10" />
      
      <div className="container py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Master Your Interview Skills with{" "}
              <span className="text-blue-600 dark:text-blue-400">AI Feedback</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Practice interviews for your dream role with our AI-powered platform that provides real-time feedback and performance analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-black hover:bg-black/90">
                <Link href="/browse">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-2xl shadow-lg border p-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Technical Interview: Software Engineer</h3>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>10 questions</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>15 min</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">AI</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Real-time feedback and analysis
                  </p>
                </div>
                
                <Button className="w-full bg-black hover:bg-black/90">
                  Start Interview
                </Button>
              </div>
            </div>
            
            {/* Decorative elements with softer blur */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-[100px]" />
            <div className="absolute -top-6 -left-6 -z-10 h-[250px] w-[250px] rounded-full bg-blue-500/5 blur-[100px]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}