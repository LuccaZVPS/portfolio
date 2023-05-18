import { useData } from "../../contexts/data";
import { FooterIcon } from "../atoms/footerIcons";
import { Paragraph } from "../atoms/paragraph";

export const Footer = () => {
  const { socials } = useData().data;
  return (
    <footer className="w-full bg-card flex flex-col gap-6 pt-4 dark:bg-dcard relative">
      <div className="w-full justify-center flex gap-3">
        {socials.map((s, n: number) => (
          <FooterIcon key={n} link={s.link} image={s.img} />
        ))}
      </div>
      <div className="text-center w-full">
        <Paragraph>
          &copy; 2023 Lucca Zavarize. Todos os direitos reservados.
        </Paragraph>
      </div>
    </footer>
  );
};
