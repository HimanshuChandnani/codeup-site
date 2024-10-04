import React from 'react'
import logo from '../../images/full-logo-black.dc3e624a01f5dc34c84d.png'
import Navbar from '../Navbar'
import Wrapper from './style'

const Header = () => {

    const navbarItems = [
        {value: 'Mentors', scrollToElem: '#mentors'},
        {value: 'Alma Mater', scrollToElem: '#alma-mater'},
        {value: 'Team', scrollToElem: '#team'},
        {value: 'Events', scrollToElem: '#event'},
        {value: 'Partners', scrollToElem: '#partners'},
        {value: 'Contact', func: 'contact_open()', customClass: 'btn btn-success float-right ml-lg-3 ml-0', element: 'button'},
    ]

    return (
        <Wrapper>
            <div id="navigation" className="container pt-4">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-6 bottomp pb-4">
                        <a href="#"><img className='logo' src={logo} alt="Codeup logo" /></a>
                    </div>
                    <div className="col-lg-9 col-6">
                        <Navbar itemList = {navbarItems}/>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Header