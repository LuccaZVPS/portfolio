import { useEffect } from "react";
import { CentralContent } from "../molecules/centralContent";
import { Header } from "../molecules/header";
import { ThemeToogle } from "../molecules/themeToogle";
import createParticles from "../../utils/create-particles";

export const Landing = () => {
  useEffect(() => {
    createParticles();
  }, []);
  return (
    <section className="h-screen flex relative overflow-hidden">
      <Header>
        <ThemeToogle />
      </Header>
      <CentralContent />
      <canvas
        className="absolute bg-transparent w-screen h-screen"
        id="canvas"
      />
    </section>
  );
};
