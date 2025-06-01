import { SummaryHeader } from "@/components/summary/summary-header";
import { FeedbackSection } from "@/components/summary/feedback-section";
import { ScoreSection } from "@/components/summary/score-section";
import { ResponseList } from "@/components/summary/response-list";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";

interface SummaryPageProps {
  params: {
    sessionId: string;
  };
}

export default async function SummaryPage({ params }: SummaryPageProps) {
  const { sessionId } = params;
  
  const session = await db.interviewSession.findUnique({
    where: {
      id: sessionId,
    },
    include: {
      role: {
        include: {
          company: true,
        },
      },
      responses: true,
    },
  });

  if (!session) {
    return notFound();
  }

  return (
    <div className="container py-8 space-y-8">
      <SummaryHeader session={session} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <ResponseList responses={session.responses} />
        </div>
        <div className="space-y-8">
          <ScoreSection session={session} />
          <FeedbackSection session={session} />
        </div>
      </div>
    </div>
  );
}