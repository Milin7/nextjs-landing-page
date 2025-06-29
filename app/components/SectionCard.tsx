import { ReactNode } from "react";
import { education, jobs } from "../data/db";
import ExperienceCard from "./ExperienceCard";
import FooterTitle from "./FooterTitle";
import styles from "./SectionCard.module.css";
import Typography from "./Typography";

type SectionCardProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export default function SectionCard({
  title,
  children,
  className = "",
}: SectionCardProps) {
  return (
    <section className={`h-screen mt-10 py-5 ml-1 ${className}`}>
      <div className="border-2 text-white border-landing-neon rounded-xl p-7 h-full relative">
        <Typography component="h2" variant="heading2" color="neon" mb="8">
          {title}
        </Typography>
        {children}
      </div>
    </section>
  );
}
