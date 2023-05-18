import { useData } from "../../contexts/data";
import { EmojiText } from "../atoms/emojiText";
import { Heading } from "../atoms/heading";
import { Project } from "../molecules/project";
import { Section } from "../molecules/section";

export const Projects = () => {
  const { projects, sections } = useData().data;
  return (
    <Section>
      <div className="flex flex-col w-[100%] ">
        <div className="flex flex-col gap-6">
          <EmojiText>{sections.project.secundary}</EmojiText>
          <Heading>{sections.project.title}</Heading>
        </div>
        <div className="w-full overflow-x-auto mt-10">
          <div className="flex w-fit gap-8 md:w-full md:grid-cols-fluid md:grid sm:gap-10 xl2:grid-cols-fluid2 xl3:grid-cols-fluid3 justify-evenly">
            {projects.map((p, n: number) => (
              <Project
                key={n}
                title={p.title}
                description={p.description}
                icons={p.icons}
                img={p.img}
                link={p.link}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
