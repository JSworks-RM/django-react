import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">Lead Managers</a>
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}

export default Header
