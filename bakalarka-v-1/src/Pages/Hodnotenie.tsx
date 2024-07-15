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

        <div className="centrovanie">
        
            <div className="divPodListami">
            <ObrazokNadpisPodnadpis />
            <TabulkaDosiahnuteBodyStudenta />
            </div>

        </div>
        
        
    </div>
    )
};

function ObrazokNadpisPodnadpis() {
    return (
      <>
        <div className='obrazokNadpisPodnadpis'>
          <img className="imgHodnotenie"
            loading='lazy'
            src={imgDosiahnuteVysledky}
            alt="Ikonka pocitaca a hodnotenia"
          />
          <div className='text'>
            <div className='nadpis'>Dosiahnuté výsledky</div>
            <div className='podnadpis'>
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
          <div className='oranzovyRiadok'>
            <div className='textOranzovyZaciatok'>Zápočet</div>
            <div className='textOranzovy'>Minimum</div>
            <div className='textOranzovy'>Maximum</div>
            <div className='textOranzovy'>Dosiahnuté body</div>
          </div>

          <div className="riadokTabulka">
            <div className='textRiadokZaciatokHodnotenie'>Bash</div>
            <div className='textRiadokHodnotenie'>2</div>
            <div className='textRiadokHodnotenie'>10</div>
            <div className='textRiadokHodnotenie'>3</div>
          </div>
          <div className="riadokTabulka">
            <div className='textRiadokZaciatokHodnotenie'>Vlákna</div>
            <div className='textRiadokHodnotenie'>18</div>
            <div className='textRiadokHodnotenie'>30</div>
            <div className='textRiadokHodnotenie'>20</div>
          </div>
          <div className="riadokTabulka">
            <div className='textRiadokZaciatokHodnotenie'>Body zo semestra</div>
            <div className='textRiadokHodnotenie'>0</div>
            <div className='textRiadokHodnotenie'>10</div>
            <div className='textRiadokHodnotenie'>2</div>
          </div>
          <div className="zelenyRiadok">
            <div className='textZelenyZaciatok'>Spolu</div>
            <div className='textZeleny'>20</div>
            <div className='textZeleny'>50</div>
            <div className='textZeleny'>25 ✅</div>
          </div>
        </div>
      </>
    );
  }

  //emoji - https://emojicombos.com/padlock-ascii-art 