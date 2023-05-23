import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'

//CONFIG ROUTER
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home/index";
import Pokedex from "../pages/Pokedex/index"
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/pokedex",
        element: <Pokedex/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
