import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/lib/db";

export async function POST(
  req: Request,
  { params }: { params: { sessionId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    
    const { sessionId } = params;
    
    // Verify interview session belongs to user
    const interviewSession = await db.interviewSession.findUnique({
      where: {
        id: sessionId,
      },
      include: {
        user: true,
        responses: true,
      },
    });
    
    if (!interviewSession) {
      return NextResponse.json(
        { error: "Interview session not found" },
        { status: 404 }
      );
    }
    
    if (interviewSession.user.email !== session.user.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    
    // Calculate average scores
    const responses = interviewSession.responses;
    const technicalScore = responses.reduce((sum, response) => sum + (response.technicalScore || 0), 0) / (responses.length || 1);
    const clarityScore = responses.reduce((sum, response) => sum + (response.clarityScore || 0), 0) / (responses.length || 1);
    const confidenceScore = responses.reduce((sum, response) => sum + (response.confidenceScore || 0), 0) / (responses.length || 1);
    
    // Update interview session
    const updatedSession = await db.interviewSession.update({
      where: {
        id: sessionId,
      },
      data: {
        completedAt: new Date(),
        technicalScore,
        clarityScore,
        confidenceScore,
        overallFeedback: "Your responses showed good technical knowledge, but there's room to improve clarity and confidence in your delivery. Try to structure your answers more coherently and maintain a confident tone throughout.",
      },
    });
    
    return NextResponse.json({ 
      sessionId: updatedSession.id,
      technicalScore,
      clarityScore,
      confidenceScore,
    });
  } catch (error) {
    console.error("Error completing interview session:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}