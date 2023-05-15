import { ReactNode } from "react";

interface props {
  children: ReactNode;
}
export const EmojiText = ({ children }: props) => {
  return (
    <div className="bg-primary w-fit px-3 py-2 rounded-md text-white text-sm sm:text-base dark:bg-dprimary">
      {children}
    </div>
  );
};
