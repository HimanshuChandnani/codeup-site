import React from 'react'
import $ from 'jquery'

// const Navbaritem = (props = {value: 'undefined', scrollToElem: '', func: '', customClass: 'nav-link bottomp pb-4', elem: 'a'}) => {
const Navbaritem = ({value = 'undefined', scrollToElem = '', func = '', customClass = 'nav-link bottomp pb-4', element = 'a'}) => {

    console.log(value, scrollToElem, customClass, element)

    const scrollCustom = (id, elem) => {
        let extra_height = $('#navigation').outerHeight() - $('#navigation .row').height();
        let scroll = $(id).position().top - $('#navigation .row').height() - extra_height;
        $(window).scrollTop(scroll);
        setActive(elem);
    }
    const setActive = (elem) =>{
        $('.nav-link').removeClass('active');
        $(elem).addClass('active');
    }

    if (element === 'button'){
        return (
            <li className="nav-item">
                <button className={customClass} onClick={() => func}>{value}</button>
            </li>
        )
    }
    else {
        return (
            <li className="nav-item">
                <a className={customClass} onClick={() => scrollCustom({scrollToElem}, this)}>{value}</a>
            </li>
        )
    }
    
    
}

export default Navbaritem