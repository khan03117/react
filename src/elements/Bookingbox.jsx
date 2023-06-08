import React from 'react'

import air1 from '../assets/img/air1.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Bookingbox(props) {
    const navigate = useNavigate();
    const handlenavigate = () => {
        navigate('/flights/review-details')
    }
    return (
        <>
            <div className="w-100 rounded-2 box-shadow-2 text-white bg_gradient p-3 bookFormBox sticky-bottom">
                <div className="row">
                    {
                        [...Array(parseInt(props.travel))].map(() => (
                            <div  className={(props.travel == 1) ? ('col-6') : ('col-4')}>
                                <div className="w-100">
                                    <label htmlFor="">
                                        <span>
                                            Departure 
                                        </span>
                                    </label>

                                </div>
                                <div className="w-100">
                                    <div className="row align-items-center">
                                        <div className="col-8">
                                            <div className="w-100 d-flex align-items-center">
                                                <div className="icon px-1">
                                                    <img src={air1} alt="" className="img-fluid" />
                                                </div>
                                                <div className="desc">
                                                    <div className="d-flex gap-2">
                                                        <span>
                                                            18:00
                                                        </span>
                                                        <span>
                                                            <FontAwesomeIcon icon={faArrowRight} />
                                                        </span>
                                                        <span>
                                                            22:00
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="w-100 text-end price">
                                                ₹ 4,925
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))
                    }



                    <div className={(props.travel == 1) ? ('col-md-6') : ('col-md-4')}>
                        <div className="w-100 text-end">
                            <div className="w-100">
                                <p className="mb-0">
                                    <span>
                                        ₹ 9,676
                                    </span>
                                </p>
                                <button onClick={handlenavigate} className="btn btn-theme box-shadow-2">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bookingbox