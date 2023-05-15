import { Paragraph } from "../atoms/paragraph";

export const Summary = () => {
  const list = [
    "👨‍💻 A mais de 1 ano estudando e programando interfaces e APIs com Typescript/Javascript.",
    "🎓 Cursando Análise e Desenvolvimento de Sistemas no instituto INFNET",
    "💡 Interesses em desenvolvimento Front-end com React JS e Back-end com Node/.Net",
    "🚀 Buscando uma oportunidade de atuar pela primeira vez na área de TI.",
  ];
  return (
    <ul className="text-left flex flex-col gap-3">
      {list.map((l, n: number) => (
        <Paragraph key={n}>{l}</Paragraph>
      ))}
    </ul>
  );
};
