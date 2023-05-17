import { Icon } from "../../types/project";

export const ProjectIcon = ({ title, path }: Icon) => {
  return (
    <img
      className="w-[calc(25px)] rounded-md "
      src={`${import.meta.env.VITE_API_DOMAIN}/${path}`}
      title={title.charAt(0).toUpperCase() + title.slice(1)}
    ></img>
  );
};
