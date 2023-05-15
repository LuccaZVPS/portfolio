import { ReactNode } from "react";

interface props {
  children: ReactNode;
}
export const Paragraph = ({ children }: props) => {
  return (
    <p className="text-paragraph text-center text-xs md:text-sm xl2:text-base">
      {children}
    </p>
  );
};
