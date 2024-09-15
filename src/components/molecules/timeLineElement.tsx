import { useEffect, useRef } from "react";
import { Paragraph } from "../atoms/paragraph";
import { SecundaryHeading } from "../atoms/secundaryHeading";
import { scrollAnimation } from "../../utils/scrollAnimation";
import { EmojiText } from "../atoms/emojiText";
interface props {
  title: string;
  description: string;
  last: boolean;
  position: number;
  year: number;
  img: string;
}
export const TimeLineElement = ({
  description,
  title,
  last,
  position,
  img,
  year,
}: props) => {
  const textElement = useRef(null as unknown as HTMLDivElement);
  useEffect(() => {
    scrollAnimation(
      textElement.current,
      "opacity-100 duration-[700ms] transition-all flex opacity-1 flex-col gap-2 transition-all xl:absolute  xl:w-[400px]",
      window.innerWidth > 1150 ? 70 : 300
    );
  }, []);
  return (
    <div className="flex gap-6 align-top xl:relative  ">
      <div className="flex flex-col items-center w-fit  ">
        <div className="rounded-full w-8 h-8 border-primary border-solid border-8"></div>
        <div className="w-2 h-52 bg-primary mt-[-1px] xl:h-56 "></div>
        {last && (
          <div className=" border-transparent border-solid border-[12px] mt-[-1px] border-t-primary"></div>
        )}
      </div>
      <div
        ref={textElement}
        style={{
          transitionDelay: `${
            window.innerWidth > 1150 && `${position * 0.2}s`
          }`,
          right: position % 2 === 0 ? "80px" : "-480px",
        }}
        className="flex opacity-0 flex-col gap-2 transition-all xl:absolute  xl:w-[400px]"
      >
        <EmojiText>{year}</EmojiText>

        <div className="flex items-center gap-4 mt-2">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={`${import.meta.env.VITE_API_DOMAIN}/${img}`}
            alt=""
          />
          <SecundaryHeading>{title}</SecundaryHeading>
        </div>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
};
