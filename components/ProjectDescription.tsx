type ProjectDescriptionProps = {
  text: string;
  className: string;
};

export default function ProjectDescription({ text, className }: ProjectDescriptionProps) {
  return <p className={className}>{text}</p>;
}
