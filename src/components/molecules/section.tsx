import { ReactNode } from "react";
import { Container } from "../atoms/container";
interface props {
  children: ReactNode;
}
export const Section = ({ children }: props) => {
  return (
    <section className="flex justify-center w-full">
      <Container>{children}</Container>
    </section>
  );
};
