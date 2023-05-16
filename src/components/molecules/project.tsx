import { Description } from "../atoms/description";
import { ProjectIcon } from "../atoms/projectIcon";
import { SecundaryHeading } from "../atoms/secundaryHeading";
import { Terminal } from "../atoms/terminal";

export const Project = () => {
  return (
    <Terminal>
      <div className="">
        <SecundaryHeading>Dashboard de clientes</SecundaryHeading>
        <div className=" mt-1 h-20 ">
          <Description>
            Projeto freelance onde desenvolvi uma aplicação com TDD e
            arquitetura limpa para gerenciamento de clientes e arquitetos.
          </Description>
        </div>
        <div className="flex gap-2 mb-4 mt-5 bg ">
          <ProjectIcon />
          <ProjectIcon />
          <ProjectIcon />
          <ProjectIcon />
        </div>
        <img
          className="rounded-lg w-full h-auto"
          src="https://portfolio-api-self.vercel.app/pomobile.png"
          alt=""
        />
      </div>
    </Terminal>
  );
};
