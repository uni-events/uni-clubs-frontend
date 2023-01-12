import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkMode } from "./darkMode";

export const Toggle = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      className="bg-BlueGrey dark:bg-BlueBlack px-2 py-2 rounded-lg transition-transform duration-500 hover:scale-105"
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
