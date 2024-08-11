import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import ThemeSwitcher from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import cls from './SideBar.module.scss';

import LeftArrowIcon from '../../../../shared/assets/icons/left_icon_sidebar.svg';
import RightArrowIcon from '../../../../shared/assets/icons/right_icon_sidebar.svg';

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
            <button onClick={handleToggleSidebar} className={classNames(cls.ToggleBtn)}>{collapsed ? <RightArrowIcon /> : <LeftArrowIcon />}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
