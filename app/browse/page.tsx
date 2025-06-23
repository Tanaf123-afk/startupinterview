import { PageHeader } from "@/components/page-header";
import { RolesView } from "./roles-view";

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Browse Roles"
          description="Find your perfect role and start practicing for your interview"
        />
        <RolesView />
      </div>
    </div>
  );
}