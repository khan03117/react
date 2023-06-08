import { faLocation, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../assets/img/logo.png';
import React from 'react'


function Myfooter() {
    return (
        <footer class="footer clearfix">
            <div class="container">

                <div class="first-footer">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="links dark footer-contact-links">
                                <div class="footer-contact-links-wrapper flex-wrap">
                                    <div class="footer-contact-link-wrapper ">
                                        <div class="image-wrapper footer-contact-link-icon">
                                            <div class="icon-footer d-flex justify-content-center align-items-center">
                                                <FontAwesomeIcon icon={faPhone} />
                                            </div>

                                        </div>
                                        <div class="footer-contact-link-content">
                                            <h6>Call us</h6>
                                            <p>+1 123-456-0606</p>
                                        </div>
                                    </div>
                                    <div class="footer-contact-links-divider"></div>
                                    <div class="footer-contact-link-wrapper">
                                        <div class="image-wrapper footer-contact-link-icon">
                                            <div class="icon-footer d-flex justify-content-center align-items-center">
                                                <FontAwesomeIcon icon={faMessage} />
                                            </div>
                                        </div>
                                        <div class="footer-contact-link-content">
                                            <h6>Write to us</h6>
                                            <p>info@travolagency.com</p>
                                        </div>
                                    </div>
                                    <div class="footer-contact-links-divider"></div>
                                    <div class="footer-contact-link-wrapper">
                                        <div class="image-wrapper footer-contact-link-icon">
                                            <div class="icon-footer d-flex justify-content-center align-items-center">
                                                <FontAwesomeIcon icon={faLocation} />
                                            </div>
                                        </div>
                                        <div class="footer-contact-link-content">
                                            <h6>Address</h6>
                                            <p>24 King St, SC 29401 USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="second-footer">
                    <div class="row">

                        <div class="col-md-4 widget-area">
                            <div class="widget clearfix">
                                <div class="footer-logo">
                                    <img class="img-fluid" src={logo} alt="" />
                                </div>
                                <div class="widget-text">
                                    <p>Quisque imperdiet sapien porttito the bibendum sellentesque the commodo erat acar accumsa lobortis, enim diam the nesuen.</p>
                                    <div class="social-icons">
                                        <ul class="list-inline">

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 offset-md-1 widget-area">
                            <div class="widget clearfix usful-links">
                                <h3 class="widget-title">Quick Links</h3>
                                <ul className='list-unstyled'>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="tours.html">Tours</a></li>
                                    <li><a href="destination.html">Destinations</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-md-4 widget-area">
                            <div class="widget clearfix">
                                <h3 class="widget-title">Subscribe</h3>
                                <p>Sign up for our monthly blogletter to stay informed about travel and tours</p>
                                <div class="widget-newsletter">
                                    <form action="#">
                                        <div className="input-group">
                                            <input type="email" placeholder="Email Address" className='form-control' required="" />
                                            <button type="submit" className='btn text-white border'>Send</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bottom-footer-text">
                    <div class="row copyright">
                        <div class="col-md-12">
                            <p class="mb-0">©2023 <a href="/">DuruThemes</a>. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Myfooter