import { useData } from "../../contexts/data";
import { Paragraph } from "../atoms/paragraph";
import { SecundaryHeading } from "../atoms/secundaryHeading";

export const TimeLine = () => {
  const { timeLine } = useData().data;
  return (
    <div className="xl:flex xl:w-full">
      {timeLine.map((i, n: number) => (
        <div key={n} className="flex gap-6 align-top xl:flex-col xl:w-full">
          <div className="flex flex-col items-center w-fit xl:flex-row xl:w-full">
            <div className="rounded-full w-8 h-8 border-primary border-solid border-8"></div>
            <div className="w-2 h-32   bg-primary mt-[-1px] xl:h-2 xl:flex-1"></div>
            {timeLine.length - 1 === n && (
              <div className=" border-transparent border-solid border-[12px] mt-[-1px] border-t-primary xl:border-l-primary xl:border-t-transparent xl:mt-0"></div>
            )}
          </div>
          <div className="flex flex-col gap-2 xl:w-[80%]">
            <SecundaryHeading>{i.title}</SecundaryHeading>
            <Paragraph>{i.description}</Paragraph>
          </div>
        </div>
      ))}
    </div>
  );
};
