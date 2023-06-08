import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/img/logo-dark.png'
import goolgelogo from '../assets/img/google.svg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faBackward, faChevronLeft, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { validEmail, hasuppercase, validPassword, hasspecialCharacter } from '../elements/Validation'


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordScreen, setPasswordScreen] = useState(false);
    const [errorShow, setErrorShow] = useState('');
    const [inputType, setInputType] = useState('password');
    const accounthandler = (val) => {
        if (val == true) {
            if (validEmail.test(email)) {
                setPasswordScreen(true);
                setErrorShow(null)
            } else {
                setErrorShow('Please Enter Valid Email Id');
            }
        }
        if (val == false) {
            setPasswordScreen(false);
            setErrorShow(null)
        }

    }
    const inputtypehandler = () => {
        let newinput_type = '';
        (inputType == 'password') ? (newinput_type = 'text') : (newinput_type = 'password')
        setInputType(newinput_type)
    }
    const passwordHandler = () => {
        if (validPassword.test(password)) {
            if (password.split('').length > 9) {
                setErrorShow(null)
                alert('ok');
            } else {
                setErrorShow('Password length at least 10')
            }
        } else {
            setErrorShow('Invalid Password format')
        }
    }

    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col md="4" className="offset-md-4">
                            <div className="w-100 vh-100 loginGroup d-flex p-1 align-items-center">
                                <div className="w-100 d-flex flex-column gap-4   p-3">
                                    <div className="w-100">
                                        <img src={logo} alt="" className="img-fluid" />
                                    </div>
                                    <div className="w-100">
                                        <h4>
                                            Log in or create an account
                                        </h4>
                                    </div>

                                    {
                                        (passwordScreen == true) ? (

                                            <>

                                                <div className="form-group">
                                                    <button onClick={() => accounthandler(false)} className="btn p-0 text-start border-0 shadow-none ">
                                                        <span className="text-secondary t-14 me-2"><FontAwesomeIcon icon={faChevronLeft} /></span>
                                                        {email} <span className="text-danger t-10 ">Change</span>
                                                    </button>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="">
                                                        Enter Password
                                                    </label>
                                                    <div className="input-group">
                                                        <input type={inputType} name="" value={password} onChange={(e) => setPassword(e.target.value)} id="" className="form-control" />
                                                        <span className="input-group-text bg-light">
                                                            <button onClick={() => inputtypehandler()} className="btn border-0 shadow-none">
                                                                {
                                                                    (inputType == 'password') ? (<FontAwesomeIcon icon={faEyeSlash} />) : (<FontAwesomeIcon icon={faEye} />)
                                                                }

                                                            </button>
                                                        </span>
                                                    </div>
                                                    <span className="text-danger">
                                                        {errorShow}
                                                    </span>


                                                </div>
                                                <div className="form-group">
                                                    <button className="btn btn_gradient rounded-2 w-100" onClick={() => passwordHandler()}>Proceed</button>
                                                </div>
                                                <div className="form-group">
                                                    <h5 className="t-12 fw-400">
                                                        Your password should have at least:
                                                    </h5>
                                                    <ul className='t-12'>
                                                        <li>
                                                            <div className="d-flex justify-content-between">
                                                                <span>
                                                                    10 characters
                                                                </span>
                                                                <span>
                                                                    {password.split('').length}/10
                                                                </span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="d-flex justify-content-between">
                                                                <span>
                                                                    1 Uppercase
                                                                </span>
                                                                <span>
                                                                    {(hasuppercase.test(password)) ? ('1') : ('0')}/1
                                                                </span>
                                                            </div>
                                                        </li>
                                                        

                                                    </ul>
                                                </div>

                                            </>

                                        ) : ('')
                                    }

                                    {
                                        (passwordScreen == false) ? (<>
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Enter Email Id
                                                </label>
                                                <input type="email" name="" value={email} onChange={(e) => setEmail(e.target.value)} id="" className="form-control" />
                                                {
                                                    (errorShow) ? (<span className='text-danger t-12'>{errorShow}</span>) : ('')
                                                }
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" onClick={() => accounthandler(true)} className="btn btn_gradient w-100 rounded-2">Next</button>
                                            </div>

                                            <div className="form-group">
                                                <div className="or text-center">OR</div>
                                            </div>
                                            <div className="form-group">
                                                <button type="button" className="btn btn-outline-primary d-flex align-items-center justify-content-between w-100">
                                                    <div style={{ width: "30px" }}>
                                                        <img src={goolgelogo} alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="text-end" style={{ width: "calc(100% - 40px)" }}>
                                                        <div className="w-100 t-14">
                                                            Continue with google
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="form-group">
                                                <Link to="/" className='btn w-100 btn-outline-primary'>
                                                    Go Back <FontAwesomeIcon icon={faBackward} />
                                                </Link>
                                            </div>
                                        </>) : ('')
                                    }

                                    <div className="form-group">
                                        <p className="mb-0 text-secondary t-12">
                                            By creating an account, you agree to our <span>
                                                <Link>Privacy policy </Link>
                                            </span>  and <Link>Terms of use</Link>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
        </>
    )
}

export default Login