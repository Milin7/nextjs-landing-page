import Typography from "./Typography";

export default function HeadingTitle() {
  return (
    <>
      <Typography
        component="h1"
        variant="mainHeading"
        className="flex justify-center"
      >
        Life resume{" "}
      </Typography>
      <div>
        <Typography
          component="h2"
          mt="4"
          variant="heading3"
          className="text-4xl"
        >
          Isaac Martínez
        </Typography>
        <Typography component="span" mt="2" mb="32" variant="mainHeading">
          Front End Developer
        </Typography>
      </div>
    </>
  );
}
