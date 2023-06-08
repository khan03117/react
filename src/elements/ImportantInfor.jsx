import { faShieldHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ImportantInfor() {
    return (
        <>
            <div className="w-100 mt-4 bg-light  p-3 rounded-2 overflow-hidden importantInfo">
                <h4>
                    Important Information
                </h4>
                <p class="d-flex align-items-center gap-2 mb-0">
                    <FontAwesomeIcon className='text-danger' icon={faShieldHeart} />
                    Check travel guidelines and baggage information below:</p>
                <div className="w-100 mt-3">
                    <ul class="infoList">
                        <li>
                            <u><b>Wearing masks/face covers is no longer mandatory. However, all travellers are advised to wear them, in view of the threat posed by COVID-19.</b></u>
                        </li>
                        <li>For the complete list of travel guidelines issued by Indian States and UTs,<a class="appendLeft3" href="https://www.makemytrip.com/promos/mysafety-state-guidelines.html" rel="noopener noreferrer" target="_blank"> click here</a>
                        </li>
                        <li>Carry no more than 1 check-in baggage and 1 hand baggage per passenger. If violated, airline may levy extra charges

                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ImportantInfor