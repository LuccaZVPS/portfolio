import { useData } from "../../contexts/data";
import { EmojiText } from "../atoms/emojiText";
import { Heading } from "../atoms/heading";
import { ContactBox } from "../molecules/contactBox";
import { Section } from "../molecules/section";
import { TimeLine } from "../molecules/timeLine";

export const Experience = () => {
  const { sections, contacts } = useData().data;
  return (
    <Section>
      <div className="gap-4 w-full flex items-center flex-col">
        <EmojiText>{sections.experience.secundary}</EmojiText>
        <Heading>{sections.experience.title}</Heading>
        <br />
        <TimeLine />
      </div>
    </Section>
  );
};
