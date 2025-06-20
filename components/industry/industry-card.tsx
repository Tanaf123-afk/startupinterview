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
      <Card className="group overflow-hidden h-full transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer bg-white dark:bg-gray-800">
        <div className="h-40 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <Icon className="h-16 w-16 text-white" />
        </div>
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900 dark:text-white">{industry.name}</CardTitle>
          <CardDescription className="text-base text-gray-600 dark:text-gray-300">{industry.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Click to explore roles and companies
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}