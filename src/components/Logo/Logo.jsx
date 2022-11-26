import React from "react";
import { Link } from "react-router-dom";
import logoPic from "../../assets/img/logo.svg";
import logoPicWhite from "../../assets/img/logo-white.svg";
import style from "./Logo.module.scss";

const Logo = () => {
    return (
        <Link className={style["logo"]} to="/">
            <span className={style["logo__wrap1"]}>
                <img className={style["logo__pic"]} src={logoPic} alt="Logo" />
            </span>

            <span className={style["logo__wrap2"]}>
                <img
                    className={style["logo__pic"]}
                    src={logoPicWhite}
                    alt="Logo"
                />
            </span>
        </Link>
    );
};

export default Logo;
