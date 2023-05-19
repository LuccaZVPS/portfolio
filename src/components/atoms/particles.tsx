import { useEffect } from "react";
import createParticles from "../../utils/create-particles";

export const Particles = () => {
  useEffect(() => {
    createParticles();
  }, []);
  return (
    <canvas
      className=" absolute bg-transparent w-full left-0 top-0 h-screen"
      id="canvas"
    />
  );
};
