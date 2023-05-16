import { ReactNode } from "react";

interface props {
  children: ReactNode;
}
export const SecundaryHeading = ({ children }: props) => {
  return (
    <h4 className="text-heading font-normal text-sm lg:text-[calc(0.93rem)] xl2:text-[calc(1.05rem)] dark:text-dheading">
      {children}
    </h4>
  );
};
