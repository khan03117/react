import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Usersidebar from './Usersidebar'
import Myheader from '../../elements/Myheader'
import PageBanner from '../../elements/PageBanner'
import profile from '../../assets/img/profile.png'
import Myfooter from '../../elements/Myfooter'
import Profile from './Profile'
import Tickets from './Tickets'

function Dashboard() {
    return (
        <>
            <Myheader />
            <PageBanner />
            <section id="pageBreadCrumb"></section>
            <section className='bg-light pb-5'>
                <Container>
                    <Row className='position-relative'>
                        <Col md="3">
                            <div className="w-100 p-4 bg-white box-shadow-2 rounded-3 sticky-top">
                                <figure className="w-100">
                                    <label htmlFor="picupload" role='button' className='w-100 position-relative picuplodlabel'>
                                        <div className="w-100 text-center d-flex justify-content-center p-4 border rounded-2 position-relative  align-items-center" id="imgPreview">
                                            <img src={profile} alt="" className='profilePic' />
                                        </div>
                                    </label>
                                    <input type="file" name="" className='d-none' id="picupload" />
                                </figure>
                                <Usersidebar />
                            </div>
                        </Col>
                        <Col md="9">
                            <div className="w-100 mainDashboard">
                               <Profile/>
                               <Tickets/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Myfooter />
        </>
    )
}

export default Dashboard