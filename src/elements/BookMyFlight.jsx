import React from 'react'
import { useState } from 'react'
import Faretypes from './Faretypes';
import Multicity from './Multicity';
import Modal from 'react-bootstrap/Modal';
import MyFullCalendar from './MyFullCalendar';
import TravellersDropdown from './TravellersDropdown';

function BookMyFlight() {
    const [tripType, setTripType] = useState(1);
    const [FareType, setFareType] = useState('Regular Fares');
    const [departureEnable, setDepartureEnable] = useState(false);

    const [multicityIndexing, setmulticityIndexing] = useState([])


    const [show, setShow] = useState(false);

    const [smShow, setSmShow] = useState(false);

    const handleSetSmShow = async (index, val) => {

        setSmShow(true)

        // setSmShow()
    }

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infant, setInfant] = useState(0);
    const [travellClass, setTravellClass] = useState('Economy/Premium Economy');
    const [startJDate, setStartJDate] = useState(new Date());
    const [startEdate, setStartEdate] = useState(new Date());
    const [mdShow, setMdShow] = useState(false);
    const [multicount, setMulticount] = useState([1]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
    const setDepartureFalse = (value) => {
        setDepartureEnable(value);
        if (value == false) {
            setTripType(1)
        } else if (value == true) {
            setTripType(2)
        }
    }
    const handleDateClick = (e) => {
        console.log(e.dateStr);
        setStartJDate(e.dateStr);
        setmulticityIndexing(o => [...o, e.dateStr])
        setSmShow(false);
    }
    const handleMdDateClick = (e) => {

        console.log(e.dateStr);
        setStartEdate(e.dateStr);
        setMdShow(false);
    }
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
    let months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
    ];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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
            <div className="w-100 mb-3">
                <Multicity froms={froms} months={months}
                    setSmShow={setSmShow}
                    _handleSmShow={handleSetSmShow}
                    state_index={0}
                    startJDate={multicityIndexing[0]}
                    tripType={tripType}
                    departureEnable={departureEnable}
                    setDepartureFalse={setDepartureFalse}
                    setMdShow={setMdShow}
                    startEdate={startEdate}
                    handleShow={handleShow}
                    adults={adults}
                    infant={infant}
                    children={children}
                    travellClass={travellClass}
                    show={show}
                    handleClose={handleClose}
                    smShow={smShow}
                    handleDateClick={handleDateClick}
                    mdShow={mdShow}
                    handleMdDateClick={handleMdDateClick}
                    setInfant={setInfant}
                    setAdults={setAdults}
                    setChildren={setChildren}
                    setTravellClass={setTravellClass}
                    travellershow="true"
                    days={days}
                />
            </div>
            {
                (tripType == 3) ? (
                    multicount.map((item, index) => (
                        < div key={index} data-row={multicount} data-id={index} className="w-100 mb-3 " >
                            <Multicity froms={froms} months={months}
                                setSmShow={setSmShow}
                                startJDate={multicityIndexing[index + 1]}
                                _handleSmShow={handleSetSmShow}

                                tripType={tripType}
                                departureEnable={departureEnable}
                                setDepartureFalse={setDepartureFalse}
                                mdShow={false}
                                setMdShow={setMdShow}
                                startEdate={startEdate}
                                handleShow={handleShow}
                                adults={adults}
                                infant={infant}
                                children={children}
                                travellClass={travellClass}
                                show={show}
                                handleClose={handleClose}
                                smShow={smShow}
                                handleDateClick={handleDateClick}
                                state_index={index + 1}
                                days={days}
                                handleMdDateClick={handleMdDateClick}
                                setInfant={setInfant}
                                setAdults={setAdults}
                                setChildren={setChildren}
                                setTravellClass={setTravellClass}
                                travellershow="false"
                                setMulticount={setMulticount}
                                multicount={multicount}
                                showbutton={(index == multicount.length - 1) ? (true) : (false)}
                            />
                        </div>
                    ))
                ) : ('')
            }

            <div className="w-100">
                <Faretypes FareType={FareType} setFareType={setFareType} />
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >


                <Modal.Body className='passengerMenu m-0'>
                    <TravellersDropdown adults={adults} infant={infant} children={children} travellClass={travellClass}
                        setAdults={setAdults} setChildren={setChildren} setInfant={setInfant} setTravellClass={setTravellClass} handleClose={handleClose} />
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
                    <MyFullCalendar handleDateClick={handleMdDateClick} multicityIndexing={multicityIndexing} setSmShow={setMdShow} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default BookMyFlight