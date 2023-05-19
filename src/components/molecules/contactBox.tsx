import { IContact } from "../../types/contact";
import { Paragraph } from "../atoms/paragraph";
import { SecundaryHeading } from "../atoms/secundaryHeading";
export const ContactBox = ({ content, img, title }: IContact) => {
  return (
    <div className="flex w-[150px] text-center flex-col items-center  lg:w-[300px]">
      <a
        href={content}
        rel="noreferrer"
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
