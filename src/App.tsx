import './App.css'
import {type RouteObject, RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Activities from "./pages/Activities.tsx";
import Authors from "./pages/Authors.tsx";
import Books from "./pages/Books.tsx";

export default function App() {

    const myRoutes : RouteObject[] = [
        {
            path: "/",
            element: <Home/>,
            children: [
                {
                    path: "activities",
                    element: <Activities />
                },
                {
                    path: "authors",
                    element: <Authors />
                },
                {
                    path: "books",
                    element: <Books />
                }
            ]
        }
    ]

  return (
      <RouterProvider router={createBrowserRouter(myRoutes)}/>
  )
}