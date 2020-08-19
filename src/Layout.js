import React from "react"
import { renderRoutes } from "react-router-config";
import { getRoutes } from "./Routes";
import Header from "../src/components/Header"


const Layout = () => {
    return <div>
        <Header />
        <div>{renderRoutes(getRoutes())}</div>
    </div>
}

export default Layout