import { useContext,useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { currTheme, ToggleTheme } = useContext(ThemeContext);
  useEffect(() => {
    console.log("HTML classes:", document.documentElement.classList);
    console.log("Current theme:", currTheme);
  }, [currTheme]);
  return (
    <div>
      <button className="cursor-pointer rounded-full p-1" onClick={ToggleTheme}>
        {" "}
        {currTheme === "light" ? (
          <Moon size={24} strokeWidth={1} />
        ) : (
          <Sun size={24} strokeWidth={1} />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
