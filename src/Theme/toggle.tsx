import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkMode } from "./darkMode";

export const Toggle = () => {
  const [isDark, setIsDark] = useDarkMode();
  return (
    <button
      className="px-2 py-2 transition-transform rounded-lg bg-BlueGrey dark:bg-BlueBlack duration-ThemeDuration hover:scale-105"
      onClick={() => setIsDark(!isDark)}
    >
      <DarkModeSwitch
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
        sunColor={""}
        size={24}
      />
    </button>
  );
};
