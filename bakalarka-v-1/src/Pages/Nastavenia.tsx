import React from "react";

import "./Centrovanie.css"
import "./Style_Nastavenia.css"
import { NavBar1 } from '../Components/NavBar1';
import { NavBar2 } from "../Components/NavBar2";

//interface Props {}
// const HomePage = (props: Props) => {

export const Nastavenia = () => {
    return (
    <div>
        <NavBar1 />
        <NavBar2 />

        <div className="divPodListami"> <h4> Toto su nastavenia </h4> </div>
    </div>
    )
};

