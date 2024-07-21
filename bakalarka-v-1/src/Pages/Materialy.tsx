import React from "react";

import "./Centrovanie.css"
import "./Style_Materialy.css"

import { NavBar1 } from '../Components/NavBar1';
import { NavBar2 } from "../Components/NavBar2";

import imgMaterialy from "../assets/img_studijneMaterialy.png"

//interface Props {}
// const HomePage = (props: Props) => {

export const Materialy = () => {
    return (
    <div>
        <NavBar1 />
        <NavBar2 />

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
            <div className='textOranzovyZaciatok'>Názov</div>
            <div className='textOranzovyZaciatok'>Popis</div>
            <div className='textOranzovy'>Spustiť</div>
            <div className='textOranzovy'>Stiahnuť</div>
          </div>

          <div className="riadokTabulkaMaterialy">
            <div className='textRiadokZaciatok'>Online materiály pre cvičenie</div>
            <div className='textRiadokZaciatok'>Podklady pre cvičenie z predmetu</div>
            <a className='linkFarba' href="https://frios2.fri.uniza.sk/~chochlik/frios/frios/sk.html">
            <div className='textRiadok'>Link 🔗</div>
            </a>
            <div className='textRiadok'> </div>
          </div>

          <div className="riadokTabulkaMaterialy">
            <div className='textRiadokZaciatok'>Vlákna</div>
            <div className='textRiadokZaciatok'>Pomoc pri Makefile</div>
            <a className='linkFarba' href="https://makefiletutorial.com/">
            <div className='textRiadok'>Link 🔗</div>
            </a>
            <div className='textRiadok'> </div>
          </div>

          <div className="riadokTabulkaMaterialy">
            <div className='textRiadokZaciatok'>Bash - cheat sheet</div>
            <div className='textRiadokZaciatok'> </div>
            <a className='linkFarba' href="https://devhints.io/bash">
            <div className='textRiadok'>Link 🔗</div>
            </a>
            <div className='textRiadok'> </div>
          </div>
          
        </div>
      </>
    );
  }

  //🔗 - ascii code