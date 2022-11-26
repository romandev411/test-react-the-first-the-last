import React from "react";
import style from "./HomePage.module.scss";
import Circle from "../../components/Circle/Circle";
import LineText from "../../components/LineText/LineText";
import MainTitle from "../../components/MainTitle/MainTitle";

const HomePage = () => {
    return (
        <div className={style["home-page"]}>
            <MainTitle />
            <Circle></Circle>
            <LineText />
        </div>
    );
};

export default HomePage;
