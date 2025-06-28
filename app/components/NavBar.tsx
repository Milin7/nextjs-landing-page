import Link from "next/link";
import Typography from "./Typography";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="#Aboutme">
            <Typography
              className="container mb-2"
              variant="start"
              component="div"
              mt="24"
            >
              <div className="border-t-1 border-landing-neon mt-4 w-20 mr-2"></div>
              <Typography component="h3" variant="heading4" color="neon">
                about
              </Typography>
            </Typography>
          </Link>
        </li>
        <li>
          <Link href="#Experience">
            <Typography
              className="container mb-2"
              variant="start"
              component="div"
            >
              <div className="border-t-1 border-landing-neon mt-4 w-20 mr-2"></div>
              <Typography component="h3" variant="heading4" color="neon">
                experience
              </Typography>
            </Typography>
          </Link>
        </li>
        <li>
          <Link href="#Projects">
            <Typography className="container" variant="start" component="div">
              <div className="border-t-1 border-landing-neon mt-4 w-20 mr-2"></div>
              <Typography component="h3" variant="heading4" color="neon">
                Projects
              </Typography>
            </Typography>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
