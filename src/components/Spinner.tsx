import Box from "./Box";
import { Box as props } from "./Box";

export default function Spinner({ className, ...props }: props) {
  return <Box className={className}></Box>;
}
