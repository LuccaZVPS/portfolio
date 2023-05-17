import { useData } from "../../contexts/data";
import { Paragraph } from "../atoms/paragraph";
interface props {
  list: string[];
}
export const Summary = ({ list }: props) => {
  return (
    <ul className="text-left flex flex-col gap-3">
      {list.map((l, n: number) => (
        <Paragraph key={n}>{l}</Paragraph>
      ))}
    </ul>
  );
};
