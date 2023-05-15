import { MainButton } from "../atoms/mainButton";
import { MainTitle } from "../atoms/mainTitle";
import { Paragraph } from "../atoms/paragraph";
export const MainContent = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <MainTitle>
        <i>
          <span className="text-primary dark:text-dprimary">Lucca</span>{" "}
          Zavarize
        </i>
      </MainTitle>
      <Paragraph>Desenvolvedor Javascript</Paragraph>
      <MainButton>Sobre mim</MainButton>
    </div>
  );
};
