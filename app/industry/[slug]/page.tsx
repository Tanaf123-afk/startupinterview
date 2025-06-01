import { IndustryHeader } from "@/components/industry/industry-header";
import { RoleFilters } from "@/components/industry/role-filters";
import { RoleGrid } from "@/components/industry/role-grid";

const VALID_SLUGS = ["engineering", "technology", "finance", "consulting", "healthcare"];

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({
    slug,
  }));
}

interface IndustryPageProps {
  params: {
    slug: string;
  };
}

export default function IndustryPage({ params }: IndustryPageProps) {
  // Validate the slug
  if (!VALID_SLUGS.includes(params.slug)) {
    return (
      <div className="container max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Industry not found</h1>
      </div>
    );
  }

  return (
    <div className="container max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <IndustryHeader slug={params.slug} />
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <RoleFilters />
        </div>
        <div className="lg:col-span-3">
          <RoleGrid />
        </div>
      </div>
    </div>
  );
} 