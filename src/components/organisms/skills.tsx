import { useData } from "../../contexts/data";
import { EmojiText } from "../atoms/emojiText";
import { Heading } from "../atoms/heading";
import { Skill } from "../molecules/skill";
import { Section } from "../molecules/section";
export const Skills = () => {
  const { skills } = useData().data;
  return (
    <Section>
      <div className="flex flex-col items-center gap-5 w-full">
        <EmojiText>🧑‍💻 Skills</EmojiText>
        <Heading>Tecnologias e habilidades</Heading>
        <div className="overflow-x-auto w-full">
          <div className=" flex w-fit gap-5 md:w-full md:justify-center md:flex-wrap xl:gap-7 xl2:gap-10">
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
