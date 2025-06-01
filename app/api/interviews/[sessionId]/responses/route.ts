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
    const { questionText, videoUrl } = await req.json();
    
    if (!questionText) {
      return NextResponse.json(
        { error: "Question text is required" },
        { status: 400 }
      );
    }
    
    // Verify interview session belongs to user
    const interviewSession = await db.interviewSession.findUnique({
      where: {
        id: sessionId,
      },
      include: {
        user: true,
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
    
    // Create response
    const response = await db.response.create({
      data: {
        interviewSessionId: sessionId,
        questionText,
        videoUrl,
        // In a real implementation, transcription and feedback would be generated
        // after processing the video with AI
        transcription: "Mock transcription for the response.",
        feedback: "Your answer showed good understanding of the core concepts, but could be improved by providing more specific examples.",
        technicalScore: Math.random() * 0.3 + 0.6, // 60-90%
        clarityScore: Math.random() * 0.3 + 0.6,
        confidenceScore: Math.random() * 0.3 + 0.6,
      },
    });
    
    return NextResponse.json({ responseId: response.id });
  } catch (error) {
    console.error("Error creating response:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}