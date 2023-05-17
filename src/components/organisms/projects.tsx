import { Container } from "../atoms/container";
import { EmojiText } from "../atoms/emojiText";
import { Heading } from "../atoms/heading";
import { Project } from "../molecules/project";
export const Projects = () => {
  return (
    <section className="w-[100%] overflow-x-hidden">
      <Container>
        <div className="flex flex-col w-[100%] ">
          <div className="flex flex-col gap-6">
            <EmojiText>🔗 Portfólio</EmojiText>
            <Heading>Projetos</Heading>
          </div>
          <div className="w-full overflow-x-auto mt-10">
            <div className="flex w-fit gap-8 md:w-full md:grid-cols-fluid md:grid sm:gap-10 xl2:grid-cols-fluid2 xl3:grid-cols-fluid3 justify-evenly">
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
