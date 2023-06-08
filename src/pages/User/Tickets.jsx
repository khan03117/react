import { faPlaneArrival, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import air1 from '../../assets/img/air1.png'

function Tickets() {
    return (
        <>
            <div className="w-100">
                <table className="table  t-14">
                    <thead>
                        <tr>
                            <th>
                                Sr No.
                            </th>
                            <th>
                                Flight
                            </th>
                            <th>
                                Origin
                            </th>
                            <th>
                                Destination
                            </th>
                           


                            <th>
                                Booking Number
                            </th>
                            <th>
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [1, 2, 3, 4].map((item, index) => (
                                <tr>
                                    <td>
                                        {item}
                                    </td>
                                    <td>
                                        <div>
                                            <img src={air1} alt="" className="img-fluid" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="origin">
                                            <p className="text-secondary t-14 m-0 d-flex justify-content-between align-items-center">
                                                <span className="d-flex justify-content-between">
                                                    <FontAwesomeIcon icon={faPlaneDeparture} />
                                                    DEL
                                                </span>
                                                <span>
                                                  12 Jan 2023  11:50 PM
                                                </span>
                                            </p>
                                            <p className='mb-0 t-14'>
                                                Indira Gandhi Internationl Airport, New Delhi 110001
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="origin">
                                            <p className="text-secondary t-14 m-0 d-flex justify-content-between align-items-center">
                                                <span className="d-flex justify-content-between">
                                                    <FontAwesomeIcon icon={faPlaneArrival} />
                                                    BXN
                                                </span>
                                                <span>
                                                  13 Jan 2023  04:50 AM
                                                </span>
                                            </p>
                                            <p className='mb-0 t-14'>
                                                BKN Internationl Airport, Benguluru, Karntaka 400001
                                            </p>
                                        </div>
                                    </td>
                                  
                                    <td>
                                   <div className="t-14">
                                   BXB0001-01110-1123
                                    </div> 
                                    </td>
                                    <td>
                                        <span className="badge bg-theme">
                                            Completed
                                        </span>
                                    </td>

                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Tickets