import { JobItem } from "../types";
import Typography from "./Typography";

export default function ExperienceCardInformation({
  jobList,
}: {
  jobList: JobItem;
}) {
  return (
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

      <ul>
        <li>
          <Typography component="p" variant="paragraph">
            {jobList.jobDetails.role}
            <br />
            {jobList.jobDetails.date}
            <br />
            {jobList.jobDetails.description}
          </Typography>
        </li>
      </ul>
    </div>
  );
}
