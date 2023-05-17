import { Container } from "../atoms/container";
import { SecundaryHeading } from "../atoms/secundaryHeading";

export const ErrorTemplate = () => {
  return (
    <Container>
      <div className="flex h-screen w-full flex-col justify-center items-center text-center ">
        <img className=" max-h-[80%] xl:max-h-[60%]" src="/error.svg" alt="" />
        <SecundaryHeading>
          Oops! Algo deu errado, tente novamente mais tarde.
        </SecundaryHeading>
      </div>
    </Container>
  );
};
