import 'react-perfect-scrollbar/dist/css/styles.css';

import PerfectScrollbar from 'react-perfect-scrollbar'
import React from 'react'
import Modal from 'react-bootstrap/Modal';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEdit } from '@fortawesome/free-solid-svg-icons';
function ReviewPopup(props) {

    return (
        <>
            <Modal
                centered
                show={props.show}
                onHide={props.handleClose}
                backdrop="static"
                keyboard={false}
                size='md'
            >
                <Modal.Header closeButton>
                    <Modal.Title className='model_title'>Review Details</Modal.Title>
                </Modal.Header>
                <Modal.Body className='pt-1'>
                    <div className="w-100 mb-3 bg-white">
                        <small className='t-10'>
                            Please ensure that the spelling of your name and other details match with your passport, as these cannot be changed later. Errors might lead to cancellation penalties.
                        </small>
                    </div>
                    <PerfectScrollbar style={{ maxHeight: "350px", overflowY: "auto" }} >
                        <div className="w-100 bg-white p-4 ps-0 pt-0 d-flex flex-column gap-4" id="reviewPassengers">
                            <div className="card   box-shadow-2">
                                <div className="card-body p-3">
                                    <h4>
                                        ADULT1
                                    </h4>
                                    <table className="table table-sm mb-0 table-borderless">
                                        <tr>
                                            <td>
                                                Given Name
                                            </td>
                                            <td>
                                                James
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Surname
                                            </td>
                                            <td>
                                                Thomas
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Gender
                                            </td>
                                            <td>
                                                Male
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className="card  box-shadow-2">
                                <div className="card-body p-3">
                                    <h4>
                                        Childrens
                                    </h4>
                                    <table className="table table-sm mb-0 table-borderless">
                                        <tr>
                                            <td>
                                                Given Name
                                            </td>
                                            <td>
                                                James
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Surname
                                            </td>
                                            <td>
                                                Thomas
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Gender
                                            </td>
                                            <td>
                                                Male
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className="card  box-shadow-2">
                                <div className="card-body p-3">
                                    <h4>
                                        INFANTS
                                    </h4>
                                    <table className="table table-sm mb-0 table-borderless">
                                        <tr>
                                            <td>
                                                Given Name
                                            </td>
                                            <td>
                                                James
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Surname
                                            </td>
                                            <td>
                                                Thomas
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Gender
                                            </td>
                                            <td>
                                                Male
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </PerfectScrollbar>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn text-theme border-0 shadow-none">
                        <FontAwesomeIcon icon={faEdit} /> Edit
                    </button>
                    <button className='btn btn-theme' onClick={() => props.handlefirststep(true)}>
                        <FontAwesomeIcon icon={faCheckCircle} /> Confirm
                    </button>
                </Modal.Footer>


            </Modal>
        </>
    )
}

export default ReviewPopup