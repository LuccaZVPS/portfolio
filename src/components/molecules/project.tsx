import { IProject } from "../../types/project";
import { Description } from "../atoms/description";
import { ProjectIcon } from "../atoms/projectIcon";
import { SecundaryHeading } from "../atoms/secundaryHeading";
import { Terminal } from "../atoms/terminal";

export const Project = ({ title, description, icons, img, link }: IProject) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };
  return (
    <Terminal onClick={handleClick} clickable={true}>
      <div className="">
        <SecundaryHeading>{title}</SecundaryHeading>
        <div className=" mt-2 h-20 ">
          <Description>{description}</Description>
        </div>
        <div className="flex gap-2 mb-4 mt-5 bg ">
          {icons.map((i, n: number) => (
            <ProjectIcon key={n} title={i.title} path={i.path} />
          ))}
        </div>
        <img
          className="rounded-lg w-full h-auto"
          src={`${import.meta.env.VITE_API_DOMAIN}/${img}`}
          alt=""
        />
      </div>
    </Terminal>
  );
};
