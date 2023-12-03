import {FC} from "react";
import {useScrollTop} from "../../../hooks/useScrollTop.ts";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer.tsx";
import {AppNav} from "../AppNav";

export const AppLayout: FC = () => {
    useScrollTop()

    return (
        <>
            <AppNav />
            <Outlet />
            <Footer />
        </>
    )
}