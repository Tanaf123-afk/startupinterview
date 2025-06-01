import { PageHeader } from "@/components/page-header";
import { mockCompanies, mockRoles } from "@/lib/mock-data";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

interface CompanyPageProps {
  params: {
    slug: string;
  };
}

export default function CompanyPage({ params }: CompanyPageProps) {
  const company = mockCompanies.find((c) => c.slug === params.slug);
  
  if (!company) {
    notFound();
  }

  const companyRoles = mockRoles.filter((role) => role.companyId === company.id);

  return (
    <div className="container py-8 space-y-8">
      <div className="flex items-center gap-6">
        <div className="relative h-20 w-20">
          <Image
            src={company.logoUrl}
            alt={company.name}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{company.name}</h1>
          <p className="text-muted-foreground mt-1">{company.description}</p>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Available Roles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {companyRoles.map((role) => (
            <Link
              key={role.id}
              href={`/role/${role.slug}`}
              className="group block"
            >
              <div className="border rounded-lg p-6 hover:border-primary transition-colors">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {role.title}
                </h3>
                <p className="text-muted-foreground mt-2">{role.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{role.interviewQuestions.length} questions</span>
                  <span>•</span>
                  <span>Mix of technical and behavioral</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}