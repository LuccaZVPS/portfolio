import { IContact } from "../../types/contact";
import { Paragraph } from "../atoms/paragraph";
import { SecundaryHeading } from "../atoms/secundaryHeading";
export const ContactBox = ({ content, img, title }: IContact) => {
  return (
    <div className="text-center flex-col items-center flex-1">
      <a
        href={content}
        rel="noreferrer"
        target="_blank"
        className="text-center flex flex-col items-center "
      >
        <div className="mb-2 flex justify-center items-center bg-primary dark:bg-primary w-12 h-12 rounded-full">
          <img
            className="w-7"
            src={`${import.meta.env.VITE_API_DOMAIN}/${img}`}
            alt=""
          />
        </div>
        <SecundaryHeading>{title}</SecundaryHeading>
      </a>

      <Paragraph>{content}</Paragraph>
    </div>
  );
};
