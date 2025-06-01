import { db } from "@/lib/db";
import { InterviewSetCard } from "@/components/role/interview-set-card";
import { InterviewSet } from "@prisma/client";

interface InterviewSetsListProps {
  roleId: string;
  interviewSets: InterviewSet[];
}

export async function InterviewSetsList({ roleId, interviewSets }: InterviewSetsListProps) {
  if (interviewSets.length === 0) {
    return (
      <div className="text-center p-8 border rounded-lg">
        <p>No interview sets found for this role. Check back later.</p>
      </div>
    );
  }

  // Get questions count for each set
  const setsWithQuestions = await Promise.all(
    interviewSets.map(async (set) => {
      const questions = await db.question.count({
        where: {
          interviewSetId: set.id,
        },
      });
      return {
        ...set,
        questionsCount: questions,
      };
    })
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Interview Sets</h2>
      <div className="space-y-4">
        {setsWithQuestions.map((set) => (
          <InterviewSetCard key={set.id} set={set} roleId={roleId} />
        ))}
      </div>
    </div>
  );
}