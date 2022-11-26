import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Menu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const Menu = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const navClasses = cx({
        menu: true,
        "menu--open-menu": openMenu,
    });

    return (
        <nav className={navClasses}>
            <button
                className={style["menu__open-btn"]}
                type="button"
                onClick={toggleMenu}
            ></button>

            <ul className={style["menu__list"]}>
                <li className={style["menu__item"]}>
                    <Link className={style["menu__link"]} to="/where">
                        where?
                    </Link>
                </li>

                <li className={style["menu__item"]}>
                    <Link className={style["menu__link"]} to="/who">
                        who?
                    </Link>
                </li>

                <li className={style["menu__item"]}>
                    <Link className={style["menu__link"]} to="/what">
                        what?
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
