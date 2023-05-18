import { Footer } from "../molecules/footer";
import { About } from "../organisms/about";
import { Landing } from "../organisms/landing";
import { Projects } from "../organisms/projects";
import { Skills } from "../organisms/skills";

export const HomeTemplate = () => {
  return (
    <main className=" w-full flex flex-col gap-20 max-w-screen lg:gap-32 xl2:gap-40">
      <Landing />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
};
