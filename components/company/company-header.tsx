import { CompanyWithIndustry } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Building2 } from "lucide-react";
import Link from "next/link";

interface CompanyHeaderProps {
  company: CompanyWithIndustry;
}

export function CompanyHeader({ company }: CompanyHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/browse" className="hover:text-foreground">
          Industries
        </Link>
        <span>/</span>
        <Link href={`/industry/${company.industry.slug}`} className="hover:text-foreground">
          {company.industry.name}
        </Link>
        <span>/</span>
        <span className="text-foreground">{company.name}</span>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
          <Building2 className="h-8 w-8 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{company.name}</h1>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="outline">{company.industry.name}</Badge>
            {company.websiteUrl && (
              <a
                href={company.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                Visit website
              </a>
            )}
          </div>
        </div>
      </div>
      
      {company.description && (
        <p className="text-muted-foreground max-w-3xl">
          {company.description}
        </p>
      )}
    </div>
  );
}