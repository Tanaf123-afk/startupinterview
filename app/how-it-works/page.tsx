import Link from 'next/link';
import { ArrowRight, Target, Video, Sparkles, Clock, Brain, TrendingUp, FileText, MessageSquare } from 'lucide-react';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">How It Works</h1>
          <p className="text-xl text-gray-600 mb-8">
            Master interviews with real-time feedback, tailored to your dream role
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Choose a Role</h3>
              <p className="text-gray-600">
                Browse real job roles by company or industry, or upload your own job description to generate customized interview questions
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Video className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Simulate the Interview</h3>
              <p className="text-gray-600">
                Answer timed video questions in a realistic, pressure-based setup — with 10 seconds of prep before each question
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Get AI Feedback</h3>
              <p className="text-gray-600">
                Receive instant analysis on each answer, scored for Clarity, Confidence, and Technical Accuracy, with tips for improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Feedback Mockup Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">See the AI Feedback in Action</h2>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Question: "Tell me about a challenging project you worked on."</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700">"I worked on a complex e-commerce platform where we had to handle high traffic during peak seasons..."</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm font-medium text-gray-600">Clarity</div>
                <div className="flex-1 h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="w-12 text-sm font-medium text-gray-600">85%</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm font-medium text-gray-600">Confidence</div>
                <div className="flex-1 h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <div className="w-12 text-sm font-medium text-gray-600">90%</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm font-medium text-gray-600">Technical</div>
                <div className="flex-1 h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-purple-500 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="w-12 text-sm font-medium text-gray-600">75%</div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Feedback:</span> Strong explanation of the project scope and your role. Consider adding more specific technical details about the challenges you faced and how you overcame them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Better Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why It's Better</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <Clock className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Practice under real-time pressure</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <Brain className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Objective AI analysis</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <TrendingUp className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Track your improvement over time</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <FileText className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Tailored questions from real job listings</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link 
              href="/browse"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              Start Practicing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/simulate/software-engineer"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
            >
              Try a Sample Interview
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            No sign-up needed to try your first simulation
          </p>
        </div>
      </section>
    </div>
  );
} 