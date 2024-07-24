
import "./Centrovanie.css"
import "./Style_TerminyRozvrh.css"
import { NavBar1 } from '../Components/NavBar1';
import { NavBar2 } from "../Components/NavBar2";

import React, { useState } from "react";

//interface Props {}
// const HomePage = (props: Props) => {

export const TerminyRozvrh = () => {
    
//on Click na buttony a zmenu komponentov
const [activeComponent, setActiveComponent] = useState<number>(1);
const renderComponent = () => {
  switch (activeComponent) {
    case 1:
      return <Terminy setActiveComponent={setActiveComponent} />;
    case 2:
      return <Rozvrh setActiveComponent={setActiveComponent} />;
    default:
      return <Terminy setActiveComponent={setActiveComponent} />;
  }
};

    return (
    <div>
        <NavBar1 />
        <NavBar2 />

        <div className="divPodListami"> 
        {renderComponent()}
        
         </div>
    </div>
    )
};

interface PropsBtn {
    setActiveComponent: (componentNumber: number) => void;
}  

// Pridat radio button - https://www.w3schools.com/howto/howto_css_custom_checkbox.asp

// radio buttons - https://www.youtube.com/watch?v=widROy5qcDc 
export const Terminy: React.FC<PropsBtn> = ({ setActiveComponent }) => {
    return (
      <> 
        <div className="sekciaButtonsTerminyRozvrh">
            <div className="buttonModryTerminyRozvrh">Terminy</div> 
            
            <button className="btZlteOramovanieRozvrhTerminy" onClick={() => setActiveComponent(2)}>
            Rozvrh
            </button>
        
          </div>

          <div className="komponentTerminyTabulka">

            <div className='tabulkaSTerminami'>
          <div className='oranzovyRiadokTerminy'>
            <div className='oranzovyTextTerminy'>Deň</div>
            <div className='oranzovyTextTerminy'>Čas</div>
            <div className='oranzovyTextTerminy'>Miestnosť</div>
            <div className='oranzovyTextTerminy'>Kapacita</div>
            <div className='oranzovyTextTerminy'>Voľné miesta</div>
            <div className='oranzovyTextTerminy'>Učiteľ</div>
            <div className='oranzovyTextTerminy'>Výber</div>
          </div>

          <div className='riadokTabulkaTerminy'>
            <div className='TextRiadokTerminy'>Pondelok</div>
            <div className='TextRiadokTerminy'>10:00-12:00</div>
            <div className='TextRiadokTerminy'>RB201</div>
            <div className='TextRiadokTerminy'>20</div>
            <div className='TextRiadokTerminy'>10</div>
            <div className='TextRiadokTerminy'>M. Kvaššay</div>
            <div className='TextRiadokTerminy'>
            <input type="radio" name="terminy"></input>  
            </div>
          </div>

          <div className='riadokTabulkaTerminy'>
            <div className='TextRiadokTerminy'>Pondelok</div>
            <div className='TextRiadokTerminy'>10:00-12:00</div>
            <div className='TextRiadokTerminy'>RB002</div>
            <div className='TextRiadokTerminy'>20</div>
            <div className='TextRiadokTerminy'>10</div>
            <div className='TextRiadokTerminy'>P. Rusnák</div>
            <div className='TextRiadokTerminy'>
            <input type="radio" name="terminy"></input>  
            </div>
          </div>

          <div className='riadokTabulkaTerminy'>
            <div className='TextRiadokTerminy'>Pondelok</div>
            <div className='TextRiadokTerminy'>14:00-16:00</div>
            <div className='TextRiadokTerminy'>RB201</div>
            <div className='TextRiadokTerminy'>20</div>
            <div className='TextRiadokTerminy'>19</div>
            <div className='TextRiadokTerminy'>M. Kvaššay</div>
            <div className='TextRiadokTerminy'>
            <input type="radio" name="terminy"></input>  
            </div>
          </div>

          <div className='riadokTabulkaTerminy'>
            <div className='TextRiadokTerminy'>Pondelok</div>
            <div className='TextRiadokTerminy'>14:00-16:00</div>
            <div className='TextRiadokTerminy'>RB201</div>
            <div className='TextRiadokTerminy'>20</div>
            <div className='TextRiadokTerminy'>19</div>
            <div className='TextRiadokTerminy'>M. Kvaššay</div>
            <div className='TextRiadokTerminy'>
            <input type="radio" name="terminy"></input>  
            </div>
          </div>

          <div className='riadokTabulkaTerminy'>
            <div className='TextRiadokTerminy'>Utorok</div>
            <div className='TextRiadokTerminy'>10:00-12:00</div>
            <div className='TextRiadokTerminy'>RB002</div>
            <div className='TextRiadokTerminy'>30</div>
            <div className='TextRiadokTerminy'>10</div>
            <div className='TextRiadokTerminy'>P. Rusnák</div>
            <div className='TextRiadokTerminy'>
            <input type="radio" name="terminy"></input>  
            </div>
          </div>

          <div className='riadokTabulkaTerminy'>
            <div className='TextRiadokTerminy'>Utorok</div>
            <div className='TextRiadokTerminy'>14:00-16:00</div>
            <div className='TextRiadokTerminy'>RB201</div>
            <div className='TextRiadokTerminy'>20</div>
            <div className='TextRiadokTerminy'>19</div>
            <div className='TextRiadokTerminy'>M. Kvaššay</div>
            <div className='TextRiadokTerminy'>
            <input type="radio" name="terminy"></input>  
            </div>
          </div>

          <div className='riadokTabulkaTerminy'>
            <div className='TextRiadokTerminy'>Streda</div>
            <div className='TextRiadokTerminy'>14:00-16:00</div>
            <div className='TextRiadokTerminy'>RB201</div>
            <div className='TextRiadokTerminy'>20</div>
            <div className='TextRiadokTerminy'>20</div>
            <div className='TextRiadokTerminy'>P. Sedláček</div>
            <div className='TextRiadokTerminy'>
            <input type="radio" name="terminy"></input>  
            </div>
          </div>
          
          <div className='riadokTabulkaTerminy'>
            <div className='TextRiadokTerminy'>Štvrtok</div>
            <div className='TextRiadokTerminy'>8:00-10:00</div>
            <div className='TextRiadokTerminy'>RB201</div>
            <div className='TextRiadokTerminy'>20</div>
            <div className='TextRiadokTerminy'>20</div>
            <div className='TextRiadokTerminy'>P. Sedláček</div>
            <div className='TextRiadokTerminy'>
            <input type="radio" name="terminy"></input>  
            </div>
          </div>
          
          <div className='riadokTabulkaTerminy'>
            <div className='TextRiadokTerminy'>Štvrtok</div>
            <div className='TextRiadokTerminy'>10:00-12:00</div>
            <div className='TextRiadokTerminy'>RB201</div>
            <div className='TextRiadokTerminy'>20</div>
            <div className='TextRiadokTerminy'>9</div>
            <div className='TextRiadokTerminy'>M. Kvaššay</div>
            <div className='TextRiadokTerminy'>
            <input type="radio" name="terminy"></input>  
            </div>
          </div>

          <div className='riadokTabulkaTerminy'>
            <div className='TextRiadokTerminy'>Štvrtok</div>
            <div className='TextRiadokTerminy'>14:00-16:00</div>
            <div className='TextRiadokTerminy'>RB201</div>
            <div className='TextRiadokTerminy'>20</div>
            <div className='TextRiadokTerminy'>9</div>
            <div className='TextRiadokTerminy'>M. Kvaššay</div>
            <div className='TextRiadokTerminy'>
            <input type="radio" name="terminy"></input>  
            </div>
          </div>

          </div>
            
        </div>

        </>  
    );
};

