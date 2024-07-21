//import './Components/NavBar1.css';
//import NavBar1 from "./Components/NavBar1"
//import React from 'react';

// malo by byt v komponente
//import { Link, Outlet} from "react-router-dom";

import './App.css'

      /*{trieda} from nazov suboru*/
import {NavBar1} from './Components/NavBar1';
import {NavBar2} from './Components/NavBar2';

import {HomePage} from "./Pages/HomePage";
import {Hodnotenie} from "./Pages/Hodnotenie";
import {Materialy} from "./Pages/Materialy";
import {Nastavenia} from "./Pages/Nastavenia";
import {TerminyRozvrh} from "./Pages/TerminyRozvrh"

import {createBrowserRouter} from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {return "hi there";},
  },

  {
    path: "/home",
    element: <HomePage />,
    loader:async () => {
      return "hi there2";
    }
  },

  {
    path: "/terminyRozvrh",
    element: <TerminyRozvrh />,
    loader:async () => {
      return "hi there2";
    }
  },

  {
    path: "/hodnotenie",
    element: <Hodnotenie />,
    loader:async () => {
      return "hi there3";
    }
  },

  {
    path: "/materialy",
    element: <Materialy />,
    loader:async () => {
      return "hi there4";
    }
  },

  {
    path: "/nastavenia",
    element: <Nastavenia />,
    loader:async () => {
      return "hi there5";
    }
  },
])

// https://medium.com/@galohernandez/vite-react-react-router-dom-the-latest-way-312ee887197e 
function App() {
  return (
    <div className="App"> 
      <NavBar1 />
      <NavBar2 />
      
      <div className='podListami'>
        <HomePage />
      </div>
    
    </div>
  );
}

export default App;

// Links 24.2.2024 ----------------------------------------
// TypeScript in React - COMPLETE Tutorial (Crash Course)
  // https://www.youtube.com/watch?v=TPACABQTHvM 


// Passing Data via Links in React: A Guide to Effective Data Transfer
// https://medium.com/@hammadrao891/passing-data-via-links-in-react-a-guide-to-effective-data-transfer-1e0b030e2a12

// React + .NET Core Finance Project: App Overview 
// https://www.youtube.com/playlist?list=PL82C6-O4XrHcNJd4ejg8pX5fZaIDZmXyn 

//  How I Would Learn React From Scratch In 2023 
// https://www.youtube.com/watch?v=a7YYJVGBy6A&t=111s

// React JC crash course 2024 for beginners
// https://www.youtube.com/watch?v=HVFSgIVXcD4

// Responsive Navbar in React using React Router | Beginner Tutorial 
// https://www.youtube.com/watch?v=17l6AOc8s10 


// --------------------------------------------------------------------------------------
// Otvorene linky

// https://www.youtube.com/watch?v=17l6AOc8s10 
// https://github.com/CodeCompleteYT/react-navbar/blob/main/src/App.jsx

// https://reactrouter.com/en/main/start/tutorial#setup 
// https://blog.logrocket.com/react-router-v6-guide/ 

// https://medium.com/@galohernandez/vite-react-react-router-dom-the-latest-way-312ee887197e 
// https://medium.com/@factwiths/react-router-dom-navigating-your-web-app-2729b1a1575b
// https://baisali-pradhan.medium.com/lets-find-the-path-in-react-b0893ccdcc9f
// https://medium.com/@hammadrao891/passing-data-via-links-in-react-a-guide-to-effective-data-transfer-1e0b030e2a12

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options?utm_source=mozilla&utm_medium=firefox-console-errors&utm_campaign=default 

//  How To Find And Fix Accessibility Issues In React | ReactJS Tutorials | RethinkingUI 
// https://www.youtube.com/watch?v=hsngjoFrntI&pp=ygUib24gY2xpY2sgY2hhbmdpbmcgY29tcG9uZW50cyByZWFjdA%3D%3D 