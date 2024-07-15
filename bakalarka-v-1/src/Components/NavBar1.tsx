
import { Link, NavLink } from "react-router-dom";
import unizaLogo from "../assets/unizaLogo.png"
import "./NavBar1.css"

//interface Props{}
//const NavBar1 = (props: Props) => {

export const NavBar1 = () => {
    return (
      <div className='pozadieHL1'>

        <img className='unizaLogo' src={unizaLogo} alt='Logo Zilinskej univerzity'/>

        <NavLink to="/home">
          <h1 className='h1'>           
            Princípy operačných systémov
          </h1>
        </NavLink>

      </div>
    );
  };

