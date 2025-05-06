import Link from "next/link";
import { sections } from "../data/db";
import ExperienceCard from "./ExperienceCard";
import SectionCard from "./SectionCard";

function ExperiencePage() {
  return (
    <>
      <div>
        {sections.map((section) => (
          <SectionCard title={section.title} key={section.id} />
        ))}
      </div>
      <div className=" text-landing-neon text-2xl mt-10">
        <Link href="#section1">Section 1</Link>
      </div>
    </>
  );
}

export default ExperiencePage;
