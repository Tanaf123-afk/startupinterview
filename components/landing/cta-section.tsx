"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800 text-white overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative p-12 md:p-20 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Ready to Ace Your
              <span className="block">Next Interview?</span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join thousands of professionals who have improved their interview skills and landed their dream jobs with InterviewPro.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-gray-100 dark:bg-white dark:text-blue-700 dark:hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg shadow-black/10"
                asChild
              >
                <Link href="/browse" className="flex items-center gap-2">
                  Get Started for Free
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-blue-700 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}