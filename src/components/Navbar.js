import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div className="sticky-top">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
                    <div className="container-fluid">
                        <a className="navbar-brand text-light" href="/newsapp">News App</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active text-light" aria-current="page" href="/newsapp" to="/newsapp">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/newsapp/about" to="/newsapp/about">About</a>
                                </li>
                                <li className="nav-item dropdown ">
                                    <a className="nav-link dropdown-toggle text-light" href="/newsapp" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/newsapp/sports">Sports</a></li>
                                        <li><a className="dropdown-item" href="/newsapp/business">Business</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/newsapp/entertainment">Entertainment</a></li>
                                        <li><a className="dropdown-item" href="/newsapp" to="/newsapp">General</a></li>
                                        <li><a className="dropdown-item" href="/newsapp/science">Science</a></li>
                                        <li><a className="dropdown-item" href="/newsapp/technology">Technology</a></li>
                                        <li><a className="dropdown-item" href="/newsapp/health">health</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
