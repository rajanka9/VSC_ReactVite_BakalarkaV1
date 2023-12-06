/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import unizaLogo from "./assets/unizaLogo.png"

export default function MyApp() {
  return (
    <div>
      <HornaLista1 />
      <HornaLista2 />

    </div>
  );
}

const HornaLista1 = () => {
  return (
    <div className='pozadieHL1'>
        <img className='unizaLogo' src={unizaLogo} alt='Logo Zilinskej univerzity'/>

        <h1 className='textHL'> 
          Principy operacnych systemov
        </h1>
    </div>
  );

};

const HornaLista2 = () => {
  return (
    <div className='pozadieHL2'>
        <div className='frame1'>
        
        <div className='divProfile'>
        <h2> 
          ...
        </h2>
        <h2> 
          Jana Radikova 5ZYR31
        </h2>
        </div>

        <h2> 
          Terminy/Rozvrh
        </h2>

        <h2> 
          Hodnotenie
        </h2>

        <h2> 
          Materialy
        </h2>
        
        <h2> 
          Nastavenia
        </h2>
        </div>

        <div className='frame2'>  
          <div className='jazyky'>
          <h2> 
          SK
          </h2>
          <h2> 
          /
          </h2>
          <h2> 
          EN
          </h2>
          </div>

          <h2> 
          Odhlasenie
          </h2>
        </div>

    </div>
  );

}


//const [count, setCount] = useState(0)

 /*  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Menim co je tu dole a automaticky sa meni stav
      </p>
    </>
  ) */