import React from 'react'
import {Link} from 'react-router-dom'
import logo from './homeLogo.svg'
import {useGlobalContext} from './context'

const Navbar = () => {
    const {closeFrame} = useGlobalContext()
    return (
        <nav className='navbar'>
            <div className='nav-container'>
                <Link to='/'>
                    <img src={logo} className='logo' alt="home logo" onClick={closeFrame}/>
                </Link>
                <ul className='page-container'>
                    <li className='title'>
                        Workout Library
                    </li>
                    <li className='page'>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
