import { InterviewSimulation } from "@/components/interview/interview-simulation";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";

interface SimulatePageProps {
  params: {
    sessionId: string;
  };
}

export default async function SimulatePage({ params }: SimulatePageProps) {
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
    },
  });

  if (!session) {
    return notFound();
  }

  // Get the interview questions for this role
  const interviewSets = await db.interviewSet.findMany({
    where: {
      roleId: session.roleId,
    },
    include: {
      questions: {
        orderBy: {
          order: 'asc',
        },
      },
    },
  });

  return (
    <div className="container py-8">
      <InterviewSimulation session={session} interviewSets={interviewSets} />
    </div>
  );
}