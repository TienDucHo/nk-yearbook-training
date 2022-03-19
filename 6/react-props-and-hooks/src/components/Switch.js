import switchStyle from "./Switch.module.css";
import classNames from "classnames/bind";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

let cx = classNames.bind(switchStyle);

function Switch() {
  let switchClass = cx({ slider: true, round: true });
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleChange = () => {
    console.log(theme);
    toggleTheme();
  };
  return (
    <label className={switchStyle.switch}>
      <input
        className={switchStyle.inp}
        type="checkbox"
        onClick={handleChange}
      />
      <span className={switchClass}></span>
    </label>
  );
}

export default Switch;
