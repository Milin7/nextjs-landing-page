import { education, jobs } from "../data/db";
import ExperienceCard from "./ExperienceCard";
import styles from "./SectionCard.module.css";
import Typography from "./Typography";

type SectionCardProps = {
  title: string;
};

export default function SectionCard({ title }: SectionCardProps) {
  return (
    <>
      {title === "Experience" && (
        <div className="mt-10 py-20 mr-10">
          <div className=" border-2 text-white border-landing-neon rounded-xl p-7">
            <Typography component="h2" variant="heading2" color="neon" mb="8">
              {title}
            </Typography>
            {jobs.map((job) => (
              <ExperienceCard key={job.id} jobList={job} />
            ))}
            <Typography
              className="absolute bottom-0 right-0"
              component="div"
              variant="heading1"
            >
              {title}
            </Typography>
          </div>
          <div className="relative p-7">
            {education.map((school) => (
              <div key={school.id}>
                <Typography
                  component="h2"
                  variant="heading2"
                  color="neon"
                  mb="4"
                >
                  {school.title}
                </Typography>
                <ul className={styles.list}>
                  <li className={styles.title}>
                    <Typography component="h3" mb="2" variant="heading3">
                      {school.name}
                    </Typography>
                  </li>
                  <li>{school.date}</li>
                  <li>{school.degree}</li>
                </ul>
              </div>
            ))}
            <Typography
              className="absolute bottom-0 right-120"
              component="div"
              variant="heading1"
            >
              {title}
            </Typography>
          </div>
        </div>
      )}
      {title === "About me" && (
        <div className="mt-10 mr-10">
          <div className="border-2 text-white border-landing-neon rounded-xl p-7">
            <Typography component="h2" variant="heading2" color="neon" mb="8">
              {title}
            </Typography>
            <Typography variant="paragraph" color="white">
              Your about me content goes here
            </Typography>
          </div>
        </div>
      )}
      {title === "Projects" && (
        <div className="mt-10 mr-10">
          <div className="border-2 text-white border-landing-neon rounded-xl p-7">
            <Typography component="h2" variant="heading2" color="neon" mb="8">
              {title}
            </Typography>
            <Typography variant="paragraph" color="white">
              Your projects content goes here
            </Typography>
          </div>
        </div>
      )}
    </>
  );
}
