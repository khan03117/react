import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Searchbox from './Searchbox'

function Banner() {
  return (
    <>

      <section id="home_banner">
        <Container fluid>
          <Row className='align-items-center'>
            <Col lg="12">
              <div class="banner_one_text text-center w-100">
                <h1>Explore the world together</h1>
                <h3>Find awesome flights, hotel, tour, car and packages</h3>
                <div className="w-100 position-relative" id="flightPick">

                </div>
              </div>

            </Col>
          </Row>
        </Container>
      </section>
      <Searchbox />
    </>
  )
}

export default Banner