import Box from "./Box";

type Card = {
  children: React.ReactNode;
  className?: string;
};
export default function Card({ children, className }: Card) {
  return <Box className={className}>{children}</Box>;
}
