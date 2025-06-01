import { IndustryGrid } from "@/components/industry/industry-grid";
import { PageHeader } from "@/components/page-header";

export default function BrowsePage() {
  return (
    <div className="container py-8 space-y-8">
      <PageHeader
        title="Browse Industries"
        description="Explore and practice interviews for various industries"
      />
      <IndustryGrid />
    </div>
  );
}