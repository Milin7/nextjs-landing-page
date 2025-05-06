import Link from "next/link";
import { sections } from "../data/db";
import styles from "./SectionCard.module.css";
import SectionCard from "./SectionCard";
import Typography from "./Typography";

function ExperiencePage() {
  return (
    <>
      <div className="relative">
        {sections.map((section) => {
          return (
            <>
              <SectionCard title={section.title} key={section.id} />
            </>
          );
        })}
      </div>
      <div className=" text-landing-neon text-2xl mt-10">
        <Link href="#section1">Section 1</Link>
      </div>
    </>
  );
}

export default ExperiencePage;
