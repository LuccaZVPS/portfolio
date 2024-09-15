import { useData } from "../../contexts/data";
import { MainButton } from "../atoms/mainButton";
import { MainTitle } from "../atoms/mainTitle";
import { Paragraph } from "../atoms/paragraph";

export const MainContent = () => {
  const { info } = useData().data;
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    const elementRect = element?.getBoundingClientRect();
    if (!elementRect) {
      return;
    }
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    const middle = absoluteElementTop - window.innerHeight / 3;
    window.scrollTo(0, middle);
  };
  return (
    <div className=" flex flex-col items-center justify-center gap-3 z-30">
      <MainTitle>
        <i>
          <span className="text-primary dark:text-dprimary">{info.name}</span>{" "}
          {info.lastName}
        </i>
      </MainTitle>
      <Paragraph>{info.description}</Paragraph>
      <div className="toUp opacity-0">
        <MainButton onclick={scrollToAbout}>About me</MainButton>
      </div>
    </div>
  );
};
