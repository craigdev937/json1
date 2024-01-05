import React from "react";
import  { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { Albums } from "../containers/Albums";
import { Comments } from "../containers/Comments";
import { Users } from "../containers/Users";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Albums />,
                errorElement: <NotFound />
            },
            {
                path: "/comments",
                element: <Comments />,
                errorElement: <NotFound />
            },
            {
                path: "/users",
                element: <Users />,
                errorElement: <NotFound />
            }
        ]
    }
]);

export const Main = () => {
    return (
        <React.Fragment>
            <RouterProvider router={Router} />
        </React.Fragment>
    );
};


