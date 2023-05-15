import { Heading } from "../atoms/heading";
import { Container } from "../atoms/container";
import { Summary } from "../molecules/summary";
import { EmojiText } from "../atoms/emojiText";
export const About = () => {
  return (
    <section className="w-screen">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-center lg:items-center lg:gap-20 xl:gap-28 xl2:gap-40">
          <div className="flex justify-center lg:w-[calc(40%)] lg:justify-end">
            <img
              className="self-center rounded-full w-56 h-auto lg:w-64 xl2:w-72"
              src="https://portfolio-api-self.vercel.app/eu.jpeg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-6 lg:w-1/2 xl2:gap-8 justify-center">
            <EmojiText>🧐 Sobre mim</EmojiText>
            <Heading>Lucca Zavarize</Heading>
            <div className="text-left">
              <Summary />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
