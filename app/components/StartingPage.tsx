import { jobs } from "../data/db";
import ExperienceCard from "./ExperienceCard";
import SectionCard from "./SectionCard";
import Typography from "./Typography";

function StartingPage() {
  return (
    <>
      <SectionCard title="About me">
        <Typography variant="paragraph" color="white">
          Tu contenido sobre ti aquí...
        </Typography>
      </SectionCard>
      <SectionCard title="Experience">
        {jobs.map((job) => (
          <ExperienceCard key={job.id} jobList={job} />
        ))}
      </SectionCard>
      <SectionCard title="Projects">
        <div className="grid grid-cols-2 gap-4"></div>
      </SectionCard>
    </>
  );
}

export default StartingPage;
