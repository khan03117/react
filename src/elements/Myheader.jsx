import React from 'react';

import Mynavigation from './Mynavigation';
import { Container } from 'react-bootstrap';



function Myheader(props) {
  return (
    <>
      <header className={`main_header_arae ${props.bgclass}` }>

        <div className="topbar-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <ul className="topbar-list">

                  <li><a href="#!"><span>+011 234 567 89</span></a></li>
                  <li><a href="#!"><span>contact@domain.com</span></a></li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6">
                <ul className="topbar-others-options">
                  <li><a href="login.html">Login</a></li>
                  <li><a href="register.html">Sign up</a></li>

                </ul>
              </div>
            </div>
          </div>
        </div>



        <div className="main-navbar">
          <Container>
            <Mynavigation />
          </Container>

        </div>

      </header>
    </>
  )
}

export default Myheader