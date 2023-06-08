import { faSignIn, faSignOut, faUser, faUserAlt, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
const buttonsarr = [
  
    {
        icon: 'faUser',
        name: 'Profile'
    },
    {
        icon: 'faSignIn',
        name: 'Credentials'
    },
    {
        icon: 'faUsers',
        name: 'Travellers'
    },
    {
        icon: 'faUsers',
        name: 'Tickets'
    },
    {
        icon: 'faSignOut',
        name: 'Logout'
    }
];
function Usersidebar() {
    return (
        <>
            <ul className="list-unstyled m-0 p-0">
                {
                    buttonsarr.map((item, index) => (
                        <li className='mb-2'>
                            <button className="btn border-0 bg-light  text-start d-flex align-items-center gap-3  w-100">
                             
                                <FontAwesomeIcon icon={faUser} />
                                <span className="ms-2">
                                    {item.name}
                                </span>
                            </button>
                        </li>
                    ))
                }


            </ul>
        </>
    )
}

export default Usersidebar