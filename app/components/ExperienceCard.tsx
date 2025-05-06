import { JobItem } from "../types";

type ExperienceCardProps = {
  jobList: JobItem;
};

export default function ExperienceCard({ jobList }: ExperienceCardProps) {
  return (
    <div className="cursor-default max-h-11 relative my-20 pl-5">
      <svg
        width="8"
        height="8"
        viewBox="0 0 4 4"
        xmlns="http://www.w3.org/2000/svg"
        className="text-landing-neon absolute -left-[33px] top-1/2 -translate-y-1/2"
      >
        <circle cx="2" cy="2" r="2" fill="currentColor" />
      </svg>
      <h2>{jobList.jobDetails.name}</h2>
      <p className="w-full">{jobList.jobDetails.date}</p>
      <p>{jobList.jobDetails.role}</p>
      <p>{jobList.jobDetails.description}</p>
    </div>
  );
}
