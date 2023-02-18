import { HTMLAttributes } from "react";
 export type Box = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children?: React.ReactNode;
};

export default function Box({ className, children, ...props }: Box) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
