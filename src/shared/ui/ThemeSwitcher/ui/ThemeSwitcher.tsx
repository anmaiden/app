import React, { FC } from "react";
import "./ThemeSwitcher.module.scss";
import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Theme, useTheme } from "app/providers/ThemeProvider";

import DarkIcon from "../../../assets/icons/theme-dark.svg";
import LightIcon from "../../../assets/icons/theme-light.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [props.className])}
    >
      {theme === Theme.DARK ? <LightIcon /> : <DarkIcon fill="white" />}
    </Button>
  );
};
