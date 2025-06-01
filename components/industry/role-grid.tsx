import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const DUMMY_ROLES = [
  {
    id: 1,
    company: {
      name: "Tesla",
      logo: "/companies/tesla.png",
    },
    title: "Mechanical Engineer",
    type: "Graduate Role",
    engineeringType: "Mechanical",
  },
  {
    id: 2,
    company: {
      name: "SpaceX",
      logo: "/companies/spacex.png",
    },
    title: "Aerospace Engineer",
    type: "Summer Internship",
    engineeringType: "Aerospace",
  },
  {
    id: 3,
    company: {
      name: "Google",
      logo: "/companies/google.png",
    },
    title: "Software Engineer",
    type: "Placement Year",
    engineeringType: "Software",
  },
  {
    id: 4,
    company: {
      name: "Intel",
      logo: "/companies/intel.png",
    },
    title: "Electrical Engineer",
    type: "Graduate Role",
    engineeringType: "Electrical",
  },
  {
    id: 5,
    company: {
      name: "Boeing",
      logo: "/companies/boeing.png",
    },
    title: "Aerospace Engineer",
    type: "Summer Internship",
    engineeringType: "Aerospace",
  },
  {
    id: 6,
    company: {
      name: "Microsoft",
      logo: "/companies/microsoft.png",
    },
    title: "Software Engineer",
    type: "Graduate Role",
    engineeringType: "Software",
  },
];

export function RoleGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {DUMMY_ROLES.map((role) => (
        <Card key={role.id} className="overflow-hidden hover:shadow-md transition-shadow">
          <CardHeader className="p-4">
            <div className="flex items-center space-x-4">
              <div className="relative h-12 w-12 rounded-lg overflow-hidden bg-muted">
                <Image
                  src={role.company.logo}
                  alt={`${role.company.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold">{role.company.name}</h3>
                <p className="text-sm text-muted-foreground">{role.title}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">{role.type}</Badge>
              <Badge variant="outline">{role.engineeringType}</Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 