export interface JobDetails {
  name: string;
  date: string;
  role: string;
  description: string;
}

export interface JobItem {
  jobDetails: JobDetails;
  id: number;
}

export interface SectionItem {
  id: number;
  title: string;
}
export interface EducationItem {
  id: number;
  title: string;
  name: string;
  degree: string;
  date: string;
}
