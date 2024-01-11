import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useContextApi } from '../../context/ContextApi';

const FormateurHeader = () => {
    const { logout } = useContextApi();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container py-1">
                <NavLink className="navbar-brand" to={'/'}>
                    My app
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-3">
                            <NavLink className="nav-link" to={'/formateur'}>
                            Accueil
                            </NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink className="nav-link" to={'/formateur/table-formation'}>
                                Table Formation
                            </NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <button className="btn btn-danger" onClick={() => logout()}>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default FormateurHeader;
