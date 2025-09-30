import React from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className="px-12">
                <Outlet />
            </div>
        </div>
    )
}
export default Layout;