import React from 'react'
import air1 from '../assets/img/air1.png';
function CancellationPolicyBox() {
    return (
        <>
            <div className="w-100 mt-3 bg-light p-3 rounded-2 overflow-hidden cancellationPolicy">

                <div className="row gy-3">
                    <div className="col-6">
                        <div className="w-100">
                            <h4>
                                Cancellation Refund Policy
                            </h4>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="w-100 text-end">
                            <a href="#09">
                                View Policy
                            </a>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="w-100">
                            <img src={air1} alt="" className="img-fluid" />
                            <span className='ms-2'>
                                <b>
                                    DEL-BOM
                                </b>
                            </span>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="w-100 heading">
                            Cancellation Penalty :
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="w-100">
                            <div class="makeFlex pb-2 d-flex justify-content-around">
                                <span class="cancPriceInfo fontSize16">₹ 0</span>
                                <span class="cancPriceInfo fontSize16">₹ 3,900</span>
                                <span class="cancPriceInfo fontSize16">₹ 13,277</span>
                            </div>
                            <div className="lineprogress rounded-pill"></div>

                            <div class="cancTimeline pt-2 d-flex w-100 justify-content-between align-items-center">
                                <div class="cancTimeNode">
                                    <p class="blackFont">Now</p>
                                </div>
                                <div class="cancTimeNode">
                                    <p class="blackFont">6 Jun</p>
                                    <p class="fontSize12 fw-bold">23:20</p>
                                </div>
                                <div class="cancTimeNode">
                                    <p class="blackFont">7 Jun</p>
                                    <p class="fontSize12 fw-bold">21:20</p>
                                </div>
                                <div class="cancTimeNode">
                                    <p class="blackFont">7 Jun</p>
                                    <p class="fontSize12 fw-bold">23:20</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </>
    )
}

export default CancellationPolicyBox