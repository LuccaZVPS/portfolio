import { useEffect, useMemo, useState } from "react";
import { Switch } from "../atoms/switch";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
export const ThemeToogle = () => {
  const [current, setCurrent] = useState(false);
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
    if (theme && theme === "true") {
      setCurrent(true);
    }
  }, []);
  return (
    <Switch
      onChange={onChange}
      current={current}
      images={[<BsSunFill key={"sun"} />, <BsMoonFill key={"moon"} />]}
    />
  );
};
