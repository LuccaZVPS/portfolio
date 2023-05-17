import { ReactNode } from "react";

interface props {
  children: ReactNode;
  clickable?: boolean;
  onClick?: () => void;
}
export const Terminal = ({ children, clickable, onClick }: props) => {
  return (
    <div
      onClick={() => onClick && onClick()}
      className={`${
        clickable ? "cursor-pointer" : ""
      } bg-card rounded-xl flex flex-col px-6 pt-4 gap-3 border-solid border border-border pb-6 dark:bg-dcard dark:border-dborder min-w-[calc(260px)] `}
    >
      <div className="flex gap-2 ">
        <span className="w-2 h-2 rounded-full bg-red-500 "></span>
        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
        <span className="w-2 h-2 rounded-full bg-green-600"></span>
      </div>
      {children}
    </div>
  );
};
