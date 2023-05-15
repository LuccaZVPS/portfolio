import { ReactNode } from "react";

interface props {
  children: ReactNode;
}
export const Container = ({ children }: props) => {
  return (
    <div className="px-6 py-6 sm:px-14 xl:px-20 xl2:px-32 ">{children}</div>
  );
};
