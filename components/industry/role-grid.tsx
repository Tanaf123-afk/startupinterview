import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { GeneralPracticeCard } from "./general-practice-card";
import React from "react";

const DUMMY_ROLES = [
  {
    id: 1,
    company: {
      name: "Tesla",
      domain: "tesla.com",
    },
    title: "Mechanical Engineer",
    type: "Graduate Role",
    engineeringType: "Mechanical",
    industry: "engineering"
  },
  {
    id: 2,
    company: {
      name: "SpaceX",
      domain: "spacex.com",
    },
    title: "Aerospace Engineer",
    type: "Summer Internship",
    engineeringType: "Aerospace",
    industry: "engineering"
  },
  {
    id: 3,
    company: {
      name: "Google",
      domain: "google.com",
    },
    title: "Software Engineer",
    type: "Placement Year",
    engineeringType: "Software",
    industry: "technology"
  },
  {
    id: 4,
    company: {
      name: "Intel",
      domain: "intel.com",
    },
    title: "Electrical Engineer",
    type: "Graduate Role",
    engineeringType: "Electrical",
    industry: "technology"
  },
  {
    id: 5,
    company: {
      name: "Boeing",
      domain: "boeing.com",
    },
    title: "Aerospace Engineer",
    type: "Summer Internship",
    engineeringType: "Aerospace",
    industry: "engineering"
  },
  {
    id: 6,
    company: {
      name: "Microsoft",
      domain: "microsoft.com",
    },
    title: "Software Engineer",
    type: "Graduate Role",
    engineeringType: "Software",
    industry: "technology"
  },
  {
    id: 7,
    title: "Investment Banking Analyst",
    company: { name: "Goldman Sachs", domain: "goldmansachs.com" },
    type: "Graduate Role",
    industry: "finance",
  },
  {
    id: 8,
    title: "Management Consultant",
    company: { name: "McKinsey & Company", domain: "mckinsey.com" },
    type: "Summer Internship",
    industry: "consulting",
  },
  {
    id: 9,
    title: "Biotech Research Scientist",
    company: { name: "Pfizer", domain: "pfizer.com" },
    type: "Graduate Role",
    industry: "healthcare",
  }
];

const INDUSTRY_MAP: { [key: string]: string } = {
    engineering: "Engineering",
    technology: "Technology",
    finance: "Finance",
    consulting: "Consulting",
    healthcare: "Healthcare",
};

interface RoleGridProps {
    selectedIndustries: string[];
    selectedEngTypes: string[];
    selectedRoleTypes: string[];
}

export function RoleGrid({ selectedIndustries, selectedEngTypes, selectedRoleTypes }: RoleGridProps) {
  const filteredRoles = DUMMY_ROLES.filter(role => {
    const industryMatch = selectedIndustries.length === 0 || (role.industry && selectedIndustries.includes(role.industry));
    const engTypeMatch = selectedEngTypes.length === 0 || (role.engineeringType && selectedEngTypes.includes(role.engineeringType));
    const roleTypeMatch = selectedRoleTypes.length === 0 || selectedRoleTypes.includes(role.type);
    
    return industryMatch && engTypeMatch && roleTypeMatch;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <GeneralPracticeCard />

      {filteredRoles.map((role) => (
        <Card key={role.id} className="overflow-hidden hover:shadow-md transition-shadow bg-white dark:bg-gray-800">
          <CardHeader className="p-4">
            <div className="flex items-center space-x-4">
              <div className="relative h-12 w-12 rounded-lg overflow-hidden bg-muted">
                <Image
                  src={`https://logo.clearbit.com/${role.company.domain}`}
                  alt={`${role.company.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{role.company.name}</h3>
                <p className="text-sm text-muted-foreground dark:text-gray-300">{role.title}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">{role.type}</Badge>
              {role.engineeringType && (
                <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">{role.engineeringType}</Badge>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 