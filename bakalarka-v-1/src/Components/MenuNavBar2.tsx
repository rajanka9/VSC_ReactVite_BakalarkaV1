import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./MenuNavBar2.css"

export const MenuNavBar2 = () => {
    return (
      <div className='menuNavBar2'>

          <div className="menuNavBar2Wrapper"> 

            <div className='menuframePodstranky'>
              
                <NavLink to="/terminyRozvrh">
                  <h2 className="menuNavBarText"> 
                    Termíny/Rozvrh
                  </h2>
                </NavLink> 
                  
                <NavLink to="/hodnotenie">
                <h2 className="menuNavBarText"> 
                Hodnotenie
                    </h2>
                </NavLink> 
                  
                <NavLink to="/materialy">
                <h2 className="menuNavBarText"> 
                Materiály
                    </h2>
                </NavLink> 
                  
                <NavLink to="/nastavenia">
                <h2 className="menuNavBarText"> 
                Nastavenia
                  </h2>
                </NavLink>  
            </div>
      
            <div className='menuFrameJazykyOdhlasenie'>  
                <div className='menuJazyky'>
                <h2 className="menuNavBarText"> 
                SK
                </h2>
                <h2 className="bezHover"> 
                  /
                </h2>
                <h2 className="menuNavBarText"> 
                EN
                </h2>
                </div>
      
                <h2 className="menuNavBarText"> 
                ꗃ Odhlasenie
                </h2>  
            </div>
          
        </div> 

      </div>
    );
};

