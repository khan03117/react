import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import booked from '../assets/img/booked.png'
import airback from '../assets/img/plane-tail.png'
import frontplane from '../assets/img/frontplane.png'
function SeatMap() {
    const selectMySeat = (e) => {

        e.target.classList.add('bg-theme')
        e.target.classList.add('text-white')
        e.target.innerText = '✓'
    }
    return (
        <>
            <div id="seatMapGroup" class={`accordion-collapse collapse show`} data-bs-parent="#accordionExample">
                <div class="accordion-body bg-white p-3">
                    <div className="w-100 notificationBar">
                        <small>
                            Less than 48 hours left to departure. Pre-book your preferred seat now before they run out!
                        </small>
                    </div>
                    <PerfectScrollbar style={{ maxHeight: "150vh", overflowY: "auto" }}>
                        <div className="w-100 seatMap sticky-top">
                            <ul className="d-flex gap-2 m-0 p-0 list-unstyled">
                                <li className='fw-600 t-14'>
                                    Bengluru
                                </li>
                                <li>
                                    &#10230;
                                </li>
                                <li className='fw-600 t-14'>
                                    Bengkok
                                </li>
                            </ul>
                            <p className="t-10 text-secondary mb-0">
                                2 of 2 Seat(s) Selected
                            </p>
                        </div>
                        <div className="table-responsive">
                            <div className="w-75 bg-light py-5">
                                <div className="w-100">
                                    <img src={frontplane} alt="" className="img-flid frontPlane" />
                                </div>
                                <table className="table bg-white mb-0 mx-auto table-borderless table-sm planeFigure t-11" style={{ maxWidth: "300px" }}>
                                    <tr>
                                        <td>
                                            <div></div>
                                        </td>
                                        <td >
                                            <div>
                                                A
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                B
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                C
                                            </div>
                                        </td>

                                        <td>
                                            <div>

                                            </div>
                                        </td>

                                        <td>
                                            <div>
                                                D
                                            </div>

                                        </td>
                                        <td>
                                            <div>
                                                E
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                F
                                            </div>
                                        </td>

                                    </tr>
                                    {
                                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1].map((elm, index) => (
                                            <tr>
                                                <td>
                                                    <div>
                                                        {index + 1}
                                                    </div>

                                                </td>
                                                <td>
                                                    <div>
                                                        <img src={booked} alt="" className="img-fluid" />
                                                    </div>

                                                </td>
                                                <td>
                                                    <div className="available" onClick={(e) => selectMySeat(e)}>
                                                        ₹ 0
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <img src={booked} alt="" className="img-fluid" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div></div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <img src={booked} alt="" className="img-fluid" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="available" onClick={(e) => selectMySeat(e)}>
                                                        ₹ 0
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <img src={booked} alt="" className="img-fluid" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        {index + 1}
                                                    </div>
                                                </td>
                                            </tr>

                                        ))
                                    }
                                </table>
                                <div className="w-100">
                                    <img src={airback} alt="" className="img-flid planeBack" />
                                </div>
                            </div>
                        </div>
                    </PerfectScrollbar >




                </div >
            </div >
        </>
    )
}

export default SeatMap