import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import WhatPage from "./pages/WhatPage/WhatPage";
import Page404 from "./pages/Page404/Page404";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
    const onEnter = (node) => {
        const elem = node.querySelector(".default-layout__routes");
        elem.style.opacity = "0";

        setTimeout(() => {
            elem.style.opacity = "1";
        }, 500);
    };

    const location = useLocation();

    return (
        <div className="App">
            <TransitionGroup component={null}>
                <CSSTransition
                    in={false}
                    key={location.pathname}
                    timeout={1200}
                    classNames="page"
                    onEntering={onEnter}
                >
                    <Routes location={location}>
                        <Route path="/" element={<DefaultLayout />}>
                            <Route index element={<HomePage />} />
                            <Route path="what" element={<WhatPage />} />
                            <Route path="where" element={<WhatPage />} />
                            <Route path="who" element={<WhatPage />} />
                            <Route path="*" element={<Page404 />} />
                        </Route>
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default App;
