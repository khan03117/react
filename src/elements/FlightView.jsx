
import React from 'react'


function FlightView(props) {
    return (
        <>
            <div className="w-100  flightviewbox mb-4 box-shadow-2 rounded-2 overflow-hidden ">
                <div className="flightviewbox_header p-2 border-bottom">
                    <span className="badge bg-theme">
                        Deal
                    </span>
                    <span>
                        GET upto 2000 off. Use code <b>FESTIVAL20</b>. TnC Apply
                    </span>
                </div>
                <div className="flightviewbox_body p-3">
                    <div className="row">
                        <div className="col-2">
                            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                                <img src={props.logo} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="w-100">

                                <div className="row mb-1">
                                    <div className="col-4">
                                        <h5>
                                            14:00
                                        </h5>
                                        <p className="mb-0">
                                            DEL
                                        </p>
                                    </div>
                                    <div className="col-md-4 linebox">
                                        <div className="text-center">
                                            <span>
                                                2h
                                            </span>
                                        </div>
                                        <div className="line"></div>
                                        <div className="text-center">
                                            <span>
                                                Direct
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <h5>
                                            18:00
                                        </h5>
                                        <p className="mb-0">
                                            MUB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="w-100 d-flex align-items-center justify-content-end">
                                <input type="radio" onClick={() => props.openbookmodel()} name="priceFlight" id={`flight${props.index}`} />
                                <label className='ms-2' htmlFor={`flight${props.index}`}>
                                    <span >
                                        ₹ 4,754
                                    </span>
                                </label>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlightView