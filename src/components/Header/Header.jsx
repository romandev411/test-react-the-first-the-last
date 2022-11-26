import React from "react";
import style from "./Header.module.scss";
import Lang from "../Lang/Lang";
import Logo from "../Logo/Logo";

const Header = () => {
    return (
        <header className={style["header"]}>
            <div className={style["header__lang"]}>
                <Lang />
            </div>

            <div className={style["header__logo"]}>
                <Logo />
            </div>
        </header>
    );
};

export default Header;
