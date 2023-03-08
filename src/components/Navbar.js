/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg  bg-${props.mode} navbar-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand nav-link" href="/">
                        TextIng
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">
                                    Home{' '}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link active" aria-current="page">
                                    About
                                </Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form> */}

                        <div className="form-check form-switch text-light">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                            <label className={`text-${props.mode === 'light' ? 'dark' : 'light'} form-check-label`} htmlFor="flexSwitchCheckDefault">
                                {props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
                            </label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
