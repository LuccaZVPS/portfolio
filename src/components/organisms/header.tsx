import { ReactNode } from "react";

interface props {
  children: ReactNode;
}
export const Header = ({ children }: props) => {
  return (
    <header className="w-full flex justify-end px-6 py-6 sm:px-14 xl:px-20 xl2:px-32">
      {children}
    </header>
  );
};
