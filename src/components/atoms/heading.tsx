import { ReactNode } from "react";

interface props {
  children: ReactNode;
}
export const Heading = ({ children }: props) => {
  return (
    <h3 className="font-bold text-heading text-xl sm:text-xl md:text-2xl xl2:text-4xl dark:text-dheading">
      {children}
    </h3>
  );
};
