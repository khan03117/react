import React from 'react'
import dest1 from '../assets/img/dest1.png'
import dest2 from '../assets/img/dest2.png'
import dest3 from '../assets/img/dest3.png'
import dest4 from '../assets/img/dest4.png'
import dest5 from '../assets/img/dest5.png'

import { Container, Row, Col } from 'react-bootstrap'

const dests = [
    // {
    //     name: 'Andman Nikobar',
    //     image: dest1
    // },
    {
        name: 'China',
        image: dest2
    },
    {
        name: 'Tripura',
        image: dest3
    },
    {
        name: 'Kerala',
        image: dest4
    },
    {
        name: 'Meghalaya',
        image: dest5
    }
    // {
    //     name: 'Gujrat',
    //     image: dest6
    // },
    // {
    //     name: 'Palghat',
    //     image: dest7
    // },
    // {
    //     name: 'Panna',
    //     image: dest8
    // },
    // {
    //     name: 'Malabar',
    //     image: dest9
    // }


];
function Topdestination() {
    return (
        <>
            <section id="destination_section" className='section_padding_top'>
                <div class="section-title mb-5 w-50 mx-auto text-center">
                    <h4 class=" text-black">Top Destinations</h4>
                    <h2 class=" text-black">Explore <span class="text-blue">Top Destinations</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
                <Container>
                    <Row>
                        <Col md="6">
                            <div className="w-100 h-100 position-relative overflow-hidden rounded-3  destination">
                                <img src={dest1} alt="" className="img-fluid w-100 h-100" />
                                <div class="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                    <div class="trend-content-title text-white">
                                        <h5 class="mb-0"><a href="tour-grid.html" class="text-blue">Italy</a></h5>
                                        <h3 class="mb-0 text-white">Caspian Valley</h3>
                                    </div>
                                    <span class="badge bg-blue px-4 py-2 totalToor">18 Tours</span>
                                </div>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="row gy-4">
                                {dests.map((item, index) => (
                                    <div key={index} className="col-6">
                                        <div className="w-100 h-100 position-relative overflow-hidden rounded-3 short_destination">
                                            <img src={item.image} alt="" className='img-fluid w-100 h-100' />
                                            <div class="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                                <div class="trend-content-title text-white">
                                                    <h5 class="mb-0"><a href="tour-grid.html" class="text-blue">Italy</a></h5>
                                                    <h3 class="mb-0 text-white">Caspian Valley</h3>
                                                </div>
                                                <span class="badge bg-blue  ">18 Tours</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Col>


                    </Row>
                </Container>
            </section>


        </>
    )
}

export default Topdestination