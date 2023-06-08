import { faCalendarAlt, faChevronDown, faPlaneArrival, faPlaneDeparture, faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import Addmore from './Addmore';

function Multicity(props) {
  
    return (

        <>
            <div className="row">
                <div className="col-md-3">
                    <div className="w-100 h-100">
                        <div className="dropdown w-100 h-100">
                            <button className="btn w-100 text-start departureBtn h-100" data-bs-toggle="dropdown" aria-expanded="false">
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
                                        props.froms.map((elm, index) => (
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
                            <button className="btn text-start departureBtn w-100 h-100" data-bs-toggle="dropdown" aria-expanded="false">
                                <label htmlFor="from" className="w-100 d-flex justify-content-between">
                                    <span>
                                        To
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
                                        props.froms.map((elm, index) => (
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
                    <div role='button' onClick={() => {
                        props._handleSmShow(props.state_index, "shaun")
                    }} className="w-100 h-100 departureBtn rounded-2  p-1 ps-2"   >
                        <label htmlFor="">
                            Departure
                        </label>

                        <h2>
                            
                            {

                              (props.startJDate) ?  (new Date(props.startJDate).getDate()) : (new Date().getDate())
                            }  
                            
                            <span>
                            {
                              (props.startJDate) ?  ( props.months[new Date(props.startJDate).getMonth()]) : (props.months[new Date().getMonth()])

                            } 
                            {
                              (props.startJDate) ? (new Date(props.startJDate).getFullYear()) : (new Date().getFullYear())  
                            } 
                            </span>
                                
                        </h2>
                        <p>
                            {
                                props.days[new Date(props.startJDate).getDay()]
                            }
                        </p>
                        <span className="calenderIcon">
                            <FontAwesomeIcon icon={faCalendarAlt} />
                        </span>
                    </div>
                </div>

                <div className={`col-md-2 ${(props.tripType !== 3) ? ('') : ('d-none')}`}>
                    <div className="w-100 h-100 departureBtn rounded-2 p-1 ps-2" role='button' >
                        <label htmlFor="" className='d-flex justify-content-between'>
                            <span>
                                Return
                            </span>
                            {
                                (props.departureEnable == false) ? (<span>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </span>) : (<button onClick={() => props.setDepartureFalse(false)} className='btn border-0 shadow-none  p-0 text-secondary'>
                                    <FontAwesomeIcon icon={faTimesCircle} />
                                </button>)
                            }

                        </label>
                        {
                            (props.departureEnable == true) ? (<>
                                <div role='button' className="w-100" onClick={() => props.setMdShow(true)} >



                                    <h2>
                                        {new Date(props.startEdate).getDate()} <span>
                                            {
                                                props.months[new Date(props.startEdate).getMonth()]

                                            }
                                            {
                                                new Date(props.startEdate).getFullYear()
                                            }
                                        </span>
                                    </h2>
                                    <p>
                                        {props.days[new Date(props.startEdate).getDay()]}
                                    </p>
                                    <span className="calenderIcon">
                                        <FontAwesomeIcon icon={faCalendarAlt} />
                                    </span>
                                </div>

                            </>) : (<>
                                <small onClick={() => props.setDepartureFalse(true)} className='fw-bold text-secondary'>
                                    Tap to set Return Date
                                </small>
                            </>)
                        }
                    </div>
                </div>
                {
                    (props.travellershow == 'true') ? (<div className="col-md-2 ">
                        <div className="w-100 h-100">
                            <button className="btn w-100 h-100 departureBtn text-start" onClick={props.handleShow}>
                                <label htmlFor="" className='d-flex justify-content-between'>
                                    <span>Travellers & Class</span>   <FontAwesomeIcon icon={faChevronDown} />
                                </label>
                                <h2>
                                    {props.adults + props.infant + props.children}  <span>Travellers</span>
                                </h2>
                                <p>
                                    {props.travellClass}
                                </p>
                            </button>



                        </div>
                    </div>) : (<Addmore showbutton={props.showbutton} multicount={props.multicount} setMulticount={props.setMulticount} />)
                }


            </div>



        </>
    )
}

export default Multicity