import { ReactNode } from "react";

interface props {
  children: ReactNode;
}
export const Description = ({ children }: props) => {
  return (
    <p className="text-paragraph text-xs lg:text-[calc(0.78rem)] font-light xl2:text-[calc(0.9rem)] dark:text-dparagraph">
      {children}
    </p>
  );
};
