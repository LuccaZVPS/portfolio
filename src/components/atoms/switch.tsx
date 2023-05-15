import { ReactNode } from "react";
interface props {
  current: boolean;
  images?: ReactNode[];
  onChange(): void;
}
export const Switch = ({ current, images, onChange }: props) => {
  return (
    <div
      onClick={() => onChange()}
      className={` text-background justify-between px-[calc(3px)] md:w-16 md:h-6 md:after:h-5  md:after:w-5 w-12 h-5 bg-primary rounded-full flex items-center cursor-pointer relative after:content-[''] after:absolute after:w-4 after:h-4 after:transition-all after:rounded-full after:bg-background 
      ${
        current
          ? "after:translate-x-[calc(26px)] md:after:translate-x-[calc(38px)]"
          : ""
      }
      `}
    >
      {images}
    </div>
  );
};
