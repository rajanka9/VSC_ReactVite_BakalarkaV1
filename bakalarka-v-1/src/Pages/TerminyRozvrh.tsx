import React from "react";

import "./Centrovanie.css"
import { NavBar1 } from '../Components/NavBar1';
import { NavBar2 } from "../Components/NavBar2";

//interface Props {}
// const HomePage = (props: Props) => {

export const TerminyRozvrh = () => {
    return (
    <div>
        <NavBar1 />
        <NavBar2 />

        <div className="divPodListami"> <h4> Toto su terminy a rozvrh </h4> </div>
    </div>
    )
};
