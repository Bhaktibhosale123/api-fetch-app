import React from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Navbar (){

    const navigate = useNavigate();

        return (
            // <>This  is a Navbar</>
            <nav className="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: "#54BAB9" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ fontSize: "2rem", backgroundColor: "#E9DAC1", color:"black"}}>BB</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-2 my-3">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-2 my-3">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                            <li className="nav-item mx-2 my-3">
                                <Link className="nav-link active" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-lg btn-outline-dark mx-5" style={{ backgroundColor: "#E9DAC1" }} type="button" onClick={()=>{navigate('/users')}}>Get Users</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
      }
