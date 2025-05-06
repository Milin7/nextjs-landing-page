import { jobs } from "../data/db";
import { JobItem } from "../types";
import ExperienceCard from "./ExperienceCard";

type SectionCardProps = {
  title: string;
};

export default function SectionCard({ title }: SectionCardProps) {
  return (
    <>
      {title === "Experience" && (
        <div className="mt-10 mr-10">
          <div className="border-2 text-white border-landing-neon rounded-xl p-7">
            <h1 className="uppercase text-landing-neon tracking-widest text-2xl mt-2">
              {title}
            </h1>
            {jobs.map((job) => (
              <ExperienceCard key={job.id} jobList={job} />
            ))}
          </div>
        </div>
      )}
      {title === "About me" && (
        <div className="mt-10 mr-10">
          <div className="border-2 text-white border-landing-neon rounded-xl p-7">
            <h1 className="uppercase text-landing-neon tracking-widest text-2xl mt-2">
              {title}
            </h1>
            <p className="text-white mt-4">Your about me content goes here</p>
          </div>
        </div>
      )}
      {title === "Projects" && (
        <div className="mt-10 mr-10">
          <div className="border-2 text-white border-landing-neon rounded-xl p-7">
            <h1 className="uppercase text-landing-neon tracking-widest text-2xl mt-2">
              {title}
            </h1>
            <p className="text-white mt-4">Your projects content goes here</p>
          </div>
        </div>
      )}
    </>
  );
}
