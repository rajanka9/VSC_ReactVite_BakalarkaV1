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

        <div className="divPodListami"> 
        <ObrazokNadpisPodnadpisNastavenia />
        <NastaveniaKomponentZmenaHesla />
        </div>

    </div>
    )
};

function NastaveniaKomponentZmenaHesla() {
    return (
      <> 
        <div className="sekciaButtonsNastavenia">
            <div className="buttonModryNastavenia">Zmeniť heslo</div> 
            <div className="buttonZlteOramovanieNastavenia">Zmeniť kurz</div>
          </div>

          <div className="komponentZmenaHesla">
            <div className="komponentHlavnyNadpis">Zmeniť heslo</div>

            <div className="komponentZmenaHeslaRiadok">
              <div className="textPredTextovymPolom">Staré heslo</div>
              <div className="nastaveniaTextovePoleSede">●●●●●●●●●</div>
            </div>
            <div className="komponentZmenaHeslaRiadok">
              <div className="textPredTextovymPolom">Nové heslo</div>
              <div className="nastaveniaTextovePoleSede">●●●●●●●●●</div>
            </div>
            <div className="komponentZmenaHeslaRiadok">
              <div className="textPredTextovymPolom">Potvrdiť nové heslo</div>
              <div className="nastaveniaTextovePoleSede">●●●●●●●●●</div>
            </div>

            <div className="komponentButtonZlty">Zmeniť</div>
          </div>

        </>  
    );
  }

  /*vytvorit dropdown komponent to do buducna*/
  function NastaveniaKomponentZmenaKurzu() {
    return (
      <> 
        <div className="sekciaButtonsNastavenia">
            <div className="buttonZlteOramovanieNastavenia">Zmeniť heslo</div> 
            <div className="buttonModryNastavenia">Zmeniť kurz</div>
          </div>

          <div className="komponentZmenaHesla">
            <div className="komponentHlavnyNadpis">Zmeniť kurz</div>
            <div className="komponentZmenaHeslaRiadok">
              <div className="textPredTextovymPolom">This function will be added in the future</div>
            </div>
            <div className="komponentButtonZlty">Zmeniť</div>
          </div>

        </>  
    );
  }

  function ObrazokNadpisPodnadpisNastavenia() {
    return (
      <>

        <div className="nastaveniaObrazokNadpisPodnadpis">
            <img
              className="imgNastavenia"
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/274931b36884f6eaa318d8eb0fc977b54ee4253c996f764e6a8b9d55dc6742db?"
            />

            <div className="nastaveniaNadpisPodnadpis">
              <div className="nadpisNastavenia">Nastavenia</div>
              <div className="podnadpisNastavenia">
                Sekcia na zmenu hesla alebo kurzu (niektoré kurzy nemusia byť k
                dispozícií) :)
              </div>
            </div>
          </div>
      </>
    );
  }

  //React: How to get input value (dynamic text input field) 
  // https://www.youtube.com/watch?v=91TIUURx5JM 

  //mobile
  // https://www.browserstack.com/guide/how-to-make-react-app-responsive