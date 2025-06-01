"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, Mic, MicOff, Camera, CameraOff } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface InterviewCameraProps {
  isRecording: boolean;
  onStart: () => void;
  onStop: () => void;
  onFinish?: () => void;
  isTimerActive?: boolean;
}

export function InterviewCamera({ 
  isRecording, 
  onStart, 
  onStop, 
  onFinish,
  isTimerActive = false 
}: InterviewCameraProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [stream, setStream] = useState<MediaStream | null>(null);

  // Initialize camera
  useEffect(() => {
    const startCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
        
        setStream(mediaStream);
        setHasPermission(true);
      } catch (err) {
        console.error("Error accessing camera:", err);
        setHasPermission(false);
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  // Toggle camera
  const toggleCamera = () => {
    if (!stream) return;
    
    const videoTrack = stream.getVideoTracks()[0];
    if (videoTrack) {
      videoTrack.enabled = !isCameraOn;
      setIsCameraOn(!isCameraOn);
    }
  };

  // Toggle microphone
  const toggleMic = () => {
    if (!stream) return;
    
    const audioTrack = stream.getAudioTracks()[0];
    if (audioTrack) {
      audioTrack.enabled = !isMicOn;
      setIsMicOn(!isMicOn);
    }
  };

  if (hasPermission === false) {
    return (
      <Alert variant="destructive" className="m-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Camera access denied</AlertTitle>
        <AlertDescription>
          Please allow camera and microphone access in your browser settings to continue with the interview.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="relative">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className={`w-full aspect-video bg-black ${
          !isCameraOn ? "invisible" : ""
        }`}
      />
      
      {!isCameraOn && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="text-center text-white">
            <CameraOff className="h-12 w-12 mx-auto mb-2" />
            <p>Camera is off</p>
          </div>
        </div>
      )}
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
        <Button
          variant={isCameraOn ? "secondary" : "outline"}
          size="icon"
          onClick={toggleCamera}
          disabled={!hasPermission || isRecording || isTimerActive}
        >
          {isCameraOn ? (
            <Camera className="h-5 w-5" />
          ) : (
            <CameraOff className="h-5 w-5" />
          )}
        </Button>
        <Button
          variant={isMicOn ? "secondary" : "outline"}
          size="icon"
          onClick={toggleMic}
          disabled={!hasPermission || isRecording || isTimerActive}
        >
          {isMicOn ? (
            <Mic className="h-5 w-5" />
          ) : (
            <MicOff className="h-5 w-5" />
          )}
        </Button>
        {isRecording && onFinish && (
          <Button
            variant="destructive"
            size="sm"
            onClick={onFinish}
            className="ml-2"
          >
            Finish Answer
          </Button>
        )}
      </div>
    </div>
  );
}