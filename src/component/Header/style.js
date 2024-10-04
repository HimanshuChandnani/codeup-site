import styled from 'styled-components'

const Wrapper = styled.header`

    width: 100%;
    background-color: white;
    z-index: 2;

    .logo{
        width: 150px;
    }
    @media screen and (width <= 446px){
        .logo{
            width: 120px;
        }
    }

    .contaner, .bottomp, .navbar-toggler{
        transition: 0.2s;
    }

    .nav-link{
        color: black !important;
        font-weight: 600;
        cursor: pointer;
        position: relative;
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin: 0 15px;
        display: flex;
        justify-content: center;
        &:hover{
            color: #0b2239 !important;
        }
        &:before{
            content: '';
            position: absolute;
            width: 0%;
            bottom: -8px;
            background-color: black;
            height: 3px;
            transition: 0.2s;
            background-color: #0b2239;
        }
        &:hover::before, &.active::before{
            width: 100%;
        }
    }
`

export default Wrapper