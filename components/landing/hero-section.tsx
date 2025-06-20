"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-20 lg:py-32 min-h-screen flex items-center">
      {/* Background decoration - more visible and darker */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-200/60 to-transparent dark:from-blue-600/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-200/60 to-transparent dark:from-indigo-600/30 rounded-full blur-3xl" />
      <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-gradient-to-br from-purple-200/50 to-transparent dark:from-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-tl from-cyan-200/50 to-transparent dark:from-cyan-600/20 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium"
            >
              🚀 AI-Powered Interview Practice
            </motion.div>

            {/* Main headline */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Master Your
              <span className="block text-blue-600 dark:text-blue-400">Interview Skills</span>
              <span className="block text-gray-900 dark:text-white">with AI</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Practice interviews for your dream role with our AI-powered platform that provides real-time feedback and performance analysis.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 text-lg font-semibold shadow-lg shadow-blue-500/25">
                <Link href="/browse" className="flex items-center gap-2">
                  Start Practicing
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 px-8 py-3 text-lg font-semibold text-gray-700 dark:text-gray-300">
                <Link href="/how-it-works" className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Watch Demo
                </Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-8 pt-8 text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">10,000+ Interviews Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">95% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Real-time AI Feedback</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}