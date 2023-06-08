import { faCalendarAlt, faChevronDown, faPlaneArrival, faPlaneDeparture, faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react'


import "react-datepicker/dist/react-datepicker.css";
import TravellersDropdown from './TravellersDropdown';

import MyFullCalendar from './MyFullCalendar';




const froms = [
    {
        state: 'Kolkata, India',
        sname: 'CCU',
        name: 'Netaji Subhash Chandra Bose International Airport'
    },
    {
        state: 'Gujrat, India',
        sname: 'GCK',
        name: 'Netaji Subhash Chandra Bose International Airport'
    },
    {
        state: 'Jammu, India',
        sname: 'JIK',
        name: 'Netaji Subhash Chandra Bose International Airport'
    },
    {
        state: 'Himachal, India',
        sname: 'HIM',
        name: 'Netaji Subhash Chandra Bose International Airport'
    },
    {
        state: 'Goa, India',
        sname: 'GOA',
        name: 'Netaji Subhash Chandra Bose International Airport'
    },
    {
        state: 'Karnataka, India',
        sname: 'KCI',
        name: 'Netaji Subhash Chandra Bose International Airport'
    },
];


function Bookflight() {
    let months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
    ];
    const [tripType, setTripType] = useState(1);
    const [show, setShow] = useState(false);

    const [departureEnable, setDepartureEnable] = useState(false);
    const [smShow, setSmShow] = useState(false);
    const [FareType, setFareType] = useState('Regular Fares');

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infant, setInfant] = useState(0);
    const [travellClass, setTravellClass] = useState('Economy/Premium Economy');
    const [startJDate, setStartJDate] = useState(new Date());
    const [startEdate, setStartEdate] = useState(new Date());
    const [mdShow, setMdShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const setDepartureFalse = (value) => {
        setDepartureEnable(value);
        if (value == false) {
            setTripType(1)
        } else if (value == true) {
            setTripType(2)
        }
    }
    const trip_master_handler = (val) => {
        const trip_type = val;
        if (trip_type == 2) {
            setDepartureEnable(true);
        } else if (trip_type == 1) {
            setDepartureEnable(false);
        } else {
            setDepartureEnable(false);
        }

        setTripType(trip_type)
    }

    const handleDateClick = (e) => {
        console.log(e.dateStr);
        setStartJDate(e.dateStr);
        setSmShow(false);
    }
    const handleMdDateClick = (e) => {

        console.log(e.dateStr);
        setStartEdate(e.dateStr);
        setMdShow(false);
    }


    return (
        <>
            <div className="w-100">


                <ul className="list-unstyled d-flex align-items-center gap-2 tripmanager" >
                    <li className={`tripwraper d-flex align-items-center  ${(tripType == 1) ? ('activeItem') : ('')}`} role='button' onClick={() => (trip_master_handler(1))}>
                        <p className="mb-0">
                            One Way
                        </p>
                    </li>
                    <li className={`tripwraper d-flex align-items-center ${(tripType == 2) ? ('activeItem') : ('')}`} role='button' onClick={() => (trip_master_handler(2))}>
                        <p className="mb-0">
                            Round Trip
                        </p>
                    </li>
                    <li className={`tripwraper d-flex align-items-center ${(tripType == 3) ? ('activeItem') : ('')}`} role='button' onClick={() => (trip_master_handler(3))}>
                        <p className="mb-0">
                            Multi City
                        </p>
                    </li>
                </ul>
            </div>
            <div className="w-100">
                <div className="row">
                    <div className="col-md-3">
                        <div className="w-100 h-100">
                            <div className="dropdown w-100 h-100">
                                <button className="btn w-100 text-start departureBtn h-100"  data-bs-toggle="dropdown" aria-expanded="false">
                                    <label htmlFor="from" className="w-100 d-flex justify-content-between">
                                        <span>
                                            From
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faPlaneDeparture} />
                                        </span>

                                    </label>
                                    <div className="w-100">
                                        <h2>
                                            Kolkata
                                        </h2>
                                        <p>
                                            Netaji Subhash Chandra Bos International Airport Kolkata, West Bengol Pincode 1110001
                                        </p>
                                    </div>
                                </button>
                                <div className="dropdown-menu w-100 p-0 m-0">
                                    <div className="input-group box-shadow-1">
                                        <span className="input-group-text border-0 bg-white">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </span>
                                        <input type="text" name="" id="" placeholder='From' className="form-control shadow-none border-0" />
                                    </div>
                                    <ul className='list-unstyled setOverflow'>
                                        {
                                            froms.map((elm, index) => (
                                                <li key={index}>
                                                    <a className="dropdown-item fromLink text-wrap w-100" href="#01">
                                                        <div className="d-flex flex-wrap  align-items-center">
                                                            <div className="col-1 icon">
                                                                <FontAwesomeIcon icon={faPlaneDeparture} />
                                                            </div>
                                                            <div className="col-8 state">
                                                                {elm.state}
                                                            </div>
                                                            <div className="col-3 short_name">
                                                                {elm.sname}
                                                            </div>
                                                            <div className="col-12 full_name">
                                                                {elm.name}
                                                            </div>
                                                        </div>

                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="w-100 h-100">
                            <div className="dropdown w-100 h-100">
                                <button className="btn text-start departureBtn w-100 h-100"  data-bs-toggle="dropdown" aria-expanded="false">
                                    <label htmlFor="from" className="w-100 d-flex justify-content-between">
                                        <span>
                                            From
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faPlaneArrival} />
                                        </span>

                                    </label>
                                    <div className="w-100">
                                        <h2>
                                            Kolkata
                                        </h2>
                                        <p>
                                            Netaji Subhash Chandra Bos International Airport Kolkata, West Bengol Pincode 1110001
                                        </p>
                                    </div>
                                </button>

                                <div className="dropdown-menu w-100 p-0 m-0">
                                    <div className="input-group box-shadow-1">
                                        <span className="input-group-text border-0 bg-white">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </span>
                                        <input type="text" name="" placeholder='To' id="" className="form-control shadow-none border-0" />
                                    </div>
                                    <ul className='list-unstyled setOverflow'>
                                        {
                                            froms.map((elm, index) => (
                                                <li key={index}>
                                                    <a className="dropdown-item fromLink text-wrap w-100" href="#01">
                                                        <div className="d-flex flex-wrap align-items-center">
                                                            <div className="col-1 icon">
                                                                <FontAwesomeIcon icon={faPlaneArrival} />
                                                            </div>
                                                            <div className="col-8 state">
                                                                {elm.state}
                                                            </div>
                                                            <div className="col-3 short_name">
                                                                {elm.sname}
                                                            </div>
                                                            <div className="col-12 full_name">
                                                                {elm.name}
                                                            </div>
                                                        </div>

                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 ">
                        <div role='button' onClick={() => setSmShow(true)} className="w-100 h-100 departureBtn rounded-2  p-1 ps-2"   >
                            <label htmlFor="">
                                Departure
                            </label>

                            <h2>
                                {
                                    new Date(startJDate).getDate()
                                }  <span>{
                                    months[new Date(startJDate).getMonth()]

                                } {
                                        new Date(startJDate).getFullYear()
                                    } </span>
                            </h2>
                            <p>
                                Friday
                            </p>
                            <span className="calenderIcon">
                                <FontAwesomeIcon icon={faCalendarAlt} />
                            </span>
                        </div>
                    </div>

                    <div className={`col-md-2 ${(tripType != 3) ? ('') : ('d-none')}`}>
                        <div className="w-100 h-100 departureBtn rounded-2 p-1 ps-2" role='button' >
                            <label htmlFor="" className='d-flex justify-content-between'>
                                <span>
                                    Return
                                </span>
                                {
                                    (departureEnable == false) ? (<span>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </span>) : (<button onClick={() => setDepartureFalse(false)} className='btn border-0 shadow-none  p-0 text-secondary'>
                                        <FontAwesomeIcon icon={faTimesCircle} />
                                    </button>)
                                }

                            </label>
                            {
                                (departureEnable == true) ? (<>
                                    <div role='button' className="w-100" onClick={() => setMdShow(true)} >



                                        <h2>
                                            {new Date(startEdate).getDate()} <span>June 23 </span>
                                        </h2>
                                        <p>
                                            Friday
                                        </p>
                                        <span className="calenderIcon">
                                            <FontAwesomeIcon icon={faCalendarAlt} />
                                        </span>
                                    </div>

                                </>) : (<>
                                    <small onClick={() => setDepartureFalse(true)} className='fw-bold text-secondary'>
                                        Tap to set Return Date
                                    </small>
                                </>)
                            }
                        </div>
                    </div>
                    <div className="col-md-2 ">
                        <div className="w-100 h-100">
                            <button className="btn w-100 h-100 departureBtn text-start" onClick={handleShow}>
                                <label htmlFor="" className='d-flex justify-content-between'>
                                    <span>Travellers & Class</span>   <FontAwesomeIcon icon={faChevronDown} />
                                </label>
                                <h2>
                                    {adults + infant + children}  <span>Travellers</span>
                                </h2>
                                <p>
                                    {travellClass}
                                </p>
                            </button>

                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                                centered
                            >


                                <Modal.Body className='passengerMenu m-0'>
                                    <TravellersDropdown adults={adults} infant={infant} children={children} travellClass={travellClass} setAdults={setAdults} setChildren={setChildren} setInfant={setInfant} setTravellClass={setTravellClass} handleClose={handleClose} />
                                </Modal.Body>

                            </Modal>


                            <Modal

                                show={smShow}
                                onHide={() => setSmShow(false)}
                                aria-labelledby="example-modal-sizes-title-sm"
                                centered
                            >

                                <Modal.Body className='p-0'>
                                    <MyFullCalendar handleDateClick={handleDateClick} setSmShow={setSmShow} />
                                </Modal.Body>
                            </Modal>

                            <Modal

                                show={mdShow}
                                onHide={() => setMdShow(false)}
                                aria-labelledby="example-modal-sizes-title-sm"
                                centered
                            >

                                <Modal.Body className='p-0'>
                                    <MyFullCalendar handleDateClick={handleMdDateClick} setSmShow={setMdShow} />
                                </Modal.Body>
                            </Modal>



                        </div>
                    </div>

                </div>

                


                <div className="row mt-3">
                    <div className="col-md-12">
                        <ul className="list-unstyled d-flex flex-wrap   align-items-center gap-1 fare_group ">
                            <li className='bg-white border-0 '>
                                Select A
                                Fare Type:
                            </li>
                            {
                                ['Regular Fares', 'Armed Forces Fares', 'Student Fares', 'Senior Citizen Fares', 'Doctor & Nurse Fares'].map((item, index) => (
                                    <li key={index} onClick={() => setFareType(item)} className={`wrapFilter  d-flex ${(item == FareType) ? ('activeItem') : ('')}`}>
                                        <p>
                                            {item}
                                        </p>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Bookflight