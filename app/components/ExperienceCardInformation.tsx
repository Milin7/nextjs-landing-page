import { JobItem } from "../types";
import TimeLineDot from "./TimeLineDot";
import Typography from "./Typography";

export default function ExperienceCardInformation({
  jobList,
}: {
  jobList: JobItem;
}) {
  const { name, role, date, description } = jobList.jobDetails;
  return (
    <div className="relative mb-8">
      <TimeLineDot />
      <Typography component="h3" mb="2" variant="heading3">
        {name}
      </Typography>
      <div className="flex justify-between">
        <Typography component="p" variant="text-xl">
          {role}
        </Typography>
        <Typography component="p" variant="paragraph">
          {date}
        </Typography>
      </div>
      <Typography component="p" variant="paragraph">
        {description}
      </Typography>
    </div>
  );
}
