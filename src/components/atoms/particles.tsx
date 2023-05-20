import { useEffect } from "react";
import createParticles from "../../utils/createParticles";

export const Particles = () => {
  useEffect(() => {
    createParticles();
  }, []);
  return (
    <canvas
      className="opacity-0 none absolute bg-transparent w-full left-0 top-0 h-screen"
      id="canvas"
    />
  );
};
