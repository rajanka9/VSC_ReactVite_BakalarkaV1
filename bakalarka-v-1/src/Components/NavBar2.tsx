import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar2.css"

//interface Props{}
//const NavBar1 = (props: Props) => {

//  <h2> 🏠 Jana Rádiková 5ZYR31 </h2> 
//  <h2> 🏠︎ Jana Rádiková 5ZYR31 </h2> 


export const NavBar2 = () => {
    return (
      <div className='pozadieHL2'>
          
          <div className='frame1'>
          <NavLink to="/home">
            <div className='divProfile'>
              <h2> 
              👤 Jana Rádiková 5ZYR31 
              </h2> 
            </div>
            </NavLink> 

            <NavLink to="/terminyRozvrh">
              <h2> 
                Termíny/Rozvrh
              </h2>
            </NavLink> 
              
            <NavLink to="/hodnotenie">
                <h2> 
                  Hodnotenie
                </h2>
            </NavLink> 
              
              
            <NavLink to="/materialy">
                <h2> 
                  Materiály
                </h2>
            </NavLink> 
              
              
            <NavLink to="/nastavenia">
              <h2> 
                Nastavenia
              </h2>
            </NavLink> 
              
          </div>
  
          <div className='frame2'>  
            <div className='jazyky'>
            <h2> 
              SK
            </h2>
            <h2 className="bezHover"> 
              /
            </h2>
            <h2> 
              EN
            </h2>
            </div>
  
            <h2> 
            ꗃ Odhlasenie
            </h2>
          </div>

      </div>
    );
};   
   