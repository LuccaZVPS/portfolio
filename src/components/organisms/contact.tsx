import { useData } from "../../contexts/data";
import { EmojiText } from "../atoms/emojiText";
import { Heading } from "../atoms/heading";
import { ContactBox } from "../molecules/contactBox";
import { Section } from "../molecules/section";

export const Contact = () => {
  const { sections, contacts } = useData().data;
  return (
    <Section>
      <div className="gap-4 w-full flex items-center flex-col">
        <EmojiText>{sections.contact.secundary}</EmojiText>
        <Heading>{sections.contact.title}</Heading>
        <div className="mt-8 flex flex-wrap w-full gap-y-8 gap-4 justify-between lg:justify-center lg:gap-16">
          {contacts.map((c, n: number) => (
            <ContactBox
              key={n}
              title={c.title}
              content={c.content}
              img={c.img}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
