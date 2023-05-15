import { ReactNode } from "react";

interface props {
  children: ReactNode;
}
export const Paragraph = ({ children }: props) => {
  return (
    <p className="dark:text-dparagraph text-paragraph text-xs md:text-sm xl2:text-base">
      {children}
    </p>
  );
};
