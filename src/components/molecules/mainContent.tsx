import { useData } from "../../contexts/data";
import { MainButton } from "../atoms/mainButton";
import { MainTitle } from "../atoms/mainTitle";
import { Paragraph } from "../atoms/paragraph";
export const MainContent = () => {
  const { info } = useData().data;

  return (
    <div className="flex flex-col items-center justify-center gap-3 z-30">
      <MainTitle>
        <i>
          <span className="text-primary dark:text-dprimary">{info.name}</span>{" "}
          {info.lastName}
        </i>
      </MainTitle>
      <Paragraph>{info.description}</Paragraph>
      <MainButton>About me</MainButton>
    </div>
  );
};
