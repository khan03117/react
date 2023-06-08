import { faTags } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Promocodes() {
    return (
        <>
            <div className="card w-100 mb-2">
                <div className="card-body bg-light">
                    <div className="row">
                        <div className="col-2">
                            <input type="radio" name="promocode" id="code1" />
                        </div>
                        <div className="col-8">
                            <label htmlFor="code1">
                                <h4 className='t-18 fw-600'>
                                    MMTNL1
                                </h4>
                                <p className="mb-0 text-secondary t-12">
                                    Congratulations! Promo Discount of Rs. 1198 applied successfully.
                                    Terms & Conditions

                                </p>
                            </label>
                        </div>
                        <div className="col-2">
                            <FontAwesomeIcon icon={faTags} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Promocodes