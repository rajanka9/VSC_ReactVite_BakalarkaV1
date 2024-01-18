
import { Link, NavLink } from "react-router-dom";
import unizaLogo from "../assets/unizaLogo.png"
import "./NavBar1.css"

//interface Props{}
//const NavBar1 = (props: Props) => {

export const NavBar1 = () => {
    return (
      <div className='pozadieHL1'>

        <Link to={"/hodnotenie"}>
          <img className='unizaLogo' src={unizaLogo} alt='Logo Zilinskej univerzity'/>
         </Link>

        <NavLink to="/home">
        <h1 className='textHL'>           
            Principy operacnych systemov
          </h1>
        </NavLink>

      </div>
    );
  };