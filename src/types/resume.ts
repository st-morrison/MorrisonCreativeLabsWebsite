export interface ResumeHeader {
  name: string;
  location: string;
  position: string;
  careerLength: string;
}

export interface ResumeSummary {
  summary: string;
}

export interface ResumeJob {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
}

export interface ResumeProject {
  name: string;
  context: string;
  dates: string;
  bullets: string[];
}

export interface ResumeEducation {
  cert: string;
  details: string;
  detailContext?: string;
}

export interface ResumeSkill {
  category: string;
  skillSet: string;
}

export interface ResumeContact {
  email: string;
  phone: string;
  website: string;
  linkedIn: string;
}

export interface ResumeModel {
  contact: ResumeContact;
  header: ResumeHeader;
  objective: ResumeSummary;
  experience: ResumeJob[];
  projects: ResumeProject[];
  coreSkills: string[];
  agenticSolutions: string[];
  education: ResumeEducation[];
  skills: ResumeSkill[];
}
