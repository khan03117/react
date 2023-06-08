import React from 'react'

function FareSummary() {
    return (
        <>
            <div className="card p-0 border-0 fareGroupDetails">
                <div className="card-header border-0">
                    <h4>
                        Fare Summary
                    </h4>
                </div>
                <div className="card-body border-0 p-0">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#fareone" aria-expanded="true" aria-controls="fareone">
                                    <div className="w-100 d-flex justify-content-between">
                                        <span>
                                            Base Fare
                                        </span>
                                        <span>
                                            ₹ 50,900
                                        </span>
                                    </div>
                                </button>
                            </h2>
                            <div id="fareone" class="accordion-collapse collapse show" data-bs-parent="#accordionExample1">
                                <div class="accordion-body">
                                    <table className="table table-sm table-borderless">
                                        <tr>
                                            <td>
                                                Adult(s) (<span>1</span> X ₹ 24,275)
                                            </td>
                                            <td className='text-end'>

                                                ₹ 50,900
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Adult(s) (<span>1</span> X ₹ 24,275)
                                            </td>
                                            <td className='text-end'>

                                                ₹ 50,900
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Adult(s) (<span>1</span> X ₹ 24,275)
                                            </td>
                                            <td className='text-end'>

                                                ₹ 50,900
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#fareTwo" aria-expanded="true" aria-controls="fareTwo">
                                    <div className="w-100 d-flex justify-content-between">
                                        <span>
                                            Taxes and Surcharges
                                        </span>
                                        <span>
                                            ₹ 50,900
                                        </span>
                                    </div>
                                </button>
                            </h2>
                            <div id="fareTwo" class="accordion-collapse collapse show" data-bs-parent="#accordionExample2">
                                <div class="accordion-body">
                                    <p className='d-flex justify-content-between'>
                                        <span>
                                            Airline Taxes and Surcharges
                                        </span>
                                        <span>
                                            ₹ 5,426
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#fareThree" aria-expanded="true" aria-controls="fareThree">
                                    Other Services
                                </button>
                            </h2>
                            <div id="fareThree" class="accordion-collapse collapse show" data-bs-parent="#accordionExample3">
                                <div class="accordion-body">
                                    <p className='d-flex justify-content-between'>
                                        <span>
                                            Charity

                                        </span>
                                        <span>
                                            ₹ 10
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer border-0">
                    <p className="d-flex justify-content-between t-16 fw-600">
                        <span>
                            Total Amount
                        </span>
                        <span>
                            ₹ 56,326
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default FareSummary