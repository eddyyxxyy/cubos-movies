"use client";
import { useTransition, useState } from "react";
import Cookies from "js-cookie";
import Moon from "@/assets/icons/Moon.svg";
import Sun from "@/assets/icons/Sun.svg";
import { THEME_COOKIE_NAME } from "@/lib/constants";
import { TThemes } from "@/@types";
import { Button } from "../Button";

type TThemeTogglerProps = {
  initialTheme: TThemes;
};

const ThemeToggler = ({ initialTheme }: TThemeTogglerProps) => {
  const [isPending, startTransition] = useTransition();
  const [theme, setTheme] = useState<TThemes>(initialTheme);

  const handleToggleTheme = () => {
    startTransition(() => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);

      document.documentElement.classList.toggle("dark", newTheme === "dark");
      document.documentElement.classList.toggle("light", newTheme === "light");

      Cookies.set(THEME_COOKIE_NAME, newTheme, { path: "/" });
    });
  };

  return (
    <Button
      onClick={handleToggleTheme}
      disabled={isPending}
      variant="secondary"
    >
      {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
    </Button>
  );
};

export { ThemeToggler };
