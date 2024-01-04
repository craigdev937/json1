import React from "react";
import "./App.css";
import Sym from "@public/Sympathy.webp";

export const App = () => {
    return (
        <React.Fragment>
            <img 
                src={Sym} alt="Sympathy" 
                height="500px" width="auto"
            />
        </React.Fragment>
    );
};