export const Rozvrh: React.FC<PropsBtn> = ({ setActiveComponent }) => {
    return (
      <> 
        <div className="sekciaButtonsTerminyRozvrh">
            
            <button className="btZlteOramovanieRozvrhTerminy" onClick={() => setActiveComponent(1)}>
            Terminy
            </button>
        
            <div className="buttonModryTerminyRozvrh">Rozvrh</div> 
          </div>

          <div className="komponentRozvrh">
                       
            <div className="riadokRozvrh">
            <div className="denDen">
              <div className="skratkaDnaVelke">PO</div>
              <div className="denMalePismo">Pondelok</div>
            </div>

            <BoxVyplnenieCasom 
              timeInSchedule="8:00 - 10:00"   
            />
            <BoxCvicenieRozvrhVolne 
              //teachersName="doc. Ing. M. Kvaššay, PhD." - Davat aj tituly?
              teachersName="M. Kvaššay" classRoom="RB201" timeInSchedule="10:00 - 12:00" capacityInClass="10/20"   
            />
            <BoxCvicenieRozvrhVolne 
              //teachersName="doc. Ing. M. Kvaššay, PhD." - Davat aj tituly?
              teachersName="P. Rusnák" classRoom="RB002" timeInSchedule="10:00 - 12:00" capacityInClass="10/30"   
            />

            <BoxCvicenieRozvrhSkoroObsadene 
              //teachersName="doc. Ing. M. Kvaššay, PhD." - Davat aj tituly?
              teachersName="M. Kvaššay" classRoom="RB201" timeInSchedule="14:00 - 16:00" capacityInClass="19/20"   
            />

            <BoxCvicenieRozvrhSkoroObsadene 
              //teachersName="doc. Ing. M. Kvaššay, PhD." - Davat aj tituly?
              teachersName="M. Kvaššay" classRoom="RB201" timeInSchedule="16:00 - 18:00" capacityInClass="19/20"   
            />
          
           </div>

           <div className="riadokRozvrh">
            <div className="denDen">
              <div className="skratkaDnaVelke">UT</div>
              <div className="denMalePismo">Utorok</div>
            </div>

            <BoxVyplnenieCasom 
              timeInSchedule="8:00 - 10:00"   
            />

            <BoxCvicenieRozvrhVybrateCv 
              //teachersName="doc. Ing. M. Kvaššay, PhD." - Davat aj tituly?
              teachersName="P. Rusnák" classRoom="RB002" timeInSchedule="10:00 - 12:00" capacityInClass="10/30"   
            />
          
          <BoxVyplnenieCasom 
              timeInSchedule="10:00 - 12:00"   
            />

          <BoxCvicenieRozvrhSkoroObsadene 
              //teachersName="doc. Ing. M. Kvaššay, PhD." - Davat aj tituly?
              teachersName="M. Kvaššay" classRoom="RB201" timeInSchedule="14:00 - 16:00" capacityInClass="19/20"   
            />

          <BoxVyplnenieCasom 
              timeInSchedule="16:00 - 18:00"   
            />
           </div>
        
           <div className="riadokRozvrh">
            <div className="denDen">
              <div className="skratkaDnaVelke">ST</div>
              <div className="denMalePismo">Streda</div>
            </div>

            <BoxVyplnenieCasom 
              timeInSchedule="8:00 - 10:00"   
            />

            <BoxVyplnenieCasom 
              timeInSchedule="10:00 - 12:00"   
              />

            <BoxVyplnenieCasom 
              timeInSchedule="10:00 - 12:00"   
            />

            <BoxCvicenieRozvrhPlneObsadene 
              //teachersName="doc. Ing. M. Kvaššay, PhD." - Davat aj tituly?
              teachersName="P. Sedláček" classRoom="RB201" timeInSchedule="12:00 - 14:00" capacityInClass="20/20"   
            />

            <BoxVyplnenieCasom 
              timeInSchedule="16:00 - 18:00"   
            />
          
           </div>

           <div className="riadokRozvrh">
            <div className="denDen">
              <div className="skratkaDnaVelke">ŠT</div>
              <div className="denMalePismo">Štvrtok</div>
            </div>

            <BoxCvicenieRozvrhPlneObsadene 
              //teachersName="doc. Ing. M. Kvaššay, PhD." - Davat aj tituly?
              teachersName="P. Sedláček" classRoom="RB201" timeInSchedule="8:00 - 10:00" capacityInClass="20/20"   
            />
            
            <BoxCvicenieRozvrhVolne 
              //teachersName="doc. Ing. M. Kvaššay, PhD." - Davat aj tituly?
              teachersName="M. Kvaššay" classRoom="RB201" timeInSchedule="10:00 - 12:00" capacityInClass="10/20"   
            />

            <BoxVyplnenieCasom 
              timeInSchedule="14:00 - 16:00"   
            />

            <BoxCvicenieRozvrhVolne 
              //teachersName="doc. Ing. M. Kvaššay, PhD." - Davat aj tituly?
              teachersName="M. Kvaššay" classRoom="RB201" timeInSchedule="12:00 - 14:00" capacityInClass="10/20"   
            />

            <BoxVyplnenieCasom 
              timeInSchedule="16:00 - 18:00"   
            />
          
           </div>

          </div>

        </>  
    );
};

