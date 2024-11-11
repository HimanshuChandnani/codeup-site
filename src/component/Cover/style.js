import styled from "styled-components";

const Wrapper = styled.section`
    background-image: linear-gradient(to top, #0b2239 20%, transparent 70%, #0b2239 100%);
    text-align: center;
    position: relative;
    overflow: hidden;
    height: 100%;
    display: flex;

    .container {
        align-self: center;
    }

    video {
        width: 100%;
        margin-top: -48px;
        position: absolute;
        left: 0;
        z-index: -1;
        height: 100%;
        object-fit: cover;
        background-color: #0b2239;
    }

    h1 {
        font-size: 3rem;
        font-weight: 300;

        span {
            font-size: 10rem;
            position: absolute;
            font-weight: 100;
        }

        @media screen and (width <= 992px) {
            span {
                font-size: 15rem;
            }
        }
        @media screen and (width <= 768px) {
            span {
                font-size: 16.5rem;
            }
        }
        @media screen and (width <= 487px) {
            span {
                font-size: 17.5rem;
            }
        }
        @media screen and (width <= 446px) {
            span {
                font-size: 16rem;
            }
        }
        @media screen and (width <= 400px) {
            span {
                font-size: 15rem;
            }
        }
    }

    p {
        margin: 20px 0px;
        font-weight: 300;
        font-size: 1.2rem;
    }

    .left {
        left: 40px;
        top: -50px;
    }

    .right {
        right: 40px;
        top: -50px;
    }

    @media only screen and (max-width: 446px) {
        h1 {
            font-size: 9vw;
        }
        p {
            font-size: 4.5vw;
        }
    }

    @media screen and (width <= 1200px) {
        .left {
            left: 0;
            top: -50px;
        }
        .right {
            right: 0;
            top: -50px;
        }
    }
`;

export default Wrapper;
