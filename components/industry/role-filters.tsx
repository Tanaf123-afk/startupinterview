import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from "react";

const INDUSTRIES = [
    { id: "engineering", name: "Engineering" },
    { id: "technology", name: "Technology" },
    { id: "finance", name: "Finance" },
    { id: "consulting", name: "Consulting" },
    { id: "healthcare", name: "Healthcare" },
];

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

interface RoleFiltersProps {
    selectedIndustries: string[];
    onIndustryChange: (selected: string[]) => void;
    selectedEngTypes: string[];
    onEngTypeChange: (selected: string[]) => void;
    selectedRoleTypes: string[];
    onRoleTypeChange: (selected: string[]) => void;
}

export function RoleFilters({
    selectedIndustries,
    onIndustryChange,
    selectedEngTypes,
    onEngTypeChange,
    selectedRoleTypes,
    onRoleTypeChange,
}: RoleFiltersProps) {

    const handleCheckboxChange = (
        currentSelected: string[],
        setter: (selected: string[]) => void,
        value: string
    ) => {
        const newSelected = currentSelected.includes(value)
            ? currentSelected.filter((item) => item !== value)
            : [...currentSelected, value];
        setter(newSelected);
    };

  return (
    <Card className="bg-white dark:bg-gray-800 sticky top-24">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Accordion type="multiple" defaultValue={['industry', 'engineering-type', 'role-type']} className="w-full">
          <AccordionItem value="industry">
            <AccordionTrigger className="font-medium text-gray-900 dark:text-white">Industry</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-2">
                {INDUSTRIES.map((industry) => (
                  <div key={industry.id} className="flex items-center space-x-2">
                    <Checkbox 
                        id={industry.id} 
                        checked={selectedIndustries.includes(industry.id)}
                        onCheckedChange={() => handleCheckboxChange(selectedIndustries, onIndustryChange, industry.id)}
                    />
                    <Label htmlFor={industry.id} className="text-gray-700 dark:text-gray-300">{industry.name}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="engineering-type">
            <AccordionTrigger className="font-medium text-gray-900 dark:text-white">Type of Engineering</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-2">
                {ENGINEERING_TYPES.map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox 
                        id={type} 
                        checked={selectedEngTypes.includes(type)}
                        onCheckedChange={() => handleCheckboxChange(selectedEngTypes, onEngTypeChange, type)}
                    />
                    <Label htmlFor={type} className="text-gray-700 dark:text-gray-300">{type}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="role-type">
            <AccordionTrigger className="font-medium text-gray-900 dark:text-white">Role Type</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-2">
                {ROLE_TYPES.map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox 
                        id={type} 
                        checked={selectedRoleTypes.includes(type)}
                        onCheckedChange={() => handleCheckboxChange(selectedRoleTypes, onRoleTypeChange, type)}
                    />
                    <Label htmlFor={type} className="text-gray-700 dark:text-gray-300">{type}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
} 