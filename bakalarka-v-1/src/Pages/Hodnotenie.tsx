//import React from "react";

import "./Centrovanie.css"
import "./Style_Hodnotenie.css"
import { NavBar1 } from '../Components/NavBar1';
import { NavBar2 } from "../Components/NavBar2";

import imgDosiahnuteVysledky from "../assets/img_dosiahnuteVysledky.png"

export const Hodnotenie = () => {
    return (
    <div>
        <NavBar1 />
        <NavBar2 />
        
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
            <div className='hodnotenieTextOranzovyZaciatok'>Zápočet</div>
            <div className='hodnotenieTextOranzovy'>Minimum</div>
            <div className='hodnotenieTextOranzovy'>Maximum</div>
            <div className='hodnotenieTextOranzovy'>Dosiahnuté body</div>
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
            <div className='hodnotenieTextZelenyZaciatok'>Spolu</div>
            <div className='hodnotenieTextZeleny'>20</div>
            <div className='hodnotenieTextZeleny'>50</div>
            <div className='hodnotenieTextZeleny'>25 ✅</div>
          </div>
        </div>
      </>
    );
  }

  //emoji - https://emojicombos.com/padlock-ascii-art 