"use client";

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  BarChart3, 
  History, 
  Bookmark, 
  ArrowRight, 
  Upload,
  TrendingUp,
  MessageSquare,
  Star,
  Trophy,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Crown
} from 'lucide-react';
import Link from 'next/link';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// Mock data - replace with real data from your backend
const mockData = {
  user: {
    name: "John Doe",
    plan: {
      type: "Free",
      interviewsLeft: 2,
      weeklyUsage: 3,
      weeklyLimit: 5
    },
    interviewsCompleted: 12,
    averageScores: {
      clarity: 85,
      confidence: 78,
      technicalAccuracy: 82
    },
    recentInterviews: [
      {
        id: 1,
        role: "Software Engineer",
        company: "Tech Corp",
        date: "2024-03-15",
        scores: {
          clarity: 88,
          confidence: 82,
          technicalAccuracy: 85
        }
      },
      {
        id: 2,
        role: "Frontend Developer",
        company: "Web Solutions",
        date: "2024-03-10",
        scores: {
          clarity: 85,
          confidence: 75,
          technicalAccuracy: 80
        }
      }
    ],
    savedRoles: [
      {
        id: 1,
        role: "Senior Developer",
        company: "Enterprise Tech"
      },
      {
        id: 2,
        role: "Full Stack Engineer",
        company: "Startup Inc"
      }
    ],
    performanceTrend: [
      { date: "2024-02", clarity: 75, confidence: 70, technicalAccuracy: 80 },
      { date: "2024-03", clarity: 82, confidence: 75, technicalAccuracy: 85 },
      { date: "2024-04", clarity: 85, confidence: 78, technicalAccuracy: 82 }
    ],
    achievements: [
      { id: 1, title: "First Interview", icon: "🎯", color: "bg-blue-100 text-blue-600" },
      { id: 2, title: "5 Interviews", icon: "🏆", color: "bg-green-100 text-green-600" },
      { id: 3, title: "90% Confidence", icon: "⭐", color: "bg-purple-100 text-purple-600" }
    ]
  }
};

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [showFAQ, setShowFAQ] = useState(false);
  const [dateRange, setDateRange] = useState('7d');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login?callbackUrl=/dashboard');
    } else if (status === 'authenticated') {
      setIsLoading(false);
    }
  }, [status, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Plan Status Banner */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">
                You're on the {mockData.user.plan.type} Plan
              </h2>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Weekly Usage</span>
                  <span className="font-medium">{mockData.user.plan.weeklyUsage}/{mockData.user.plan.weeklyLimit} interviews</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(mockData.user.plan.weeklyUsage / mockData.user.plan.weeklyLimit) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <Button className="bg-black hover:bg-black/90">
              <Crown className="mr-2 w-5 h-5" />
              Upgrade to Premium
            </Button>
          </div>
        </div>

        {/* Progress Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Your Progress</h2>
            <select 
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="border rounded-md px-3 py-1"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData.user.performanceTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="clarity" stroke="#2563eb" />
                <Line type="monotone" dataKey="confidence" stroke="#16a34a" />
                <Line type="monotone" dataKey="technicalAccuracy" stroke="#9333ea" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Interviews */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recent Interviews</h2>
            <Link href="/history" className="text-blue-600 hover:text-blue-700">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {mockData.user.recentInterviews.map((interview) => (
              <div key={interview.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{interview.role}</h3>
                  <p className="text-sm text-gray-600">{interview.company} • {interview.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm font-medium">
                      {Math.round((interview.scores.clarity + interview.scores.confidence + interview.scores.technicalAccuracy) / 3)}%
                    </div>
                    <div className="text-xs text-gray-500">Overall Score</div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">View Feedback</Button>
                    <Button variant="outline" size="sm">Retry</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Interviews */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Saved for Later</h2>
            <Link href="/saved" className="text-blue-600 hover:text-blue-700">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockData.user.savedRoles.map((role) => (
              <div key={role.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{role.role}</h3>
                  <p className="text-sm text-gray-600">{role.company}</p>
                </div>
                <Button variant="outline" size="sm">Start Interview</Button>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {mockData.user.achievements.map((achievement) => (
              <div 
                key={achievement.id}
                className={`${achievement.color} p-4 rounded-lg text-center`}
              >
                <div className="text-2xl mb-2">{achievement.icon}</div>
                <div className="font-medium">{achievement.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <button
            onClick={() => setShowFAQ(!showFAQ)}
            className="flex items-center justify-between w-full text-left"
          >
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold">Help & FAQ</h2>
            </div>
            {showFAQ ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          
          {showFAQ && (
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="font-medium mb-2">How does AI feedback work?</h3>
                <p className="text-gray-600">Our AI analyzes your responses for clarity, confidence, and technical accuracy, providing personalized suggestions for improvement.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">What's included in Premium?</h3>
                <p className="text-gray-600">Premium users get unlimited interviews, detailed analytics, and priority access to new features.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">How can I improve my scores?</h3>
                <p className="text-gray-600">Practice regularly, review feedback carefully, and focus on areas where you score lower. Our AI will help identify specific areas for improvement.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}