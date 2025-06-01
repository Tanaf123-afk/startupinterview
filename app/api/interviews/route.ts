import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    
    const { roleId, interviewSetId, jobDescription } = await req.json();
    
    if (!roleId) {
      return NextResponse.json(
        { error: "Role ID is required" },
        { status: 400 }
      );
    }
    
    // Get user
    const user = await db.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });
    
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }
    
    // Create interview session
    const interviewSession = await db.interviewSession.create({
      data: {
        userId: user.id,
        roleId,
        jobDescription,
      },
    });
    
    return NextResponse.json({ sessionId: interviewSession.id });
  } catch (error) {
    console.error("Error creating interview session:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}