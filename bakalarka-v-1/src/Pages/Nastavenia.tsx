
import "./Centrovanie.css"
import "./Style_Nastavenia.css"
import { NavBar1 } from '../Components/NavBar1';
import { NavBar2 } from "../Components/NavBar2";

import React, { useState } from "react";

//interface Props {}
// const HomePage = (props: Props) => {

/*
https://react.dev/reference/react/useState
const [fn, setFn] = useState(() => someFunction);

function handleClick() {
  setFn(() => someOtherFunction);
}

const [komponentNastavenia, setNaKurz] = useState(() => NastaveniaKomponentZmenaHesla);

function handleClickZmenaNaKurz() {
  setNaKurz(() => NastaveniaKomponentZmenaKurzu);
}
*/

//const [komponentNastavenia, setNaKurz] = useState(NastaveniaKomponentZmenaHesla);
//const [activeComponent, setActiveComponent] = useState<number>(1);

/*interface Props {
  setActiveComponent: (componentNumber: number) => void;
}*/

export const Nastavenia = () => {
  
  //on Click na buttony a zmenu komponentov
  const [activeComponent, setActiveComponent] = useState<number>(1);
  const renderComponent = () => {
    switch (activeComponent) {
      case 1:
        return <NastaveniaKomponentZmenaHesla setActiveComponent={setActiveComponent} />;
      case 2:
        return <NastaveniaKomponentZmenaKurzu setActiveComponent={setActiveComponent} />;
      default:
        return <NastaveniaKomponentZmenaHesla setActiveComponent={setActiveComponent} />;
    }
  };

    return (
    <div>
        <NavBar1 />
        <NavBar2 />

        <div className="divPodListami"> 
        <ObrazokNadpisPodnadpisNastavenia />
        {renderComponent()}

        </div>

    </div>
    )
};

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

  interface Props {
    setActiveComponent: (componentNumber: number) => void;
  }  

 export const NastaveniaKomponentZmenaHesla: React.FC<Props> = ({ setActiveComponent }) => {
    return (
      <> 
        <div className="sekciaButtonsNastavenia">
            <div className="buttonModryNastavenia">Zmeniť heslo</div> 
            
            <button className="buttonZlteOramovanieNastavenia" onClick={() => setActiveComponent(2)}>
            Zmeniť kurz
            </button>
        
          </div>

          <div className="komponentZmenaHesla">
            <div className="komponentHlavnyNadpis">Zmeniť heslo</div>

            <div className="komponentZmenaHeslaRiadok">
              <div className="textPredTextovymPolom">Staré heslo</div>
              <div className="nastaveniaTextovePoleSede">●●●●●●●●●</div>
            </div>

            <div className="komponentZmenaHeslaRiadok">
              <div className="textPredTextovymPolom">Nové heslo</div>
              <input className="nastaveniaTextovePoleSede" type='password' placeholder="Nové heslo"> 
              </input>
            </div>

            <div className="komponentZmenaHeslaRiadok">
              <div className="textPredTextovymPolom">Potvrdiť nové heslo</div>
              <input className="nastaveniaTextovePoleSede" type='password' placeholder="Potvrdenie nového hesla"> 
              </input>   
            </div>

            <div className="komponentButtonZlty">Zmeniť</div>
          </div>

        </>  
    );
  };

  export const NastaveniaKomponentZmenaKurzu: React.FC<Props> = ({ setActiveComponent }) => {
    return (
      <> 
        <div className="sekciaButtonsNastavenia">
            <button className="buttonZlteOramovanieNastavenia" onClick={() => setActiveComponent(1)}>
            Zmeniť heslo
            </button>
            
            <div className="buttonModryNastavenia">Zmeniť kurz</div>
          </div>

          <div className="komponentZmenaHesla">
            <div className="komponentHlavnyNadpis">Zmeniť kurz</div>
            <div className="komponentZmenaHeslaRiadok">
              <div className="textPredTextovymPolom">Will be added in the future</div>
            </div>
            <div className="komponentButtonZlty">Zmeniť</div>
          </div>
        </>  
    );
  };  

  // https://www.codevertiser.com/reusable-input-component-react/ 

  //React: How to get input value (dynamic text input field) 
  // https://www.youtube.com/watch?v=91TIUURx5JM 

  //mobile
  // https://www.browserstack.com/guide/how-to-make-react-app-responsive

  // CSS
  // https://www.youtube.com/watch?v=Dfj0B6aL7Hs
  // flexbox - https://www.youtube.com/watch?v=bbaKrRU4MVk
  // position - https://www.youtube.com/watch?v=YEmdHbQBCSQ

  // input - https://www.codevertiser.com/reusable-input-component-react/

  /*
<div className="divPodListami"> 
        <div className="divPodListami"> 
        <ObrazokNadpisPodnadpisNastavenia />
        {renderComponent()}

*/

/*const handleClickZmenaNaKurz()  {
  setNaDalsi();
}*/

/*
function handleClickZmenaNaHeslo() {
  setNaKurz(() => NastaveniaKomponentZmenaHesla);
}*/

/*
function NastaveniaKomponentZmenaHesla(): React.ReactNode { 
  return (
      <> 
        <div className="sekciaButtonsNastavenia">
            <div className="buttonModryNastavenia">Zmeniť heslo</div> 
            
            <button className="buttonZlteOramovanieNastavenia" >
            Zmeniť kurz
            </button>
        
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
              <input className="nastaveniaTextovePoleSede" type='text' placeholder="Nové heslo"> 
              </input>
            </div>

            <div className="komponentZmenaHeslaRiadok">
              <div className="textPredTextovymPolom">Potvrdiť nové heslo</div>
              <input className="nastaveniaTextovePoleSede" type='password' placeholder="Potvrdenie nového hesla"> 
              </input>   
            </div>

            <div className="komponentButtonZlty">Zmeniť</div>
          </div>

        </>  
    );
  }

  /*vytvorit dropdown komponent to do buducna*/
  /*function NastaveniaKomponentZmenaKurzu() {
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
  }*/