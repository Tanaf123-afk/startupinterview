import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface IndustryHeaderProps {
  slug: string;
}

const INDUSTRY_NAMES: Record<string, string> = {
  engineering: "Engineering",
  technology: "Technology",
  finance: "Finance",
  consulting: "Consulting",
  healthcare: "Healthcare",
};

export function IndustryHeader({ slug }: IndustryHeaderProps) {
  const industryName = INDUSTRY_NAMES[slug] || "Industry";

  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">{industryName}</h1>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search roles or companies..."
          className="pl-10"
        />
      </div>
    </div>
  );
} 