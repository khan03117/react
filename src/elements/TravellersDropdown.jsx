import React from 'react'


function TravellersDropdown(props) {
   
    return (
        <>
            <div className="w-100 mb-3">
                <label htmlFor="">
                    Adults(12Y+)
                    <small className="d-block">
                        on the date of travel
                    </small>
                </label>
                <ul className="p-0 m-0 d-flex list-unstyled  selectdigits rounded-2">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                        <li role='button' onClick={() => props.setAdults(item)} className={(item === props.adults) ? ('selected') : ('')}>
                            <span>
                                {item}
                            </span>
                        </li>
                    ))}

                </ul>
            </div>
            <div className=" row mb-3">
                <div className="col-md-6">
                    <div className="w-100">
                        <label htmlFor="">
                            CHILDREN (2y - 12y )
                            <small className="d-block">
                                on the date of travel
                            </small>
                        </label>
                        <ul className="p-0 m-0 d-flex list-unstyled  selectdigits rounded-2">
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                                <li role='button' onClick={() => props.setChildren(item)} className={(item === props.children) ? ('selected') : ('')}>
                                    <span>
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="w-100">
                        <label htmlFor="">
                            INFANTS (below 2y)
                            <small className="d-block">
                                on the date of travel
                            </small>
                        </label>
                        <ul className="p-0 m-0 d-flex list-unstyled  selectdigits rounded-2">
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                                <li role='button' onClick={() => props.setInfant(item)} className={(index === props.infant) ? ('selected') : ('')}>
                                    <span>
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-100 mb-3">
                <label htmlFor="">
                    CHOOSE TRAVEL CLASS
                    <small className="d-block">
                        on the date of travel
                    </small>
                </label>
                <ul className="p-0 m-0 d-flex flex-wrap list-unstyled  select_travel_class rounded-2">
                    {['Economy/Premium Economy', 'Premium Economy', 'Business', 'First Class'].map((item, index) => (
                        <li role='button' onClick={() => props.setTravellClass(item)} className={(item === props.travellClass) ? ('selected') : ('')}>
                            <span>
                                {item}
                            </span>
                        </li>
                    ))}

                </ul>
            </div>
            <div className="w-100 text-end">
                <button className="btn btn-theme" onClick={props.handleClose}>Apply</button>
            </div>
        </>
    )
}

export default TravellersDropdown