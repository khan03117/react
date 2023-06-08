import React from 'react'

import Banner from '../elements/Banner'
import Myheader from '../elements/Myheader'
import { Col, Container, Row } from 'react-bootstrap'
import imagination1 from '../assets/img/imagination1.png';
import imagination2 from '../assets/img/imagination2.png';
import imagination3 from '../assets/img/imagination3.png';
import Topdestination from '../elements/Topdestination';
import Toorpackage from '../elements/Toorpackage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faLocation, faTimeline, faUser } from '@fortawesome/free-solid-svg-icons';
import myvideo from '../assets/img/travel-video.mp4'
import Myfooter from '../elements/Myfooter';
import Topsights from '../elements/Topsights';



function Home() {
    return (
        <>
          <Myheader bgclass="navbar-bg position-absolute"/>
            <Banner />
            <section className='section_padding_top'>
                <Container >
                    <Row>
                        <Col lg="3" md="3">

                            <div className="w-100 heading_left_area">
                                <h2>Go beyond your <span>imagination</span></h2>
                                <h5>Discover your ideal experience with us</h5>
                            </div>

                        </Col>
                        <Col lg="3" md="3">
                            <div className="imagination_boxed">
                                <a href="top-destinations.html">
                                    <img src={imagination1} alt="img" />
                                </a>
                                <h3><a href="top-destinations.html">7% Discount for all <span>Airlines</span></a></h3>
                            </div>

                        </Col>
                        <Col lg="3" md="3">

                            <div className="imagination_boxed">
                                <a href="top-destinations.html">
                                    <img src={imagination2} alt="img" />
                                </a>
                                <h3><a href="#!">Travel around<span>the world</span></a></h3>
                            </div>

                        </Col>
                        <Col lg="3" md="3">

                            <div className="imagination_boxed">
                                <a href="top-destinations.html">
                                    <img src={imagination3} alt="img" />
                                </a>
                                <h3><a href="top-destinations.html">Luxury resorts<span>top deals</span></a></h3>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
            <Topdestination />
            <Topsights/>
            <section className="dynamic-video-wrapper section_padding_top" data-overlay-dark="3">
                <video width="100%" height="100%" autoPlay muted="" preload="auto" loop="loop">
                    <source src={myvideo} type="video/mp4" />
                </video>
                <div className="wrap-content v-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <h1><a href="tour-details.html" className='text-white'>Costa Victoria Cochin</a></h1>
                                <h4><FontAwesomeIcon icon={faLocation} /> Maldives &nbsp;&nbsp; <FontAwesomeIcon icon={faTimeline} /> 4 Days + 3 Nights</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Toorpackage />
            <section id="blogs_home" className='section_padding_top pb-4'>
                <Container>
                    <Row>

                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="section-title  mx-auto text-start">
                                <h4 className=" text-black">Our Blogs</h4>
                                <h2 className=" text-black">Explore <span className="text-blue">Tour News</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            </div>
                        </div>
                        {
                            [1, 2].map((item, index) => (
                                <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="news-block-one box-shadow-2 rounded-2 overflow-hidden">
                                        <div className="image-box">
                                            <figure className='w-100 mb-0'>
                                                <a href="blog.php?url=how-household-relocation-services-assist-you-in-your-relcoation">
                                                    <img src="https://vcard4u.com/packers-movers/admin-panel/public/uploads/blogs/230502012005blog-1.jpg" className='img-fluid w-100 h-100' alt="" />
                                                </a>
                                            </figure>
                                        </div>
                                        <div className="inner-box">
                                            <div className="blog-content">
                                                <ul className="post-info">
                                                    <li className="author">
                                                        <FontAwesomeIcon icon={faUser} /> Author</li>
                                                    <li className="post-date"> <FontAwesomeIcon icon={faCalendar} /> May 23, 2023</li>
                                                </ul>
                                                <div className="post-body">
                                                    <h5 className="blog-title"><a href="blog.php?url=how-household-relocation-services-assist-you-in-your-relcoation">How Household Relocation Services Assist You In Your Relcoation </a></h5>
                                                    <div className="blog-text">Are you shifting to a new place from the existing? One of the most difficult tasks of our life is to move from one location to another.</div>
                                                    <div className="w-100 mt-2">
                                                        <button className="btn btn-theme">
                                                            Read more
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }




                    </Row>
                </Container>
            </section>
            <Myfooter />
        </>

    )
}

export default Home