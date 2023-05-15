import { MainTitle } from "../components/atoms/mainTitle";
import { Paragraph } from "../components/atoms/paragraph";

export const Home = () => {
  return (
    <main className="font-main bg-background min-w-screen min-h-screen flex flex-col items-center justify-center">
      <MainTitle>
        <i>
          <span className="text-primary">Lucca</span> Zavarize
        </i>
      </MainTitle>
      <br />
      <Paragraph>Desenvolvedor Javascript</Paragraph>
    </main>
  );
};
