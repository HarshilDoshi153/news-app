import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div className="sticky-top">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
                    <div className="container-fluid">
                        <a className="navbar-brand text-light" href="/">News App</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active text-light" aria-current="page" href="/" to="/">House</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/about" to="/about">About</a>
                                </li>
                                <li className="nav-item dropdown ">
                                    <a className="nav-link dropdown-toggle text-light" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/sports">Sports</a></li>
                                        <li><a className="dropdown-item" href="/business">Business</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/entertainment">Entertainment</a></li>
                                        <li><a className="dropdown-item" href="/" to="/">General</a></li>
                                        <li><a className="dropdown-item" href="/science">Science</a></li>
                                        <li><a className="dropdown-item" href="/technology">Technology</a></li>
                                        <li><a className="dropdown-item" href="/health">health</a></li>
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
