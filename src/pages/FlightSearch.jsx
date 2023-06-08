import React from 'react'
import Myheader from '../elements/Myheader'
import Glider from 'react-glider';
import 'glider-js/glider.min.css';

import { Container, Col, Row } from 'react-bootstrap'
import FlightFilter from '../elements/FlightFilter'
import air1 from '../assets/img/air1.png';
import air2 from '../assets/img/air2.png';
import air3 from '../assets/img/air3.png';
import air4 from '../assets/img/air4.png';
import air5 from '../assets/img/air5.png';
import FlightView from '../elements/FlightView';
import Myfooter from '../elements/Myfooter';
import PageBanner from '../elements/PageBanner';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Bookingbox from '../elements/Bookingbox';
import BookMyFlight from '../elements/BookMyFlight';
const flights = [
    {
        logo: air1

    },
    {
        logo: air2

    },
    {
        logo: air3

    },
    {
        logo: air4

    },
    {
        logo: air5

    },
];
let datepricearr = [];
let today = new Date();
for (let index = 0; index < 365; index++) {

    today = new Date(today).getTime() + 86400 * 1000;
    let myobj = {
        date: today,
        price: "₹ 4,847.00"
    }
    datepricearr.push(myobj);

}
let months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
];
let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function FlightSearch() {
    const [open, setOpen] = useState({});
    const [filtericon, setFiltericon] = useState({});
    const filtericonhandler = (payload) => {

        let newobj = {
            bindex: payload.bindex,
            transform: (payload.transform == 1) ? (0) : (1)
        };
        setFiltericon(newobj);
    }
    const openbookmodel = (val) => {
        let obj = {
            open : true, 
            travel : 1
        };
        setOpen(obj);
    }
    return (
        <>
            <Myheader bgclass="" />
            <PageBanner />
            <section className="position-relative">
        <div class="container" id="resultforBanner">
          <div className="row">
            <div className="col-md-12 ">
              <div className="w-100 resultFor rounded-2 bg-white p-4 box-shadow-2">
                <BookMyFlight />
              
                  <button  className="btn position-absolute searchBtn start-50  btn_gradient">
                    Search
                  </button>
                

              </div>
            </div>
          </div>
        </div>
      </section>
            <section className='section_padding_top pb-5' id="flightSearch">
                <Container>
                    <Row>


                        <Col md="3">
                            <FlightFilter />
                        </Col>
                        <Col md="9" className='position-relative'>
                            <div className="w-100 overflow-hidden  bg-white box-shadow-2 mb-3 rounded-2">
                                <Glider
                                    draggable
                                    hasArrows

                                    slidesToShow={2}
                                    slidesToScroll={1}
                                    responsive={[
                                        {
                                            breakpoint: 775,
                                            settings: {
                                                slidesToShow: "auto",
                                                slidesToScroll: "auto",
                                                itemWidth: 150,
                                                duration: 0.25,
                                            },
                                        },
                                    ]}
                                >
                                    {
                                        datepricearr.map((item, index) => (
                                            <div className="dateWrapper text-center">
                                                {
                                                    days[new Date(item.date).getDay()]
                                                },
                                                <span className='me-1'>
                                                    {
                                                        months[new Date(item.date).getMonth()]
                                                    }
                                                </span>


                                                <span>
                                                    {
                                                        new Date(item.date).getDate()
                                                    }
                                                </span>


                                                <span className="d-block price">
                                                    {item.price}
                                                </span>
                                            </div>
                                        ))
                                    }

                                </Glider>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="w-100 bg-white box-shadow-1 mb-3 p-2 rounded-2" id="shortFilterGroup">
                                        <div class="row">
                                            <div class="col-2">
                                                <span>
                                                    Sorted By:
                                                </span>
                                            </div>
                                            <div class="col-6 text-center">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <button className='btn w-100 border-0 shadow-none' onClick={() => filtericonhandler({ bindex: 1, transform: filtericon.transform })}>
                                                            Departure {(filtericon.bindex == 1) ? (<FontAwesomeIcon className={`text-secondary ${(filtericon.transform == 1) ? ('rotate-180') : ('')}`} icon={faArrowUp} />) : ('')}
                                                        </button>

                                                    </div>
                                                    <div className="col-4">
                                                        <button className='btn w-100 border-0 shadow-none' onClick={() => filtericonhandler({ bindex: 2, transform: filtericon.transform })}>
                                                            Duration {(filtericon.bindex == 2) ? (<FontAwesomeIcon className={`text-secondary ${(filtericon.transform == 1) ? ('rotate-180') : ('')}`} icon={faArrowUp} />) : ('')}
                                                        </button>

                                                    </div>
                                                    <div className="col-4">
                                                        <button className='btn w-100 border-0 shadow-none' onClick={() => filtericonhandler({ bindex: 3, transform: filtericon.transform })}>
                                                            Arrival {(filtericon.bindex == 3) ? (<FontAwesomeIcon className={`text-secondary ${(filtericon.transform == 1) ? ('rotate-180') : ('')}`} icon={faArrowUp} />) : ('')}
                                                        </button>

                                                    </div>

                                                </div>
                                            </div>
                                            <div class="col-4 ">
                                                <div className="w-100 text-end pe-4">
                                                    <button className='btn text-end w-100 border-0 shadow-none' onClick={() => filtericonhandler({ bindex: 4, transform: filtericon.transform })}>
                                                        Price {(filtericon.bindex == 4) ? (<FontAwesomeIcon className={`text-secondary ${(filtericon.transform == 1) ? ('rotate-180') : ('')}`} icon={faArrowUp} />) : ('')}
                                                    </button>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    {
                                        flights.map((item, index) => (
                                            <FlightView index={index} openbookmodel={openbookmodel} logo={item.logo} key={index} />
                                        ))
                                    }
                                </div>

                            </div>
                            {
                                (open.open == true) ? (<Bookingbox travel={open.travel}/>) : ('')
                            }
                          

                        </Col>

                    </Row>
                </Container>

            </section>
            <Myfooter />

        </>
    )
}

export default FlightSearch