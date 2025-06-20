"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Software Engineer",
    company: "Google",
    content: "InterviewPro helped me prepare for my technical interviews at Google. The AI feedback was incredibly accurate and helped me identify areas where I needed to improve.",
    avatar: "AJ",
    rating: 5,
  },
  {
    name: "Sarah Martinez",
    role: "Project Manager",
    company: "Microsoft",
    content: "I was struggling with behavioral interview questions, but after practicing with InterviewPro, I felt much more confident. I got the job at Microsoft!",
    avatar: "SM",
    rating: 5,
  },
  {
    name: "Raj Patel",
    role: "Data Scientist",
    company: "Amazon",
    content: "The industry-specific questions were spot on. I practiced with the data science set and many of the questions came up in my actual Amazon interview.",
    avatar: "RP",
    rating: 4,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-bl from-blue-200/40 to-transparent dark:from-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-200/40 to-transparent dark:from-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-0 w-1/3 h-1/3 bg-gradient-to-r from-purple-200/30 to-transparent dark:from-purple-600/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-1/3 h-1/3 bg-gradient-to-l from-cyan-200/30 to-transparent dark:from-cyan-600/15 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            What Our Users
            <span className="block text-blue-600 dark:text-blue-400">Say About Us</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how InterviewPro has helped candidates land their dream jobs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {Array(5).fill(0).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  
                  <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">"{testimonial.content}"</p>
                  
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}