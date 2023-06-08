import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import dest1 from '../assets/img/dest1.png'
import dest2 from '../assets/img/dest2.png'
import dest3 from '../assets/img/dest3.png'
import dest4 from '../assets/img/dest4.png'
import dest5 from '../assets/img/dest5.png'
import dest6 from '../assets/img/dest6.png'
import dest7 from '../assets/img/dest7.png'
import dest8 from '../assets/img/dest8.png'
import dest9 from '../assets/img/dest9.png'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Toorpackage() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
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
    const packages = [

        {
            city: 'Nanital',
            country: 'India',
            price: '1900',
            image: dest1
        },
        {
            city: 'Machu Picchu',
            country: 'Peru',
            price: '3900',
            image: dest2
        },
        {
            city: 'Petra',
            country: 'Zordan',
            price: '3900',
            image: dest3
        },
        {
            city: 'Christ the Redeemer',
            country: 'Brazil',
            price: '3900',
            image: dest4
        },
        {
            city: 'Taj Mahal',
            country: 'India',
            price: '3900',
            image: dest5
        },
        {
            city: 'Great Wall of China',
            country: 'China',
            price: '8900',
            image: dest6
        },
        {
            city: 'Mount Fuji',
            country: 'Japan',
            price: '8900',
            image: dest7
        },
        {
            city: 'Pa Tong',
            country: 'Japan',
            price: 'Thailand',
            image: dest8
        },
        {
            city: 'Atacama Desert',
            country: 'South America',
            price: '8900',
            image: dest9
        },
        {
            city: 'Colosseum',
            country: 'Rome',
            price: '8900',
            image: dest1
        },
        {
            city: 'Angkor Wat',
            country: 'Combodia',
            price: '8900',
            image: dest2
        },
    ];
    return (
        <section id="packages" className='section_padding_top'>
            <div class="section-title mb-5 w-50 mx-auto text-center">
                <h4 class=" text-black">Top Packages</h4>
                <h2 class=" text-black">Explore <span class="text-blue">Top Packages</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <Container>
                <Row>
                    <Col md="12">
                        <div className="w-100">
                            <Slider {...settings}>
                                {
                                    packages.map((item, index) => (
                                        <div className='packege box-shadow-2 rounded-2 position-relative overflow-hidden'>
                                            <figure className="w-100 mb-0 overflow-hidden">
                                                <img src={item.image} alt="" className="img-fluid w-100 h-100" />
                                            </figure>
                                            <div className="w-100 description p-3 bg-white">
                                                <h5>
                                                    {item.city}
                                                </h5>
                                                <h2>
                                                    {item.country}
                                                </h2>
                                                <div className="w-100 d-flex text-warning mb-3">
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <span className="badge bg-blue">18</span>
                                                </div>
                                                <div className="w-100">
                                                    <p>
                                                        Dolore nam omnis obcaecati voluptatibus. Nesciunt, laboriosam nisi.
                                                    </p>
                                                </div>
                                                <div className="w-100 border-top pt-2">
                                                    <span className='text-blue'>
                                                        ₹ {item.price}
                                                    </span>
                                                    <span>
                                                        | per person
                                                    </span>

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

export default Toorpackage