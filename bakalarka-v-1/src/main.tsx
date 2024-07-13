import React from "react";
import ReactDOM from 'react-dom/client'

import App, {router} from "./App"
import './index.css'

import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)

/* 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage.tsx";
import Hodnotenie from './Hodnotenie.tsx';
import HomePage from './HomePage.tsx';

// https://www.youtube.com/watch?v=G7UzhrNX60o - zatial passe
// https://reactrouter.com/en/main/routers/create-browser-router 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    errorElement: <ErrorPage />,

  },
]);

// https://bobbyhadz.com/blog/typescript-type-htmlelement-null-not-assignable-to-type 
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
); */


