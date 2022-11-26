import React from "react";
import style from "./LineText.module.scss";

const LineText = () => {
    return (
        <div className={style["line-text"]}>
            <div className={style["line-text__top"]}>
                FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT
                AGENCY FULL-CYCLE EVENT AGENCY
            </div>
            <div className={style["line-text__bot"]}>
                FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT
                AGENCY FULL-CYCLE EVENT AGENCY
            </div>
        </div>
    );
};

export default LineText;
