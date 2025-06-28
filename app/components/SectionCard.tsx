import { education, jobs } from "../data/db";
import ExperienceCard from "./ExperienceCard";
import FooterTitle from "./FooterTitle";
import styles from "./SectionCard.module.css";
import Typography from "./Typography";

type SectionCardProps = {
  title: string;
};

export default function SectionCard({ title }: SectionCardProps) {
  const sectionTitles = {
    ABOUT_ME: "About me",
    EXPERIENCE: "Experience",
    PROJECTS: "Projects",
  };

  return (
    <>
      {title === sectionTitles.ABOUT_ME && (
        <section
          id={title.replaceAll(" ", "")}
          className="h-screen mt-10 mr-10"
        >
          <div className="h-full relative">
            <div className="text-white p-7">
              <Typography component="h2" variant="heading2" color="neon" mb="8">
                {title}
              </Typography>
              <Typography variant="paragraph" color="white">
                Your about me content goes here
              </Typography>
              <FooterTitle title={title} />
            </div>
          </div>
        </section>
      )}
      {title === sectionTitles.EXPERIENCE && (
        <section id={title} className="h-screen mt-10 py-5 ml-1">
          <div className="border-2 text-white border-landing-neon rounded-xl p-7 h-full relative">
            <Typography component="h2" variant="heading2" color="neon" mb="8">
              {title}
            </Typography>
            {jobs.map((job) => (
              <ExperienceCard key={job.id} jobList={job} />
            ))}
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
            </div>
          </div>
        </section>
      )}

      {title === sectionTitles.PROJECTS && (
        <section id={title} className="h-screen mt-10 mr-10">
          <div className="border-2 text-white border-landing-neon mt-10 mr-10 rounded-xl p-7 h-full relative">
            <Typography component="h2" variant="heading2" color="neon" mb="8">
              {title}
            </Typography>
            <Typography variant="paragraph" color="white">
              Your projects content goes here
            </Typography>
          </div>
        </section>
      )}
    </>
  );
}
