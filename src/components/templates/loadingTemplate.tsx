import { Triangle } from "react-loader-spinner";
export const LoadingTemplate = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center flex-col">
      <Triangle
        height="140"
        width="140"
        color="#1c7ed6"
        ariaLabel="triangle-loading"
        visible={true}
        wrapperClass=" w-fit"
      />
    </main>
  );
};
