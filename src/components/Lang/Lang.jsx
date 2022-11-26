import React from "react";
import style from "./Lang.module.scss";
import lang from "../../assets/img/lang.svg";

const Lang = () => {
    const langs = ["EN", "UA"];
    return (
        <div className={style["lang"]}>
            <img className={style["lang__pic"]} src={lang} alt="Logo" />

            <ul className={style["lang__list"]}>
                {langs.map((lang) => (
                    <li className={style["lang__item"]} key={lang}>
                        {lang}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Lang;
