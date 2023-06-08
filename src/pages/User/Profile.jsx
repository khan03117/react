import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { ProgressBar } from 'react-bootstrap'

function Profile() {
    return (
        <>
            <div className="w-100 bg-white box-shadow-2 rounded-3 mb-4 p-3 overflow-hidden position-relative">
                <div className="col-md-6 d-block">
                    <div className="d-flex t-14 fw-600 mb-3 justify-content-between">
                        <span>
                            Complete your profile
                        </span>
                        <span>
                            50%
                        </span>

                    </div>
                    <ProgressBar now={50} />

                </div>
                <div className="w-100">
                    <p className="mb-0 t-14 text-secondary">
                        Get the best out of MakeMyTrip by adding the remaining details!
                    </p>
                </div>
                <div className="w-100 mt-3">
                    <ul className="d-flex align-items-center justify-content-between gap-3 p-0 m-0 list-unstyled">


                        {
                            ['Verify Email Id', 'Verify Mobile Number', 'Complete Basic Info'].map((item, index) => (
                                <li className='w-100'>
                                    <button className="btn bg-light border-0 w-100  box-shadow-2 text-start">
                                        <FontAwesomeIcon icon={faPlusCircle} /> {item}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
            <div className="card profileData">
                <div className="card-header bg-white position-relative">
                    <h4>
                        Profile
                    </h4>
                    <p>
                        Basic info, for a faster booking experience
                    </p>
                    <button className="btn btn-theme position-absolute end-0 top-0 me-2 mt-2">
                        <FontAwesomeIcon icon={faEdit} /> Edit
                    </button>

                </div>
                <div className="card-body px-4">
                    <div className="w-100 table-responsive">
                        <table className="table mb-0 ">
                            <tbody>
                                {
                                    ['Name', 'Email', 'Mobile', 'Gender', 'Marital Status', 'Birthday', 'Address', 'Pincode', 'State'].map((item, index) => (
                                        <tr>
                                            <td>
                                                {item}
                                            </td>
                                            <td>
                                                <button className="btn text-theme fw-600 border-0 shadow-none">
                                                    <FontAwesomeIcon icon={faPlus} /> Add
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="card profileData">
                <div className="card-header bg-white position-relative">
                    <h4>
                        Login Details
                    </h4>



                </div>
                <div className="card-body px-4">
                    <div className="w-100 table-responsive">
                        <table className="table mb-0 ">
                            <tbody>
                                {
                                    ['Username', 'Mobile', 'Password'].map((item, index) => (
                                        <tr>
                                            <td>
                                                {item}
                                            </td>
                                            <td>
                                                <button className="btn text-theme fw-600 border-0 shadow-none">
                                                    <FontAwesomeIcon icon={faPlus} /> Add
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="card profileData">
                <div className="card-header bg-white position-relative">
                    <h4>
                        Save Traveller(s)
                    </h4>
                </div>
                <div className="card-body px-4">
                    <div className="w-100 table-responsive">
                        <table className="table mb-0 ">
                            <tbody>
                                {
                                    ['Adult', 'Children', 'Infant'].map((item, index) => (
                                        <tr>
                                            <td>
                                                {item}
                                            </td>
                                            <td>
                                                <button className="btn text-theme fw-600 border-0 shadow-none">
                                                    <FontAwesomeIcon icon={faPlus} /> Add
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile