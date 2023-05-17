import { Switch } from "../atoms/switch";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useTheme } from "../../contexts/theme";
export const ThemeToogle = () => {
  const { current, onChange } = useTheme();
  return (
    <Switch
      onChange={onChange}
      current={current}
      images={[<BsSunFill key={"sun"} />, <BsMoonFill key={"moon"} />]}
    />
  );
};