interface Props {
  teachersName: string;
  classRoom: string;
  timeInSchedule: string;
  capacityInClass: string;
}

export const BoxCvicenieRozvrhVybrateCv : React.FC<Props> = ({teachersName, classRoom, timeInSchedule, capacityInClass}) => {
  return (
      <>
      <div className="BoxCvicenieRozvrhVybrateCv">

        <div className="pismoBoxTenke">{teachersName}</div>
        <div className="pismoBoxHrube">{timeInSchedule}</div>
      
        <div className="centrovanieVRiadku">
          <div className="pismoBoxHrube">{classRoom}</div>
          <div className="pismoBoxHrube">{capacityInClass}</div>
        </div>

      </div>
      </>      
  );
};

BoxCvicenieRozvrhVybrateCv.defaultProps = {
  teachersName: 'M. Priezvisko',
  classRoom: 'PO000',
  timeInSchedule: '00:00 - 00:01',
  capacityInClass: '0/1',
};

export const BoxCvicenieRozvrhVolne : React.FC<Props> = ({teachersName, classRoom, timeInSchedule, capacityInClass}) => {
  return (
      <>
      <div className="BoxCvicenieRozvrhVolneCv">

        <div className="pismoBoxTenke">{teachersName}</div>
        <div className="pismoBoxHrube">{timeInSchedule}</div>
      
        <div className="centrovanieVRiadku">
          <div className="pismoBoxHrube">{classRoom}</div>
          <div className="pismoBoxHrube">{capacityInClass}</div>
        </div>

      </div>
      </>      
  );
};

