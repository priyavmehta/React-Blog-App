import React, { Component} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="#"><i>BlogPace</i></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <Link class="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item active">
                    <Link class="nav-link" to="/login">Login</Link>
                </li>
                <li class="nav-item active">
                    <Link class="nav-link" to="/register">Register</Link>
                </li>
                </ul>
            </div>
        </nav>
    )
    
}

export default Navbar;