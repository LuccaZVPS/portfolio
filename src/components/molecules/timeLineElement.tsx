import { useEffect, useRef } from "react";
import { Paragraph } from "../atoms/paragraph";
import { SecundaryHeading } from "../atoms/secundaryHeading";
import { scrollAnimation } from "../../utils/scrollAnimation";
interface props {
  title: string;
  description: string;
  last: boolean;
  position: number;
}
export const TimeLineElement = ({
  description,
  title,
  last,
  position,
}: props) => {
  const textElement = useRef(null as unknown as HTMLDivElement);
  useEffect(() => {
    scrollAnimation(
      textElement.current,
      "flex opacity-100 flex-col duration-[700ms] transition-all gap-2 xl:w-[80%] mt-0",
      window.innerWidth > 1150 ? 100 : 300
    );
  }, []);
  return (
    <div className="flex gap-6 align-top xl:flex-col xl:w-full">
      <div className="flex flex-col items-center w-fit xl:flex-row xl:w-full">
        <div className="rounded-full w-8 h-8 border-primary border-solid border-8"></div>
        <div className="w-2 h-40 bg-primary mt-[-1px] xl:h-2 xl:flex-1"></div>
        {last && (
          <div className=" border-transparent border-solid border-[12px] mt-[-1px] border-t-primary xl:border-l-primary xl:border-t-transparent xl:mt-0"></div>
        )}
      </div>
      <div
        ref={textElement}
        style={{
          transitionDelay: `${
            window.innerWidth > 1150 && `${position * 0.2}s`
          }`,
        }}
        className="flex opacity-0 flex-col gap-2 transition-all xl:w-[80%] xl:mt-3"
      >
        <SecundaryHeading>{title}</SecundaryHeading>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
};
