type Text = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;
export default function Text({ ...props }: Text) {
  return <p {...props}></p>;
}
