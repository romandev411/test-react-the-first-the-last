import React from "react";
import style from "./Circle.module.scss";
import circleText from "../../assets/img/circle-text.svg";

const Circle = () => {
    return (
        <div className={style["circle"]}>
            <div className={style["circle__text"]}>
                <img
                    className={style["circle__text-pic"]}
                    src={circleText}
                    alt="showreelshowreelshowreel"
                />
            </div>
        </div>
    );
};

export default Circle;
