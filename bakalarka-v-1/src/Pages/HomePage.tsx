//import React from "react";

import "./Centrovanie.css"
import "./Style_HomePage.css"
import { NavBar1 } from '../Components/NavBar1';
import { NavBar2 } from "../Components/NavBar2";
import { BoxCvicenie } from "../Components/BoxRozvrh"
import { BoxOznam } from "../Components/BozOznam"
import { MenuNavBar2 } from "../Components/MenuNavBar2";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";


//interface Props {}
// const HomePage = (props: Props) => {

export const HomePage = () => {
    const[clicked, isClicked] = useState (false)

    return (
    <div>
        <NavBar1 />
        <NavBar2 clicked={clicked} isClicked={isClicked} />
        {clicked? <MenuNavBar2/> : null}

        <div className="divPodListami"> 

            <div className="zarovanieVelkyObrazok"> 
                <BoxProfilVybrateCvZmenyNastavenia />
                <img
                className="velkyObrazok"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ee9a319af464f2ec025ba5f0b624c65d11b651e788f845d2cbebf4f6fd7acd9?"
            />
            </div>

            <BoxOznamy />
        
        </div>
        
    </div>
    )
};

/*{clicked? <MenuNavBar2/> : null}
*/

function BoxProfilVybrateCvZmenyNastavenia() {
    return (
      <>

        <div className="boxProfilVybrateCvicenieAtd">

            <div className="menoStudenta">👤 Jana Rádiková 5ZYR31</div>
        
            <div className="zmenyNastaveniaRiadok">
                <div className="zmenyNastaveniaIkonkaLink">
                    <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b4193e1de5e202afe38c02211544dac90a89b5b56b0f534fcafb64128af9ae7?"
                    className="zmenaImg"
                    />

                    <NavLink className="zmenyNastaveniaIkonkaLink" to="/nastavenia">
                    <div className="zmenaPismoAndLink">Zmeniť heslo</div>
                    </NavLink> 
                </div>

               
                <div className="zmenyNastaveniaIkonkaLink">
                
                    <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b4193e1de5e202afe38c02211544dac90a89b5b56b0f534fcafb64128af9ae7?"
                    className="zmenaImg"
                    />

                    <NavLink className="zmenyNastaveniaIkonkaLink" to="/nastavenia">
                    <div className="zmenaPismoAndLink">Zmeniť predmet</div>
                    </NavLink> 

                </div>
               
            </div>
        
            <div className="vybrateCvicenieRiadok">
                <div className="textVybrateCv">Vybraté cvičenie: </div>
                <BoxCvicenie 
                    //teachersName="doc. Ing. M. Kvaššay, PhD." - Davat aj tituly?
                    teachersName="M. Kvaššay"
                    classRoom="RB105"
                    timeInSchedule="10:00 - 12:00"   
                    capacityInClass="10/30"   
                />
            </div>
        </div>

    </>
  );
}

// pridat skrolovanie medzi oznamami !!!
function BoxOznamy() {
    return (
    <>

    <div className="boxOznamyCentrovanieSTextom">
        <div className="textNadpisOznam">
        Oznamy
        </div>

        <div className="boxOznamyScroll">

        <BoxOznam
        teachersNameOznam= "P. Sedlacek"
        dateOznam= "29.9.2024 9:29"
        noteOznam= "Oznam Test - Sed non nibh quis nibh tempor vestibulum. Sed mattis vulputate risus nec suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

        <BoxOznam
        teachersNameOznam= "P. Sedlacek"
        dateOznam= "29.9.2024 9:29"
        noteOznam= "Oznam Test - Sed non nibh quis nibh tempor vestibulum. Sed mattis vulputate risus nec suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed non nibh quis nibh tempor vestibulum. Sed mattis vulputate risus nec suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

        <BoxOznam
        teachersNameOznam= "P. Sedlacek"
        dateOznam= "29.9.2024 9:29"
        noteOznam= "Oznam Test - Sed non nibh quis nibh tempor vestibulum. Sed mattis vulputate risus nec suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

        <BoxOznam
        teachersNameOznam= "P. Sedlacek"
        dateOznam= "29.9.2024 9:29"
        noteOznam= "Oznam Test - Sed non nibh quis nibh tempor vestibulum. Sed mattis vulputate risus nec suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

        <BoxOznam
        teachersNameOznam= "P. Sedlacek"
        dateOznam= "29.9.2024 9:29"
        noteOznam= "Oznam Test - Sed non nibh quis nibh tempor vestibulum. Sed mattis vulputate risus nec suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

        <BoxOznam
        teachersNameOznam= "P. Sedlacek"
        dateOznam= "29.9.2024 9:29"
        noteOznam= "Oznam Test - Sed non nibh quis nibh tempor vestibulum. Sed mattis vulputate risus nec suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed non nibh quis nibh tempor vestibulum. Sed mattis vulputate risus nec suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        </div>

    </div>

    </>
  );
}

// https://www.builder.io/m/react 
// https://nekocalc.com/px-to-rem-converter 
// https://react.dev/learn
// https://www.typescriptlang.org/cheatsheets/ or https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/ 

// Reusable inputField - https://stackoverflow.com/questions/65409862/how-to-create-a-reusable-input-field-using-react 

// https://dev.to/elhamnajeebullah/react-typescript-what-is-reactfc-and-why-should-i-use-it-4029 

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container 
// https://www.google.com/search?client=firefox-b-d&q=difference+between+margin+and+padding+css 

//@media tags na mobil - 