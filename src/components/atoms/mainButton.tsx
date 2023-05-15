import { ReactNode } from "react";

interface props {
  children: ReactNode;
}
export const MainButton = ({ children }: props) => {
  return (
    <a
      href="#"
      className="border-solid border-2 border-primary text-primary text-xs px-6 py-1  md:text-sm md:px-10 xl2:text-base xl2:px-10 transition-colors hover:bg-heading hover:shadow-2xl font-medium"
    >
      {children}
    </a>
  );
};
