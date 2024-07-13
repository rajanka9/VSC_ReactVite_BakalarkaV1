import React from "react";

import "./Centrovanie.css"
import { NavBar1 } from '../Components/NavBar1';
import { NavBar2 } from "../Components/NavBar2";

//interface Props {}
// const HomePage = (props: Props) => {

export const Materialy = () => {
    return (
    <div>
        <NavBar1 />
        <NavBar2 />

        <div className="divPodListami"> 

            <div className="divFrameText">
                <h5> Študijné materiály </h5> 
                <p> V tejto sekcií nájdete všetky materiály k predmetu Princípy operačných systémov (POS). Samozrejme odporúčame čerpať aj z iných (dôveryhodných) zdrojov. :) </p>
            </div>
        </div>
    </div>
)
};