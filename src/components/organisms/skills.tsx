import { useData } from "../../contexts/data";
import { EmojiText } from "../atoms/emojiText";
import { Heading } from "../atoms/heading";
import { Skill } from "../molecules/skill";
import { Section } from "../molecules/section";
export const Skills = () => {
  const { skills, sections } = useData().data;
  return (
    <Section>
      <div className="flex flex-col items-center gap-5 w-full text-center">
        <EmojiText>{sections.skill.secundary}</EmojiText>
        <Heading>{sections.skill.title}</Heading>
        <div className="overflow-x-auto w-full">
          <div className="mt-6 flex w-fit gap-5 md:w-full md:justify-center md:flex-wrap xl:gap-7 xl2:gap-10">
            {skills.map((s, n: number) => (
              <Skill
                key={n}
                title={s.title}
                description={s.description}
                img={s.img}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
