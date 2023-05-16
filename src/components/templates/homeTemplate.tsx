import { About } from "../organisms/about";
import { Landing } from "../organisms/landing";
import { Projects } from "../organisms/projects";

export const HomeTemplate = () => {
  return (
    <main className="w-screen flex flex-col dark:bg-dbackground gap-20 max-w-screen lg:gap-32 xl2:gap-40">
      <Landing />
      <About />
      <Projects />
    </main>
  );
};
