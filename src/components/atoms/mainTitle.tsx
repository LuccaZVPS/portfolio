import { ReactNode } from "react";

interface props {
  children: ReactNode;
}
export const MainTitle = ({ children }: props) => {
  return (
    <h1 className="text-3xl md:text-4xl xl:text-4xl xl3:text-6xl xl2:text-5xl text-center">
      {children}
    </h1>
  );
};
