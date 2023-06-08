import React from 'react'

function Faretypes(props) {  
    return (
        <>
            <div className="row mt-3">
                <div className="col-md-12">
                    <ul className="list-unstyled d-flex flex-wrap   align-items-center gap-1 fare_group ">
                        <li className='bg-white border-0 '>
                            Select A
                            Fare Type:
                        </li>
                        {
                            ['Regular Fares', 'Armed Forces Fares', 'Student Fares', 'Senior Citizen Fares', 'Doctor & Nurse Fares'].map((item, index) => (
                                <li key={index} onClick={() => props.setFareType(item)} className={`wrapFilter  d-flex ${(item == props.FareType) ? ('activeItem') : ('')}`}>
                                    <p>
                                        {item}
                                    </p>
                                </li>
                            ))
                        }

                    </ul>
                </div>

            </div>
        </>
    )
}

export default Faretypes