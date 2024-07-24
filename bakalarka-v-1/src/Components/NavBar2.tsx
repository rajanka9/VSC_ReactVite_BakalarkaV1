import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar2.css"

//simple library na icons - https://react-icons.github.io/react-icons/search/#q=cross
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

//interface Props{}
//const NavBar1 = (props: Props) => {

//https://www.youtube.com/watch?v=tFvixxAXM4g 

export const NavBar2 = ({clicked, isClicked}) => {
    const handleClick = () => {
      isClicked(!clicked);
    }

    return (
      <div className='navBarPozadieHL2'>

          <NavLink to="/home">
                <div className='divProfileResponsiveBar'>
                  <h2> 
                  👤 Jana Rádiková 5ZYR31 
                  </h2> 
                </div>
          </NavLink> 

          <div className="navBarWrapper"> 

            <div className='framePodstranky'>
              <NavLink to="/home">
                <div className='divProfileNormal'>
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
      
              <div className='frameJazykyOdhlasenie'>  
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

        {!clicked? <GiHamburgerMenu className="iconsNavBar2" onClick={handleClick} /> : <RxCross2 className="iconsNavBar2" onClick={handleClick}/> }

      </div>
    );
};

/*
Ak je zakliknute tak sa zobrazi jedno ak ni druhe
{!clicked? <GiHamburgerMenu className="iconsNavBar2" onClick={handleClick} /> : <ImCross className="iconsNavBar2" onClick={handleClick}/> }
*/

/*
// Povodna NavBar2 pred videom
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar2.css"

//interface Props{}
//const NavBar1 = (props: Props) => {

//https://www.youtube.com/watch?v=tFvixxAXM4g 

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
};*/   

/*
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import "./NavBar2.css";

export const NavBar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='pozadieHL2'>
      <div className='frame1'>
        {isMobile ? (
          <div className='menuIcon' onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        ) : (
          <>
            <NavLink to="/home">
              <div className='divProfile'>
                <h2> 👤 Jana Rádiková 5ZYR31 </h2>
              </div>
            </NavLink>
            <NavLink to="/terminyRozvrh">
              <h2> Termíny/Rozvrh </h2>
            </NavLink>
            <NavLink to="/hodnotenie">
              <h2> Hodnotenie </h2>
            </NavLink>
            <NavLink to="/materialy">
              <h2> Materiály </h2>
            </NavLink>
            <NavLink to="/nastavenia">
              <h2> Nastavenia </h2>
            </NavLink>
          </>
        )}
      </div>
      {isMobile && isOpen && (
        <div className='dropdownMenu'>
          <NavLink to="/home" onClick={toggleMenu}>
            <h2> 👤 Jana Rádiková 5ZYR31 </h2>
          </NavLink>
          <NavLink to="/terminyRozvrh" onClick={toggleMenu}>
            <h2> Termíny/Rozvrh </h2>
          </NavLink>
          <NavLink to="/hodnotenie" onClick={toggleMenu}>
            <h2> Hodnotenie </h2>
          </NavLink>
          <NavLink to="/materialy" onClick={toggleMenu}>
            <h2> Materiály </h2>
          </NavLink>
          <NavLink to="/nastavenia" onClick={toggleMenu}>
            <h2> Nastavenia </h2>
          </NavLink>
        </div>
      )}
      <div className='frame2'>
        <div className='jazyky'>
          <h2> SK </h2>
          <h2 className="bezHover"> / </h2>
          <h2> EN </h2>
        </div>
        <h2> ꗃ Odhlasenie </h2>
      </div>
    </div>
  );
};
*/
