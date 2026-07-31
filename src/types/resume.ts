export interface ResumeHeader {
  name: string;
  location: string;
  position: string;
  careerLength: string;
}

export interface ResumeObjective {
  missionStatement: string;
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
  institution: string;
  dates: string;
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
  objective: ResumeObjective;
  experience: ResumeJob[];
  projects: ResumeProject[];
  coreSkills: string[];
  agenticSolutions: string[];
  education: ResumeEducation[];
}
