import Typography from "./Typography";

export default function HeadingTitle() {
  return (
    <div className="mt-10">
      {/* Add IM logo here as an svg */}
      <Typography
        component="h1"
        variant="mainHeading"
        className="flex justify-center"
      >
        Life resume
      </Typography>
      <Typography
        component="h2"
        mt="4"
        variant="heading3"
        className="text-4xl text-center"
      >
        Isaac Martínez
      </Typography>
      <Typography component="span" mt="2" mb="32" variant="mainHeading">
        Front End Developer
      </Typography>
    </div>
  );
}
