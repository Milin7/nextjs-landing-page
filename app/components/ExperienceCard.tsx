import { JobItem } from "../types";
import Typography from "./Typography";

type ExperienceCardProps = {
  jobList: JobItem;
};

export default function ExperienceCard({ jobList }: ExperienceCardProps) {
  return (
    <div className="cursor-default mt-10">
      <div className="relative">
        <svg
          width="8"
          height="8"
          viewBox="0 0 4 4"
          xmlns="http://www.w3.org/2000/svg"
          className="text-landing-neon absolute -left-[33px] top-1/2 -translate-y-1/2"
        >
          <circle cx="2" cy="2" r="2" fill="currentColor" />
        </svg>
        <Typography component="h3" mb="2" variant="heading3">
          {jobList.jobDetails.name}
        </Typography>
        <ul className="w-full">
          <li> {jobList.jobDetails.date}</li>
          <li>{jobList.jobDetails.role}</li>
          <li>{jobList.jobDetails.description}</li>
        </ul>
      </div>
    </div>
  );
}
