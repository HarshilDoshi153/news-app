import React, { Component } from 'react';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    handleSearchSubmit = (event) => {
        event.preventDefault();
        this.props.onSearch(this.state.searchTerm.toLowerCase()); // Pass the search term to the parent
    };
    render() {
        return (
            <div className="sticky-top">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
                    <div className="container-fluid">
                        <a className="navbar-brand text-light" href="/newsapp">News 24/7</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active text-light" aria-current="page" href="/" to="/">Home</a>
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
                                        <li><a className="dropdown-item" href="/" to="/newsapp">General</a></li>
                                        <li><a className="dropdown-item" href="/science">Science</a></li>
                                        <li><a className="dropdown-item" href="/technology">Technology</a></li>
                                        <li><a className="dropdown-item" href="/health">health</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search" onSubmit={this.handleSearchSubmit}>
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={this.state.searchTerm} onChange={this.handleInputChange}/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
