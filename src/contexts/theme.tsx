import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
interface props {
  children: ReactNode;
}
const Context = createContext({ current: true } as context);

export const ThemeContext = ({ children }: props) => {
  const [current, setCurrent] = useState(true);
  const onChange = () => {
    setCurrent(!current);
  };
  useEffect(() => {
    const body = document.querySelector("body");
    current ? body?.classList.add("dark") : body?.classList.remove("dark");
    localStorage.setItem("theme", `${current}`);
  }, [current]);

  useMemo(() => {
    const theme = localStorage.getItem("theme");
    if (theme && theme === "false") {
      setCurrent(false);
    }
  }, []);
  return (
    <Context.Provider value={{ current, onChange }}>
      {children}
    </Context.Provider>
  );
};
export const useTheme = () => useContext(Context);
interface context {
  current: boolean;
  onChange(): void;
}
