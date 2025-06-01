export interface Industry {
  id: string;
  name: string;
  description: string;
  slug: string;
  imageUrl: string;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  slug: string;
  logoUrl: string;
  websiteUrl: string;
  industryId: string;
}

export interface Role {
  id: string;
  title: string;
  description: string;
  slug: string;
  companyId: string;
  interviewQuestions: InterviewQuestion[];
}

export interface InterviewQuestion {
  id: string;
  text: string;
  type: 'technical' | 'behavioral' | 'competency';
  source: 'manual' | 'ai-generated';
  hints?: string;
  idealAnswer?: string;
}

export const mockIndustries: Industry[] = [
  {
    id: 'engineering',
    name: 'Engineering',
    description: 'Mechanical, aerospace, and industrial engineering roles',
    slug: 'engineering',
    imageUrl: '/images/industries/engineering.jpg'
  },
  {
    id: 'tech',
    name: 'Technology',
    description: 'Software development, IT services, and digital innovation',
    slug: 'technology',
    imageUrl: '/images/industries/tech.jpg'
  },
  {
    id: 'finance',
    name: 'Finance',
    description: 'Banking, investment, and financial services',
    slug: 'finance',
    imageUrl: '/images/industries/finance.jpg'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Medical services, pharmaceuticals, and healthcare technology',
    slug: 'healthcare',
    imageUrl: '/images/industries/healthcare.jpg'
  },
  {
    id: 'consulting',
    name: 'Consulting',
    description: 'Management consulting, strategy, and business advisory',
    slug: 'consulting',
    imageUrl: '/images/industries/consulting.jpg'
  }
];

export const mockCompanies: Company[] = [
  {
    id: 'rolls-royce',
    name: 'Rolls-Royce',
    description: 'A world-leading industrial technology company focused on world-class power and propulsion systems',
    slug: 'rolls-royce',
    logoUrl: '/images/companies/rolls-royce.png',
    websiteUrl: 'https://www.rolls-royce.com',
    industryId: 'engineering'
  },
  {
    id: 'airbus',
    name: 'Airbus',
    description: 'A global pioneer in aeronautics, space, and defense-related services',
    slug: 'airbus',
    logoUrl: '/images/companies/airbus.png',
    websiteUrl: 'https://www.airbus.com',
    industryId: 'engineering'
  },
  {
    id: 'bp',
    name: 'BP',
    description: 'A global energy company with a focus on renewable energy and sustainable solutions',
    slug: 'bp',
    logoUrl: '/images/companies/bp.png',
    websiteUrl: 'https://www.bp.com',
    industryId: 'engineering'
  },
  {
    id: 'google',
    name: 'Google',
    description: 'Coming soon',
    slug: 'google',
    logoUrl: '/images/companies/google.png',
    websiteUrl: 'https://google.com',
    industryId: 'tech'
  },
  {
    id: 'jpmorgan',
    name: 'JPMorgan Chase',
    description: 'Coming soon',
    slug: 'jpmorgan',
    logoUrl: '/images/companies/jpmorgan.png',
    websiteUrl: 'https://jpmorgan.com',
    industryId: 'finance'
  }
];

export const mockRoles: Role[] = [
  {
    id: 'mechanical-engineer-rr',
    title: 'Mechanical Engineer',
    description: 'Design and develop advanced propulsion systems and power solutions',
    slug: 'mechanical-engineer',
    companyId: 'rolls-royce',
    interviewQuestions: [
      {
        id: 'q1',
        text: 'How would you approach designing a new turbine blade for improved efficiency?',
        type: 'technical',
        source: 'manual',
        hints: 'Consider materials, aerodynamics, and thermal properties',
        idealAnswer: 'A good answer would cover material selection, CFD analysis, thermal analysis, and manufacturing constraints'
      },
      {
        id: 'q2',
        text: 'Tell me about a challenging engineering problem you solved.',
        type: 'behavioral',
        source: 'manual',
        hints: 'Focus on your problem-solving process and the outcome',
        idealAnswer: 'A good answer would demonstrate analytical thinking and methodical problem-solving'
      }
    ]
  },
  {
    id: 'aerospace-engineer-airbus',
    title: 'Aerospace Engineer',
    description: 'Design and develop aircraft structures and systems',
    slug: 'aerospace-engineer',
    companyId: 'airbus',
    interviewQuestions: [
      {
        id: 'q3',
        text: 'How would you optimize an aircraft wing design for fuel efficiency?',
        type: 'technical',
        source: 'manual',
        hints: 'Consider aerodynamics, structural integrity, and weight reduction',
        idealAnswer: 'A good answer would cover aerodynamic principles, material selection, and design optimization techniques'
      },
      {
        id: 'q4',
        text: 'Describe a time when you had to balance safety requirements with performance goals.',
        type: 'behavioral',
        source: 'manual',
        hints: 'Focus on decision-making process and risk assessment',
        idealAnswer: 'A good answer would show understanding of safety standards and engineering trade-offs'
      }
    ]
  },
  {
    id: 'process-engineer-bp',
    title: 'Process Engineer',
    description: 'Design and optimize energy production and processing systems',
    slug: 'process-engineer',
    companyId: 'bp',
    interviewQuestions: [
      {
        id: 'q5',
        text: 'How would you improve the efficiency of a chemical processing plant?',
        type: 'technical',
        source: 'manual',
        hints: 'Consider process optimization, energy efficiency, and safety',
        idealAnswer: 'A good answer would cover process analysis, control systems, and sustainability considerations'
      },
      {
        id: 'q6',
        text: 'Tell me about a time when you implemented a process improvement.',
        type: 'behavioral',
        source: 'manual',
        hints: 'Focus on methodology and measurable results',
        idealAnswer: 'A good answer would demonstrate process improvement techniques and project management skills'
      }
    ]
  }
]; 