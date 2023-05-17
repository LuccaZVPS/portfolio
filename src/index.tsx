import { useData } from "./contexts/data";
import { useTheme } from "./contexts/theme";
import { Home } from "./pages/home";
import { Loading } from "./pages/loading";

export const Index = () => {
  const data = useData();
  useTheme();
  return (
    <div className="dark:bg-dbackground font-main max-w-screen min-h-screen box-border overflow-x-hidden flex justify-center">
      <div className="w-full max-w-[2500px] overflow-x-hidden">
        {data.loading && <Home />}
      </div>
    </div>
  );
};
