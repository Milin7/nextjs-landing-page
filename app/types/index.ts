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
