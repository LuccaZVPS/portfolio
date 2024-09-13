import { useData } from "../../contexts/data";
import { TimeLineElement } from "./timeLineElement";

export const TimeLine = () => {
  const { timeLine } = useData().data;
  return (
    <div className="xl:full">
      {timeLine.map((i, n: number) => (
        <TimeLineElement
          position={n}
          key={n}
          title={i.title}
          img={i.img}
          year={i.year}
          description={i.description}
          last={n === timeLine.length - 1}
        />
      ))}
    </div>
  );
};
