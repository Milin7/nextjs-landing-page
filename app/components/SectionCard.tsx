import { ReactNode } from "react";
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
      <div
        className={` text-white ${
          title === "About me" ? "" : "border-2 border-landing-neon"
        } rounded-xl p-7 h-full relative mr-4`}
        id={title}
      >
        <Typography component="h2" variant="heading2" color="neon" mb="8">
          {title}
        </Typography>
        {children}
      </div>
    </section>
  );
}
