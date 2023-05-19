import { useEffect } from "react";
import { CentralContent } from "../molecules/centralContent";
import { Header } from "../molecules/header";
import { ThemeToogle } from "../molecules/themeToogle";
import { Particles } from "../atoms/particles";

export const Landing = () => {
  useEffect(() => {
    //createParticles();
  }, []);
  return (
    <section className="h-screen flex overflow-hidden">
      <Header>
        <ThemeToogle />
      </Header>
      <CentralContent />
      <Particles />
    </section>
  );
};
