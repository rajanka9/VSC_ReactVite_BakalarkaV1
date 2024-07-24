//import React from "react";

import "./Centrovanie.css"
import "./Style_Hodnotenie.css"
import { NavBar1 } from '../Components/NavBar1';
import { NavBar2 } from "../Components/NavBar2";
import { MenuNavBar2 } from "../Components/MenuNavBar2";
import { useState } from "react";


import imgDosiahnuteVysledky from "../assets/img_dosiahnuteVysledky.png"

export const Hodnotenie = () => {
  const[clicked, isClicked] = useState (false)
  
  return (
    <div>
        <NavBar1 />
        <NavBar2 clicked={clicked} isClicked={isClicked} />
        {clicked? <MenuNavBar2/> : null}
        
        <div className="divPodListami">
          <ObrazokNadpisPodnadpisHodnotenie />
          <TabulkaDosiahnuteBodyStudenta />
        </div>
        
    </div>
    )
};

function ObrazokNadpisPodnadpisHodnotenie() {
    return (
      <>
        <div className='obrazokNadpisPodnadpisHodnotenie'>
          <img className="imgHodnotenie"
            loading='lazy'
            src={imgDosiahnuteVysledky}
            alt="Ikonka pocitaca a hodnotenia"
          />
          <div className='hodnotenieTextDokopy'>
            <div className='hodnotenieNadpis'>Dosiahnuté výsledky</div>
            <div className='hodnoteniePodnadpis'>
              V prípade nezrovnalostí ohľadom bodového hodnotenia, neváhajte
              kontaktovať vášho vyučujúceho.
            </div>
          </div>
        </div>
        
      </>
    );
  }

  function TabulkaDosiahnuteBodyStudenta() {
    return (
      <>
        <div className='tabulkaDosuhnuteBody'>
          <div className='hodnotenieOranzovyRiadok'>
            <div className='hodnotenieTextZaciatokFarba'>Zápočet</div>
            <div className='hodnotenieTextFarba'>Minimum</div>
            <div className='hodnotenieTextFarba'>Maximum</div>
            <div className='hodnotenieTextFarba'>Dosiahnuté body</div>
          </div>

          <div className="hodnotenieRiadokTabulka">
            <div className='textRiadokZaciatokHodnotenie'>Bash</div>
            <div className='textRiadokHodnotenie'>2</div>
            <div className='textRiadokHodnotenie'>10</div>
            <div className='textRiadokHodnotenie'>3</div>
          </div>
          <div className="hodnotenieRiadokTabulka">
            <div className='textRiadokZaciatokHodnotenie'>Vlákna</div>
            <div className='textRiadokHodnotenie'>18</div>
            <div className='textRiadokHodnotenie'>30</div>
            <div className='textRiadokHodnotenie'>20</div>
          </div>
          <div className="hodnotenieRiadokTabulka">
            <div className='textRiadokZaciatokHodnotenie'>Body zo semestra</div>
            <div className='textRiadokHodnotenie'>0</div>
            <div className='textRiadokHodnotenie'>10</div>
            <div className='textRiadokHodnotenie'>2</div>
          </div>

          <div className="hodnotenieZelenyRiadok">
            <div className='hodnotenieTextZaciatokFarba'>Spolu</div>
            <div className='hodnotenieTextFarba'>20</div>
            <div className='hodnotenieTextFarba'>50</div>
            <div className='hodnotenieTextFarba'>25 ✅</div>
          </div>
        </div>
      </>
    );
  }

  //emoji - https://emojicombos.com/padlock-ascii-art 