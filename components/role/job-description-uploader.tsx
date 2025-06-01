"use client";

import { useState, useCallback } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useDropzone } from "react-dropzone";
import { Upload, File, X, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface JobDescriptionUploaderProps {
  roleId: string;
}

export function JobDescriptionUploader({ roleId }: JobDescriptionUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Accept only PDFs under 5MB
    const selectedFile = acceptedFiles[0];
    if (selectedFile) {
      if (selectedFile.type !== "application/pdf") {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF file",
          variant: "destructive",
        });
        return;
      }
      
      if (selectedFile.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      
      setFile(selectedFile);
    }
  }, [toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "application/pdf": [".pdf"],
    },
  });

  const uploadFile = async () => {
    if (!file) return;
    
    setIsUploading(true);
    
    try {
      // Mock upload for now
      // In a real implementation, you would upload to a storage service
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      toast({
        title: "Job description uploaded",
        description: "Your interview questions will be tailored to this job description",
      });
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error uploading your job description",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const removeFile = () => {
    setFile(null);
    setIsSuccess(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Job Description</CardTitle>
        <CardDescription>
          Enhance your interview practice by uploading a job description for more tailored questions.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!file ? (
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragActive
                ? "border-primary/50 bg-primary/5"
                : "border-border hover:border-primary/50 hover:bg-primary/5"
            }`}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center gap-2">
              <Upload className="h-8 w-8 text-muted-foreground" />
              <p className="font-medium">
                {isDragActive
                  ? "Drop the file here..."
                  : "Drag and drop a PDF, or click to browse"}
              </p>
              <p className="text-sm text-muted-foreground">
                PDF files only, max 5MB
              </p>
            </div>
          </div>
        ) : (
          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center">
                  <File className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm truncate max-w-[180px]">
                    {file.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {(file.size / 1024).toFixed(1)} KB
                  </p>
                </div>
              </div>
              {isSuccess ? (
                <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                  <Check className="h-4 w-4 text-white" />
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={removeFile}
                  disabled={isUploading}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        )}

        {file && !isSuccess && (
          <Button
            onClick={uploadFile}
            disabled={isUploading}
            className="w-full"
          >
            {isUploading ? "Uploading..." : "Upload Job Description"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}