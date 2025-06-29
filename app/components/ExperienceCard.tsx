import { JobItem } from "../types";
import ExperienceCardInformation from "./ExperienceCardInformation";

type ExperienceCardProps = {
  jobList: JobItem;
};
export default function ExperienceCard({ jobList }: ExperienceCardProps) {
  return <ExperienceCardInformation jobList={jobList} />;
}
