import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <nav className="navbar">
                <Link 
                    className="navbar__logo" 
                    to={"/"}
                >
                    <h3><span>JSON</span></h3>
                </Link>
                <aside 
                    className="navbar__icon"
                    onClick={handleClick}
                >
                    {open ? <FiX /> : <FiMenu />}
                </aside>
                <ul className={open ? 
                    "navbar__links active" : 
                    "navbar__links"}
                >
                    <li className="navbar__item">
                        <Link
                            to={"/"}
                            className="navbar__link"
                            onClick={closeMenu}
                        >
                            Albums
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link
                            to={"/comments"}
                            className="navbar__link"
                            onClick={closeMenu}
                        >
                            Comments
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link
                            to={"/users"}
                            className="navbar__link"
                            onClick={closeMenu}
                        >
                            Users
                        </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </React.Fragment>
    );
};


