import React from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import { Outlet } from "react-router-dom";
import style from "./DefaultLayout.module.scss";

const DefaultLayout = () => {
    return (
        <div className={style["default-layout"]}>
            <div className={style["default-layout__content"]}>
                <Header />
                <Menu />
                <div
                    className="default-layout__routes"
                    style={{ transition: "1s" }}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
