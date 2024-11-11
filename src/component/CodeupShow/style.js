import styled from "styled-components";

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    z-index: 10;
    top: 0;
    opacity: 1;
    height: 100vh;
    background-color: white;
    overflow: hidden;
    transition: 0.2s;
    overflow-y: scroll;
    background-color: #0b2239;

    &.closed-class {
        margin: 0 !important;
        transform: scale(0);
    }

    .required:after {
        content: " *";
        color: red;
    }

    .close {
        margin: 3px 0;
        float: none;
        padding: 2px;
        margin-left: auto;
        display: block;
        color: white;
    }

    .head {
        background-color: #0b2239;
        color: white;
    }

    .row {
        justify-content: space-between;
    }

    .image img {
        width: 100%;
    }
`;

export default Wrapper;
