import React, { FC } from "react";
import cls from "./NavBar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";


interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = (props) => {
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
