"use client";

import { useState } from "react";
import { RoleFilters } from "@/components/industry/role-filters";
import { RoleGrid } from "@/components/industry/role-grid";

export function RolesView() {
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedEngTypes, setSelectedEngTypes] = useState<string[]>([]);
  const [selectedRoleTypes, setSelectedRoleTypes] = useState<string[]>([]);

  // We will pass these state setters to the filters and the state values to the grid
  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-1">
        <RoleFilters
            selectedIndustries={selectedIndustries}
            onIndustryChange={setSelectedIndustries}
            selectedEngTypes={selectedEngTypes}
            onEngTypeChange={setSelectedEngTypes}
            selectedRoleTypes={selectedRoleTypes}
            onRoleTypeChange={setSelectedRoleTypes}
        />
      </div>
      <div className="lg:col-span-3">
        <RoleGrid 
            selectedIndustries={selectedIndustries}
            selectedEngTypes={selectedEngTypes}
            selectedRoleTypes={selectedRoleTypes}
        />
      </div>
    </div>
  );
} 