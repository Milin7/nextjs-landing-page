import Link from "next/link";
import { sections } from "../data/db";
import HeadingTitle from "./HeadingTitle";
import Typography from "./Typography";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className="sticky top-0 h-screen">
      <div className="flex justify-center flex-col items-center">
        <HeadingTitle />
        <nav>
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <Link href={`#${section.title}`}>
                  <Typography
                    className={styles.container}
                    variant="start"
                    component="div"
                    mt="8"
                  >
                    <div className="link-left-line border-t-1 border-landing-neon mt-4 w-20 mr-2"></div>
                    <Typography component="h3" variant="heading4" color="neon">
                      {section.title}
                    </Typography>
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
