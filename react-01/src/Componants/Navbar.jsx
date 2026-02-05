import React from 'react'
import "./Navbar.css"

import logo from '../images/wix_logo.png'

function Navbar() {
    return (
        <div className='main'>

            <div className="navbar-div">

                <div className="nav">

                    <img className='logo' src={logo} alt="logo" />

                    <select id="dropdown" className='dropdown' >
                        <option value="">Product</option>
                        <option value="">one</option>
                        <option value="">two</option>
                    </select>

                    <select className='dropdown' >
                        <option value="">Soluations</option>
                        <option value="">one</option>
                        <option value="">two</option>
                    </select>

                    <select className='dropdown' >
                        <option value="">Resources</option>
                        <option value="">one</option>
                        <option value="">two</option>
                    </select>

                    <span className="bar">|</span>
                    <div className="side-nav">
                        <p className="nav-h1">Wixel</p>
                        <p className="nav-h1">Wix-studio</p>
                        <p className="nav-h1">Enterprise</p>
                    </div>

                </div>

                <div className="global-logo">
                    <h1 className="global">🌐</h1>
                </div>



            </div>


            <div className="navbar-div-2">

                <div className="domain-div">
                    <p className="text-domain">Domains</p>
                </div>

                <div className="nav-second">

                        <p className="buy"> buy domains </p>

                        <select id="dropdown">
                            <option> Find Domains </option>
                            <option> Extensions </option>
                            <option> Tools </option>
                            <option> Learn </option>
                        </select>

                        <select id="dropdown">
                            <option> Extensions</option>
                            <option> Find Domains</option>
                            <option> Tools </option>
                            <option> Learn </option>
                        </select>

                        <select id="dropdown">
                            <option>Tools </option>
                            <option> Extensions </option>
                            <option> Tools </option>
                            <option> Learn </option>
                        </select>

                        <select id="dropdown">
                            <option> Learn </option>
                            <option> Extensions </option>
                            <option> Tools </option>
                            <option> Learn </option>
                        </select>

                        <button className="create">Create Site </button>

                </div>

            </div>




        </div>
    )
}

export default Navbar