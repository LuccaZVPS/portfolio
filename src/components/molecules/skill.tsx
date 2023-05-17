import { Terminal } from "../atoms/terminal";
import { SecundaryHeading } from "../atoms/secundaryHeading";
import { Description } from "../atoms/description";
import { DiCode } from "react-icons/di";

interface props {
  img: string;
  title: string;
  description: string;
}
export const Skill = ({ title, description, img }: props) => {
  return (
    <Terminal>
      <div className="flex justify-center flex-col items-center w-[260px] xl:w-[300px] xl2:w-[320px]">
        <div className="bg-primary w-14 h-14 rounded-full flex justify-center items-center text-white mb-5 dark:bg-dprimary">
          <img className="w-[18px]" src={img} alt="" />
        </div>
        <div className="text-center flex flex-col gap-3">
          <SecundaryHeading>{title}</SecundaryHeading>
          <Description>{description}</Description>
        </div>
      </div>
    </Terminal>
  );
};
