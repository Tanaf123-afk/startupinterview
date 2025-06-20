import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const ENGINEERING_TYPES = [
  "Mechanical",
  "Electrical",
  "Civil",
  "Software",
  "Chemical",
  "Aerospace",
  "Biomedical",
  "Industrial",
];

const ROLE_TYPES = [
  "Summer Internship",
  "Placement Year",
  "Graduate Role",
];

export function RoleFilters() {
  return (
    <Card className="bg-white dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium text-gray-900 dark:text-white">Type of Engineering</h3>
          <div className="space-y-2">
            {ENGINEERING_TYPES.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox id={type} />
                <Label htmlFor={type} className="text-gray-700 dark:text-gray-300">{type}</Label>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium text-gray-900 dark:text-white">Role Type</h3>
          <div className="space-y-2">
            {ROLE_TYPES.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox id={type} />
                <Label htmlFor={type} className="text-gray-700 dark:text-gray-300">{type}</Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 