import { useData } from "../../contexts/data";
import { TimeLineElement } from "./timeLineElement";

export const TimeLine = () => {
  const { timeLine } = useData().data;
  return (
    <div className="xl:flex xl:w-full">
      {timeLine.map((i, n: number) => (
        <TimeLineElement
          position={n + 1}
          key={n}
          title={i.title}
          description={i.description}
          last={n === timeLine.length - 1}
        />
      ))}
    </div>
  );
};
