import React from 'react'
import logo from '../assets/img/logo.png';




function Mynavigation() {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#0">
                        <img src={logo} alt="" className="img-fluid" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#0">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#0">Flights</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#0">Trains</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#0">Packages</a>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#0" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#0">Action</a></li>
                                    <li><a className="dropdown-item" href="#0">Another action</a></li>

                                    <li><a className="dropdown-item" href="#0">Something else here</a></li>
                                </ul>
                            </li> */}
                            <li className="nav-item">
                                <a href="#09" className=" btn  btn_navber">
                                    Become a Partner
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Mynavigation