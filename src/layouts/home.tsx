import { MainContent } from "../components/molecules/mainContent";
import { ThemeToogle } from "../components/molecules/themeToogle";

export const Home = () => {
  return (
    <main className="dark:bg-dbackground font-main bg-background min-w-screen min-h-screen flex flex-col items-center justify-center">
      <ThemeToogle />
      <MainContent />
    </main>
  );
};
