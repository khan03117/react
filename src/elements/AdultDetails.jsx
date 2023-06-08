import React from 'react'

function AdultDetails() {
    return (
        <>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button p-3  border-bottom" type="button" data-bs-toggle="collapse" data-bs-target="#adultCollapse" aria-expanded="true" aria-controls="adultCollapse">
                        ADULT (12 yrs+)
                    </button>
                </h2>
                <div id="adultCollapse" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body p-3">
                        <div className="w-100 notificationbar">
                            <small>
                                Important: Enter your name as it is mentioned on your passport. Passport should be valid for minimum 6 months from the date of travel.
                            </small>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="w-100">
                                        <label htmlFor="">
                                            Enter First & Middle Name
                                        </label>
                                        <input type="text" name="fmname" id="" className="form-control form-control-sm" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="w-100">
                                        <label htmlFor="">
                                            Last Name
                                        </label>
                                        <input type="text" name="fmname" id="" className="form-control form-control-sm" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="w-100">
                                        <label htmlFor="">
                                            Gender
                                        </label>
                                        <div className="input-group">
                                            <ul className="d-flex gap-4 list-unstyled p-0 m-0">
                                                <li >
                                                    <input type="radio" name="gender" className='me-2' id="male" />
                                                    <label role="button" htmlFor="male">Male</label>
                                                </li>
                                                <li >
                                                    <input type="radio" name="gender" className='me-2' id="female" />
                                                    <label role="button" htmlFor="female">Female</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default AdultDetails