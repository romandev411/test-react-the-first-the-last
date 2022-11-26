import React, { useEffect, useState } from "react";
import style from "./MainTitle.module.scss";

const MainTitle = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const styles = {
        transform: `translate(${x}px, ${y}px)`,
    };

    const setCoordinate = (e) => {
        setX(e.clientX / 100);
        setY(e.clientY / 100);
    };

    useEffect(() => {
        window.addEventListener("mousemove", setCoordinate);
    }, []);

    return (
        <h1 className={style["main-title"]} style={styles}>
            FULL-CYCLE
            <br />
            EVENT AGENCY
        </h1>
    );
};

export default MainTitle;
