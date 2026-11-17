import {
  ResumeHeader,
  ResumeSummary,
  ResumeJob,
  ResumeProject,
  ResumeEducation,
  ResumeContact,
  ResumeModel,
  ResumeSkill,
} from "../types/resume";

const header: ResumeHeader = {
  name: "Samuel T. Morrison",
  location: "sam@morrisoncreativelabs.com",
  position: "Software Engineer",
  careerLength: "since 2018",
};

const objective: ResumeSummary = {
  summary:
    "Software engineer with 8.5 years of experience building and maintaining all aspects behind business applications, from the data layer to the presentation layer. I've implemented relational schema designs, used T-SQL for maintenance and development, used both C# and the .Net framework to collect and organize data, and both javascript and typescript to present it. I've helped take a custom ERP from design to company-wide rollout with 100% adoption and I know how to turn operationsl data into reliable models and reports using my business-based education and my Google Data Analytics certification. ",
};

const careerHistory: ResumeJob[] = [
  {
    role: "Full-Stack Engineer",
    company: "Grimco · Remote",
    dates: "Feb 2022 - June 2026",
    bullets: [
      "Joined the team as a remote contract worker via Technology Partners Inc., and was converted 6 months into the project",
      "Core member of development team that helped create a custom ERP system, which has been successfully implemented company-wide as a viable alternative to Salesforce",
      "Responsible for refactoring our front end to utilize TypeScript and React Query, instead of using Redux and plain JavaScript",
      "Diagnosed and repaired complex T-SQL queries hydrating production API endpoints, using SSMS to validate query logic and performance before deploying fixes",
      "Maintained database schema via code-first Entity Framework Core migrations, applying and troubleshooting schema changes from the .NET CLI",
      "Tech stack used: SQL & Elastic for data, using a code first approach, .NET 4.8 for shared data, .NET 10 for ERP backend, React & Typescript for presentation",
      "Took our custom ERP system from the design phase to a company-wide rollout, achieving 100% adoption among reps and approximately 90-95% current daily use rate",
      "Assisted in duplicating and rolling out the ERP system and db to an environment set up for the Canadian market",
      "All applications hosted in Azure. Responsible for creating and running build pipelines, deploying and maintaining both dev and prod environments via Azure Devops",
      "Maintained and created Azure functions, keyvaults, and dedicated blob storage for inbound payments, purchase orders, and processing invoices",
    ],
  },
  {
    role: "Full-Stack Engineer",
    company: "MOCAP · Park Hills, MO",
    dates: "July 2019 - Dec 2021",
    bullets: [
      ".NET Developer for a multi-national plastics manufacturer, headquartered in Park Hills, MO",
      "Maintained SQL database and a legacy ERP system written in VB for a small plastics manufacturing company",
      "Responsible for generating revenue and product reports using SSRS",
      "Managed SQL stored procedures and database functions used for shipping services and spec sheets for production items via SSMS",
      "Performed help desk duties for the C-suite, customer service, and the sales department",
    ],
  },
  {
    role: "Software Engineer",
    company: "Russell Cellular · Springfield, MO",
    dates: "Jan 2018 - July 2019",
    bullets: [
      "Re-architected client-side JavaScript sites into server-backed ASP.NET Core applications with Entity Framework Core and SQL Server",
      "Implemented an external survey text tool that would gather customer service data allowing employees to qualify for performance bonuses",
    ],
  },
];

const gitLinks: ResumeProject[] = [
  {
    name: "MorrisonCreativeLabs.com",
    context: "Personal",
    dates: "est. 2016",
    bullets: [
      "Personal portfolio site, currently designed to showcase my work help me find my team",
      "Source code available for review at https://github.com/st-morrison/MorrisonCreativeLabsWebsite",
      "Stack: React, Node.js, TypeScript, hosted on Bluehost",
    ],
  },
  {
    name: "TradeWindsTaxi.org",
    context: "Private Client",
    dates: "2022 - Present",
    bullets: [
      "Provides an internet presence for a small-town taxi service in Farmington, MO",
      "Stack: React, Node.js, TypeScript, hosted on Bluehost",
    ],
  },
];

const skillset = [
  "C# / .NET",
  "React",
  "TypeScript",
  "Node.js",
  "SQL",
  "Google Data Analytics Certification",
  "CI/CD Pipeline",
  "Microsoft Azure / Dev Ops",
];

const skills: ResumeSkill[] = [
  {
    category: "Software Engineering",
    skillSet:
      "C#/.NET, TypeScript, React, JavaScript, Git, and AI-assisted coding tasks such as debugging and code generation",
  },
  {
    category: "Cloud & DevOps",
    skillSet:
      "Microsoft Azure (Functions, Key Vault, Blob Storage), Azure DevOps both manual deployments as well as CI/CD pipelines, dev and prod environment management",
  },
  {
    category: "Data Engineering",
    skillSet:
      "SQL Server / T-SQL, schema design and data modeling, EF Core migrations, ETL with Azure Functions and Blob Storage, Elasticsearch",
  },
];

const agenticSolutions = [
  "Claude - AI paired programming, technical writing, & general rubber duck sessions",
  "Claude Code - Agentic CLI integrated workflow used to streamline complex coding tasks.",
];

const education: ResumeEducation[] = [
  {
    cert: "Google Data Analytics Professional Certificate",
    details: "Google/Coursera, 2026",
  },
  {
    cert: "Missouri State University",
    details: "Coursework toward B.B.A., Computer Information Systems",
    detailContext: "left to begin a full-time software development role",
  },
  {
    cert: "Certificate in Computer Information Sciences",
    details: "Ozark Technical College, 2017",
  },
];

const contact: ResumeContact = {
  email: "sam@morrisonCreativeLabs.com",
  website: "morrisoncreativelabs.com",
  phone: "573-880-2391",
  linkedIn: "www.linkedin.com/in/samuel-m-6ab767125",
};

export const resumeData: ResumeModel = {
  contact,
  header,
  objective,
  experience: careerHistory,
  projects: gitLinks,
  coreSkills: skillset,
  education,
  agenticSolutions,
  skills,
};
