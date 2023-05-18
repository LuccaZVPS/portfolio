interface props {
  link: string;
  image: string;
}
export const FooterIcon = ({ image, link }: props) => {
  return (
    <a
      href={link}
      rel="noreferrer"
      target="_blank"
      className="w-8 h-8 bg-primary rounded-full flex justify-center items-center"
    >
      <img
        className="w-6"
        src={`${import.meta.env.VITE_API_DOMAIN}/${image}`}
        alt={link}
      />
    </a>
  );
};
