import { PageHeader } from "@/components/page-header";
import { mockCompanies, mockRoles } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface RolePageProps {
  params: {
    slug: string;
  };
}

export default function RolePage({ params }: RolePageProps) {
  const role = mockRoles.find((r) => r.slug === params.slug);
  
  if (!role) {
    notFound();
  }

  const company = mockCompanies.find((c) => c.id === role.companyId);

  return (
    <div className="container py-8 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/browse" className="hover:text-primary">
            Browse
          </Link>
          <span>/</span>
          <Link href={`/company/${company?.slug}`} className="hover:text-primary">
            {company?.name}
          </Link>
          <span>/</span>
          <span>{role.title}</span>
        </div>
        
        <div>
          <h1 className="text-3xl font-bold">{role.title}</h1>
          <p className="text-muted-foreground mt-1">{role.description}</p>
        </div>
      </div>

      <div className="flex justify-end">
        <Button asChild size="lg">
          <Link href="/auth/signin?callbackUrl=/simulate">
            Start Interview
          </Link>
        </Button>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Interview Questions</h2>
        <div className="grid gap-6">
          {role.interviewQuestions.map((question) => (
            <Card key={question.id} className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-lg">{question.text}</p>
                  {question.hints && (
                    <p className="text-sm text-muted-foreground">
                      Hint: {question.hints}
                    </p>
                  )}
                </div>
                <Badge variant="outline">
                  {question.type}
                </Badge>
              </div>
              {question.idealAnswer && (
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm font-medium">Ideal Answer:</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {question.idealAnswer}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
} 