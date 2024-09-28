import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "./Components/Home.jsx";
import Search from "./Components/Search.jsx";
import Lists from "./Components/Lists.jsx";
import NotFound from "./Components/NotFound.jsx";

import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "search", element: <Search /> },
            { path: "lists", element: <Lists /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
