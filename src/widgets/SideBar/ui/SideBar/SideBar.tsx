import React, { FC, useState } from "react";
import "./SideBar.module.scss";
import cls from "./SideBar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import ThemeSwitcher from "shared/ui/ThemeSwitcher";

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
        props.className,
      ])}
    >
      <button onClick={handleToggleSidebar}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/* todo: lang switcher */}
      </div>
    </div>
  );
};
