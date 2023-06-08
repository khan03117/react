import React, { useState } from 'react'
import Myheader from '../elements/Myheader'
import PageBanner from '../elements/PageBanner'
import { Col, Container, Row } from 'react-bootstrap'

import seat from '../assets/img/seat.png';
import Myfooter from '../elements/Myfooter'
import FlightDetails from '../elements/FlightDetails'
import CancellationPolicyBox from '../elements/CancellationPolicyBox'
import ImportantInfor from '../elements/ImportantInfor'
import AdultDetails from '../elements/AdultDetails'
import PassengersDetails from '../elements/PassengersDetails'
import InfantDetails from '../elements/InfantDetails'
import ReviewPopup from '../elements/ReviewPopup'



import 'react-perfect-scrollbar/dist/css/styles.css';
import SeatMap from '../elements/SeatMap';
import TermsConditionsBook from '../elements/TermsConditionsBook';
import FareSummary from '../elements/FareSummary';
import Promocodes from '../elements/Promocodes';
import 'react-perfect-scrollbar/dist/css/styles.css';

import PerfectScrollbar from 'react-perfect-scrollbar'



function ReviewDetails() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [firstStep, setFirstStep] = useState(false);


    const handlefirststep = (val) => {

        setFirstStep(val);
        setShow(false);


    }

    return (
        <>
            <Myheader />
            <PageBanner />

            <section id="pageBreadCrumb">
                <Container>
                    <Row>
                        <Col md="6">
                            <div className="w-100">
                                <h4 className="mb-0">
                                    Complete your booking
                                </h4>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="w-100">
                                <div className="w-100">
                                    <ul class="pageLinksUl list-unstyled d-flex gap-2">
                                        <li><span class="">Flights Summary</span></li>
                                        <li><span class="">Travel Insurance</span></li>
                                        <li><span class="">Traveller Details</span></li>
                                        <li><span class="">Seats &amp; Meals</span></li>
                                        <li><span class="">Add-ons</span></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='bg-light py-5'>
                <Container>
                    <Row className='position-relative'>
                        <Col md="8">
                            <div class="accordion-item ">
                                {
                                    (firstStep === true) ? (<h2 class="accordion-header">
                                        <button onClick={() => handlefirststep(false)} class="accordion-button firstStepCollapsebtn p-2 bg-white flex-column" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGroupFirstStep" aria-expanded="true" aria-controls="collapseGroupFirstStep">
                                            <div className="w-100 mb-2">
                                                <h4>
                                                    Flight Summary
                                                </h4>
                                                <p>
                                                    <span>
                                                        New Delhi
                                                    </span>
                                                    <span>
                                                        →
                                                    </span>
                                                    <span>
                                                        Bangkok
                                                    </span>
                                                    <span>
                                                        Wednesday, Jun 7
                                                    </span>
                                                    <span>
                                                        · 1 Stop · 12h 5m
                                                    </span>

                                                </p>
                                            </div>
                                            <div className="w-100 mb-0">
                                                <h4>
                                                    Passegers Summary
                                                </h4>
                                                <p>
                                                    <span>
                                                        James
                                                    </span>
                                                    <span>
                                                        Abharam
                                                    </span>
                                                    <span>
                                                        Isac
                                                    </span>
                                                </p>
                                            </div>


                                        </button>
                                    </h2>) : ('')
                                }

                                <div id="collapseGroupFirstStep" class={`accordion-collapse collapse ${(firstStep == false) ? ('show') : ('')} `} data-bs-parent="#accordionExampleFirstStep">
                                    <div class="accordion-body p-0 m-0">
                                        <div className="w-100 bg-white p-3 box-shadow-2  ">
                                            <FlightDetails />
                                            <FlightDetails />
                                            <CancellationPolicyBox />
                                            <ImportantInfor />

                                            <div className="w-100 bg-white box-shadow-2 passengerDetailsGroup mt-3 rounded-2">
                                                <AdultDetails />
                                                <div className="accordian-footer p-2  border-top">
                                                    <button className="btn text-theme  text-start shadow-none border-0">
                                                        +Add More Adult
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="w-100 bg-white box-shadow-2 passengerDetailsGroup mt-3 rounded-2">
                                                <PassengersDetails />
                                                <div className="accordian-footer p-2  border-top">
                                                    <button className="btn text-theme  text-start shadow-none border-0">
                                                        +Add More Children
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="w-100 bg-white box-shadow-2 passengerDetailsGroup mt-3 rounded-2">
                                                <InfantDetails />
                                                <div className="accordian-footer p-2  border-top">
                                                    <button className="btn text-theme  text-start shadow-none border-0">
                                                        +Add More Infant
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="w-100 mt-3   bookingDetailsMobile">
                                                <div className="card">
                                                    <div className="card-header bg-white">
                                                        <h4 className='mb-0'>
                                                            Booking details will be sent to
                                                        </h4>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <label htmlFor="">
                                                                    Select Country Code
                                                                </label>
                                                                <select name="" id="" className="form-select form-select-sm">
                                                                    <option value="+91">India +91</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="w-100">
                                                                    <label htmlFor="">
                                                                        Enter Mobile
                                                                    </label>
                                                                    <input type="text" name="" id="" className="form-control form-control-sm" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="w-100">
                                                                    <label htmlFor="">
                                                                        Enter Email
                                                                    </label>
                                                                    <input type="email" name="" id="" className="form-control form-control-sm" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-100 mt-3   bookingDetailsMobile">
                                                <div className="card">
                                                    <div className="card-header bg-white">
                                                        <h4 className='mb-0'>
                                                            I have GST Number <span>
                                                                (Optional)
                                                            </span>
                                                        </h4>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="row">

                                                            <div className="col-md-4">
                                                                <div className="w-100">
                                                                    <label htmlFor="">
                                                                        Company Name
                                                                    </label>
                                                                    <input type="text" name="" id="" className="form-control form-control-sm" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="w-100">
                                                                    <label htmlFor="">
                                                                        Registration Number
                                                                    </label>
                                                                    <input type="email" name="" id="" className="form-control form-control-sm" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-100 mt-3   bookingDetailsMobile">
                                                <div className="card">
                                                    <div className="card-header bg-white">
                                                        <h4 className='mb-0'>
                                                            Your pincode and state
                                                            <small>
                                                                (Required for GST purpose on your tax invoice.You can edit this anytime later in your profile section. )
                                                            </small>

                                                        </h4>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <label htmlFor="">
                                                                    Pincode
                                                                </label>
                                                                <select name="" id="" className="form-select form-select-sm">
                                                                    <option value="+91">110001</option>
                                                                </select>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <div className="w-100">
                                                                    <label htmlFor="">
                                                                        State
                                                                    </label>
                                                                    <select name="" id="" className="form-select form-select-sm">
                                                                        <option value="+91">New Delhi</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="w-100">
                                                                    <label htmlFor="">
                                                                        Address
                                                                    </label>
                                                                    <input type="text" name="" id="" className="form-control form-control-sm" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 mt-3">
                                                                <div className="w-100 p-1 d-flex align-items-center">
                                                                    <input type="checkbox" name="" id="save_billing_details" className='me-2' />
                                                                    <label htmlFor="save_billing_details">
                                                                        Confirm and save billing details to your profile
                                                                    </label>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-100 mt-3">
                                                <input type="submit" value="Continue" onClick={handleShow} className="btn btn_gradient text-uppercase" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mt-3">
                                <h2 class="accordion-header">
                                    <button class="accordion-button  bg-white p-2 stepTwoBtn" type="button" data-bs-toggle="collapse" data-bs-target="#seatMapGroup" aria-expanded="false" aria-controls="seatMapGroup">
                                        <span className="seatIcon">
                                            <img src={seat} width={30} alt="" className="img-fluid" /> Seat
                                        </span>

                                    </button>
                                </h2>
                                <SeatMap />
                            </div>
                            <div className="mt-3 w-100 bg-white box-shadow-2">
                                <TermsConditionsBook />
                            </div>

                        </Col>
                        <Col md="4">
                            <div className="w-100 h-100 bg-white p-3  box-shadow-2">
                                <div className="position-sticky top-0 w-100">
                                    <PerfectScrollbar style={{ maxHeight: "100vh", overflowY: "auto" }}>



                                        <FareSummary />
                                        <div className="w-100 mt-2">
                                            <Promocodes />
                                            <Promocodes />
                                            <Promocodes />
                                            <Promocodes />
                                        </div>

                                    </PerfectScrollbar>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <ReviewPopup show={show} handlefirststep={handlefirststep} handleClose={handleClose} handleShow={handleShow} />
            </section>
            <Myfooter />


        </>
    )
}

export default ReviewDetails