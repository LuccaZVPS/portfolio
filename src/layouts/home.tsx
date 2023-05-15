import { MainTitle } from "../components/atoms/mainTitle";

export const Home = () => {
  return (
    <main className="font-main bg-background min-w-screen min-h-screen flex justify-center items-center">
      <MainTitle>
        <i>
          <span className="text-primary">Lucca</span> Zavarize
        </i>
      </MainTitle>
    </main>
  );
};
