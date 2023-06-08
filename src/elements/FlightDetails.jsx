import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faInfo, faLongArrowRight } from '@fortawesome/free-solid-svg-icons'
import air1 from '../assets/img/air1.png';

function FlightDetails() {
    return (
        <>
            <div className="flightDetailBk p-4 box-shadow-1 rounded-2 mb-3">
                <div className="w-100 d-flex align-items-center justify-content-between">
                    <div className="w-50">
                        <h4>
                            <span>
                                New Delhi
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faLongArrowRight} />
                            </span>
                            <span>
                                Mumbai
                            </span>
                        </h4>
                        <p class="mb-0">
                            <span class="scheduleDay">Thursday, Sep 7</span>
                            <span class="fontSize14 ms-2">Non Stop · 2h 10m</span>
                        </p>
                    </div>

                    <p>
                        <span className='badge box-shadow-2 fw-400 rounded-0 bg-theme text-uppercase'>
                            CANCELLATION FEES APPLY
                        </span>
                    </p>
                </div>
                <div className="w-100 airdetails">
                    <div className="row">
                        <div className="col-6">
                            <img src={air1} style={{ maxWidth: "150px" }} alt="" className="img-fluid" />
                            <span>
                                Akasha Air
                            </span>
                            <span>
                                QP 1128
                            </span>
                        </div>
                        <div className="col-6">
                            <div className="w-100 text-end">
                                <ul className="d-flex list-unstyled align-items-center justify-content-end position-relative">
                                    <li>
                                        Economy
                                    </li>
                                    <li>
                                        <b>
                                            Saver
                                        </b>
                                    </li>
                                    <li>
                                        <button className="btn rounded-circle  border ">
                                            <FontAwesomeIcon icon={faInfo} />
                                        </button>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-100 bg-light p-2 box-shadow-1 rounded-1 overflow-hidden">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <div className="w-100 flightDetailsinner">
                                <div className="w-100 d-flex gap-4">
                                    <span>
                                        22:45
                                    </span>
                                    <p>
                                        <b>
                                            Mumbai
                                        </b>
                                        <span>
                                            Chhatrapati Shivaji International Airport, Terminal 2
                                        </span>
                                    </p>


                                </div>
                                <p className='mb-0 mt-3 text-center duration'>
                                    2h 31m
                                </p>

                            </div>

                            <div className="w-100 flightDetailsinner">
                                <div className="w-100 d-flex gap-4">
                                    <span>
                                        22:45
                                    </span>
                                    <p>
                                        <b>
                                            Mumbai
                                        </b>
                                        <span>
                                            Chhatrapati Shivaji International Airport, Terminal 2
                                        </span>
                                    </p>


                                </div>

                            </div>
                        </div>
                        <div className="col-6">
                            <div className="w-100">
                                <table className="table table-sm table-borderless">
                                    <tr>
                                        <td>
                                            Baggage
                                        </td>
                                        <td>
                                            Check-in
                                        </td>
                                        <td>
                                            Cabin
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            ADULT
                                        </td>
                                        <td>
                                            15kg <span>
                                                (1 Piece Onlyl)
                                            </span>
                                        </td>
                                        <td>
                                            7kg <span>
                                                (1 Piece Onlyl)
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlightDetails