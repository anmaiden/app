import React, { FC } from "react";
import cls from "./NavBar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = (props: NavBarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [props.className])}>
      <div className={classNames(cls.links)}>
        <AppLink to={"/"} className={classNames(cls.link)}>
          Главная
        </AppLink>
        <AppLink to={"/about"}>О сайте</AppLink>
      </div>
    </div>
  );
};
