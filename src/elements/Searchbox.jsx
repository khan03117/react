import { faBuilding, faBus, faGlobe, faHotel, faPassport, faPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import BookMyFlight from './BookMyFlight'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Searchbox() {
    const [searchBox, setSearchBox] = useState(1);
    const navigate = useNavigate();
    const handleflightsearch = () => {
        navigate('/flights/search')
    }
    return (
        <>
            <section id="theme_search_form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="theme_search_form_area w-100 position-relative">
                                <div className="theme_search_form_tabbtn">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className={`nav-link ${(searchBox == 1) ? ('active') : ('')}`} onClick={() => setSearchBox(1)} type="button" role="tab" aria-controls="flights" aria-selected="true">
                                                <FontAwesomeIcon icon={faPlane} />

                                                Flights</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className={`nav-link ${(searchBox == 2) ? ('active') : ('')}`} onClick={() => setSearchBox(2)} type="button" role="tab" aria-controls="tours" aria-selected="false">
                                                <FontAwesomeIcon icon={faGlobe} />
                                                Tours</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className={`nav-link ${(searchBox == 3) ? ('active') : ('')}`} onClick={() => setSearchBox(3)} type="button" role="tab" aria-controls="hotels" aria-selected="false">
                                                <FontAwesomeIcon icon={faHotel} />
                                                Hotels</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className={`nav-link ${(searchBox == 4) ? ('active') : ('')}`} onClick={() => setSearchBox(4)} type="button" role="tab" aria-controls="visa" aria-selected="false">
                                                <FontAwesomeIcon icon={faPassport} />
                                                Visa</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className={`nav-link ${(searchBox == 5) ? ('active') : ('')}`} onClick={() => setSearchBox(5)} type="button" role="tab" aria-controls="apartments" aria-selected="false">
                                                <FontAwesomeIcon icon={faBuilding} />
                                                Apartments</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className={`nav-link ${(searchBox == 6) ? ('active') : ('')}`} onClick={() => setSearchBox(6)} type="button" role="tab" aria-controls="bus" aria-selected="false">
                                                <FontAwesomeIcon icon={faBus} />
                                                Bus</button>
                                        </li>


                                    </ul>
                                </div>
                                <div className="tab-content" id="myTabContent">

                                    {
                                        (searchBox == 1) ? (<BookMyFlight />) : ('')
                                    }

                                </div>
                                <button onClick={handleflightsearch}  className="btn btn_gradient searchBtn">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Searchbox