BoxCvicenieRozvrhVolne.defaultProps = {
  teachersName: 'M. Priezvisko',
  classRoom: 'PO000',
  timeInSchedule: '00:00 - 00:01',
  capacityInClass: '0/1',
};

export const BoxCvicenieRozvrhSkoroObsadene : React.FC<Props> = ({teachersName, classRoom, timeInSchedule, capacityInClass}) => {
  return (
      <>
      <div className="BoxCvicenieRozvrhSkoroObsadeneCv">

        <div className="pismoBoxTenke">{teachersName}</div>
        <div className="pismoBoxHrube">{timeInSchedule}</div>
      
        <div className="centrovanieVRiadku">
          <div className="pismoBoxHrube">{classRoom}</div>
          <div className="pismoBoxHrube">{capacityInClass}</div>
        </div>

      </div>
      </>      
  );
};

BoxCvicenieRozvrhSkoroObsadene.defaultProps = {
  teachersName: 'M. Priezvisko',
  classRoom: 'PO000',
  timeInSchedule: '00:00 - 00:01',
  capacityInClass: '0/1',
};

export const BoxCvicenieRozvrhPlneObsadene : React.FC<Props> = ({teachersName, classRoom, timeInSchedule, capacityInClass}) => {
  return (
      <>
      <div className="BoxCvicenieRozvrhPlneObsadeneCv">

        <div className="pismoBoxTenke">{teachersName}</div>
        <div className="pismoBoxHrube">{timeInSchedule}</div>
      
        <div className="centrovanieVRiadku">
          <div className="pismoBoxHrube">{classRoom}</div>
          <div className="pismoBoxHrube">{capacityInClass}</div>
        </div>

      </div>
      </>      
  );
};

BoxCvicenieRozvrhPlneObsadene.defaultProps = {
  teachersName: 'M. Priezvisko',
  classRoom: 'PO000',
  timeInSchedule: '00:00 - 00:01',
  capacityInClass: '0/1',
};

interface PropsTime {
   timeInSchedule: string;
}

export const BoxVyplnenieCasom : React.FC<PropsTime> = ({timeInSchedule}) => {
  return (
      <>
      <div className="BoxVyplnenieCasom">
        <div className="pismoBoxHrube">{timeInSchedule}</div>
      </div>
      </>      
  );
};

BoxVyplnenieCasom.defaultProps = {
  timeInSchedule: '00:00 - 00:01',
};