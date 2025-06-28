import { ExperienceCardProps, JobItem } from "../types";

import ExperienceCardInformation from "./ExperienceCardInformation";

export default function ExperienceCard({ jobList }: ExperienceCardProps) {
  return <ExperienceCardInformation jobList={jobList} />;
}
