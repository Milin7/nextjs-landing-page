import Link from "next/link";
import Typography from "./Typography";
import { sections } from "../data/db";

export const NavBarLinks = () => {
  return (
    <>
      {sections.map((section) => (
        <li key={section.id}>
          <Link href={`#${section.title}`}>
            <Typography
              className="container mb-2"
              variant="start"
              component="div"
              mt="24"
            >
              <div className="link-left-line border-t-1 border-landing-neon mt-4 w-20 mr-2"></div>
              <Typography component="h3" variant="heading4" color="neon">
                {section.title}
              </Typography>
            </Typography>
          </Link>
        </li>
      ))}
    </>
  );
};
