import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import dest1 from '../assets/img/canada1.jpg'
import dest2 from '../assets/img/dubai1.jpg'
import dest3 from '../assets/img/greece1.jpg'
import dest4 from '../assets/img/italy1.jpg'
import dest5 from '../assets/img/maldives1.jpg'
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faLocation } from '@fortawesome/free-solid-svg-icons'

function Topsights() {
    const sights = [
        {
            name: 'Canda',
            image: dest1
        },
        {
            name: 'Dubai',
            image: dest2
        },
        {
            name: 'Greece',
            image: dest3
        },
        {
            name: 'Italy',
            image: dest4
        },
        {
            name: 'Maldives',
            image: dest5
        },

    ];
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        cssEase: 'linear',

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section id="topsights_section" className='section_padding_top'>
            <div className="section-title mb-5 w-50 mx-auto text-center">
                <h4 className=" text-black">Top Sights</h4>
                <h2 className=" text-black">Explore <span className="text-blue">Top Sights</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <Container>
                <Row>
                    <Col md="12">
                        <div className="w-100">
                            <Slider {...settings}>
                                {
                                    sights.map((item, index) => (
                                        <div className="item rounded-1 box-shadow-1 destinations position-relative overflow-hidden">
                                            <div className="w-100">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <span className="category"><a href="#0" className='text-white'>15% OFF</a></span>

                                            <div className="con">
                                                <h5><a href="#0"> <FontAwesomeIcon icon={faLocation} /> {item.name}</a></h5>
                                                <div className="line"></div>
                                                <div className="row facilities">
                                                    <div className="col col-md-8 ">
                                                        <p className='text-white'>{index * 2 + 3} Tour Packages</p>
                                                    </div>
                                                    <div className="col col-md-4 text-right">
                                                        <div className="permalink"><a href="tour-details.html" className='text-white'>Explore <FontAwesomeIcon icon={faArrowRight} /></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Topsights