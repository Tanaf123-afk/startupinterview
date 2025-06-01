import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Laptop, LineChart, Briefcase, Heart } from "lucide-react";

interface Industry {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

interface IndustryCardProps {
  industry: Industry;
}

const ICONS = {
  Code2,
  Laptop,
  LineChart,
  Briefcase,
  Heart,
};

export function IndustryCard({ industry }: IndustryCardProps) {
  const Icon = ICONS[industry.icon as keyof typeof ICONS];

  return (
    <Link href={`/industry/${industry.slug}`}>
      <Card className="group overflow-hidden h-full transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer">
        <div className="h-40 bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <Icon className="h-16 w-16 text-white" />
        </div>
        <CardHeader>
          <CardTitle className="text-2xl">{industry.name}</CardTitle>
          <CardDescription className="text-base">{industry.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">
            Click to explore roles and companies
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}