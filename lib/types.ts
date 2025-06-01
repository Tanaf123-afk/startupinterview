import { Industry, Company, Role, InterviewSet, Question, InterviewSession, Response, InterviewSetType } from "@prisma/client";

export type IndustryWithCompanies = Industry & {
  companies: Company[];
};

export type CompanyWithIndustry = Company & {
  industry: Industry;
};

export type RoleWithCompany = Role & {
  company: Company;
};

export type InterviewSetWithQuestions = InterviewSet & {
  questions: Question[];
};

export type InterviewSessionWithRelations = InterviewSession & {
  role: RoleWithCompany;
  responses: Response[];
};