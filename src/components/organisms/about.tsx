import { Heading } from "../atoms/heading";
import { Summary } from "../molecules/summary";
import { EmojiText } from "../atoms/emojiText";
import { useData } from "../../contexts/data";
import { Section } from "../molecules/section";
import { TimeLine } from "../molecules/timeLine";

export const About = () => {
  const { about } = useData().data;
  return (
    <Section>
      <div id="about" className="w-full flex flex-col gap-12 xl:gap-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-center lg:items-center w-full ">
          <div className="flex justify-center lg:w-[calc(50%)] lg:justify-end">
            <img
              className="self-center rounded-full w-56 h-auto lg:w-64 lg:mr-28 xl2:w-72"
              src={`${import.meta.env.VITE_API_DOMAIN}/${about.img}`}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-6 lg:w-1/2 xl2:gap-8 justify-center">
            <EmojiText>🧐 About me</EmojiText>
            <Heading>{about.name}</Heading>
            <div className="text-left">
              <Summary list={about.notes} />
            </div>
          </div>
        </div>
        <TimeLine></TimeLine>
      </div>
    </Section>
  );
};
