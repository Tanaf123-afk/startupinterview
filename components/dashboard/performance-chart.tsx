"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InterviewSessionWithRelations } from "@/lib/types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { format } from "date-fns";
import { useMemo } from "react";

interface PerformanceChartProps {
  sessions: InterviewSessionWithRelations[];
}

export function PerformanceChart({ sessions }: PerformanceChartProps) {
  const chartData = useMemo(() => {
    // Sort sessions by date
    const sortedSessions = [...sessions].sort(
      (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
    
    // Format data for chart
    return sortedSessions.map((session) => {
      return {
        date: format(new Date(session.createdAt), "MMM d"),
        technical: Math.round((session.technicalScore || 0.7) * 100),
        clarity: Math.round((session.clarityScore || 0.65) * 100),
        confidence: Math.round((session.confidenceScore || 0.75) * 100),
      };
    });
  }, [sessions]);

  if (chartData.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Performance Trends</CardTitle>
          <CardDescription>
            Track your progress over time
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center justify-center">
          <p className="text-muted-foreground">
            Complete interviews to see your performance trends
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Trends</CardTitle>
        <CardDescription>
          Track your progress over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 100]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--background)",
                  borderColor: "var(--border)",
                  borderRadius: "var(--radius)",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="technical"
                stroke="hsl(var(--chart-1))"
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="clarity"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="confidence"
                stroke="hsl(var(--chart-3))"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}