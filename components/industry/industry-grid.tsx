import { IndustryCard } from "@/components/industry/industry-card";

const INDUSTRIES = [
  {
    id: "engineering",
    name: "Engineering",
    slug: "engineering",
    description: "Software, Hardware, and Systems Engineering positions",
    icon: "Code2",
  },
  {
    id: "technology",
    name: "Technology",
    slug: "technology",
    description: "Product, Design, and IT roles",
    icon: "Laptop",
  },
  {
    id: "finance",
    name: "Finance",
    slug: "finance",
    description: "Investment Banking, Trading, and Financial Analysis",
    icon: "LineChart",
  },
  {
    id: "consulting",
    name: "Consulting",
    slug: "consulting",
    description: "Management and Strategy Consulting roles",
    icon: "Briefcase",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    slug: "healthcare",
    description: "Medical, Biotech, and Healthcare Management",
    icon: "Heart",
  },
];

export function IndustryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {INDUSTRIES.map((industry) => (
        <IndustryCard key={industry.id} industry={industry} />
      ))}
    </div>
  );
}