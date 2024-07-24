import React from "react";

import "./Centrovanie.css"
import "./Style_Materialy.css"

import imgMaterialy from "../assets/img_studijneMaterialy.png"
import { NavBar1 } from '../Components/NavBar1';
import { NavBar2 } from "../Components/NavBar2";
import { MenuNavBar2 } from "../Components/MenuNavBar2";

import { useState } from "react";


//interface Props {}
// const HomePage = (props: Props) => {

export const Materialy = () => {
  const[clicked, isClicked] = useState (false);

    return (
    <div>
        <NavBar1 />
        <NavBar2 clicked={clicked} isClicked={isClicked} />
        {clicked? <MenuNavBar2/> : null}

        <div className="divPodListami">
            <ObrazokNadpisPodnadpisMaterialy />
            <TabulkaSLInkami />
        </div>

    </div>
)
};

function ObrazokNadpisPodnadpisMaterialy() {
    return (
      <>
        <div className='obrazokNadpisPodnadpisMaterialy'>
          <img className="imgStudijneMaterialy"
            loading='lazy'
            src={imgMaterialy}
          />
          <div className='textDokopyMaterialy'>
            <div className='nadpisMaterialy'>Študijné materiály</div>
            <div className='podnadpisMaterialy'>
            V tejto sekcií nájdete všetky materiály k predmetu Princípy operačných systémov (POS). Samozrejme odporúčame čerpať aj z iných (dôveryhodných) zdrojov. :)
            </div>
          </div>
        </div>
        
      </>
    );
  }

  function TabulkaSLInkami() {
    return (
      <>
        <div className='tabulkaSLinkami'>
          <div className='oranzovyRiadokMaterialy'>
            <div className='materialyTextOranzovyZaciatok'>Názov</div>
            <div className='materialyTextOranzovyZaciatok'>Popis</div>
            <div className='materialyTextOranzovy'>Spustiť</div>
            <div className='materialyTextOranzovy'>Stiahnuť</div>
          </div>

          <div className="riadokTabulkaMaterialy">
            <div className='materialyTextRiadokZaciatok'>Online materiály pre cvičenie</div>
            <div className='materialyTextRiadokZaciatok'>Podklady pre cvičenie z predmetu</div>
            <a className='materialyLinkFarba' href="https://frios2.fri.uniza.sk/~chochlik/frios/frios/sk.html">
            <div className='materialyTextRiadok'>Link 🔗</div>
            </a>
            <div className='materialyTextRiadok'> </div>
          </div>

          <div className="riadokTabulkaMaterialy">
            <div className='materialyTextRiadokZaciatok'>Vlákna</div>
            <div className='materialyTextRiadokZaciatok'>Pomoc pri Makefile</div>
            <a className='materialyLinkFarba' href="https://makefiletutorial.com/">
            <div className='materialyTextRiadok'>Link 🔗</div>
            </a>
            <div className='materialyTextRiadok'> </div>
          </div>

          <div className="riadokTabulkaMaterialy">
            <div className='materialyTextRiadokZaciatok'>Bash - cheat sheet</div>
            <div className='materialyTextRiadokZaciatok'> </div>
            <a className='materialyLinkFarba' href="https://devhints.io/bash">
            <div className='materialyTextRiadok'>Link 🔗</div>
            </a>
            <div className='materialyTextRiadok'> </div>
          </div>
          
        </div>
      </>
    );
  }

  //🔗 - ascii code