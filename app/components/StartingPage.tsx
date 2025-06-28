import Link from "next/link";
import { sections } from "../data/db";
import styles from "./SectionCard.module.css";
import SectionCard from "./SectionCard";
import Typography from "./Typography";

function ExperiencePage() {
  return (
    <>
      {sections.map((section) => {
        return (
          <SectionCard
            title={section.title}
            key={`${section.id}-${section.title}`}
          />
        );
      })}
    </>
  );
}

export default ExperiencePage;
