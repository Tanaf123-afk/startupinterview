interface InterviewTimerProps {
  seconds: number;
  isActive: boolean;
}

export function InterviewTimer({ seconds, isActive }: InterviewTimerProps) {
  // Format seconds to MM:SS
  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const remainingSeconds = secs % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="text-center">
      <div
        className={`text-2xl font-mono ${
          isActive && seconds < 10 ? "text-red-500 animate-pulse" : ""
        }`}
      >
        {formatTime(seconds)}
      </div>
      <p className="text-xs text-muted-foreground">Remaining Time</p>
    </div>
  );
}