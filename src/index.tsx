import { useData } from "./contexts/data";
import { Error } from "./pages/error";
import { Home } from "./pages/home";
import { Loading } from "./pages/loading";

export const Index = () => {
  const data = useData();
  return (
    <div className="dark:bg-dbackground font-main max-w-screen min-h-screen box-border overflow-x-hidden flex justify-center">
      <div className="w-full overflow-x-hidden">
        {data.loading && <Loading />}
        {data.data && <Home />}
        {data.error && <Error />}
      </div>
    </div>
  );
};
