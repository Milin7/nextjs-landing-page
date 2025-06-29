import Typography from "./Typography";

export default function FooterTitle({ title }: { title: string }) {
  return (
    <Typography
      className="absolute bottom-30 right-155"
      component="div"
      variant="heading1"
    >
      {title}
    </Typography>
  );
}
