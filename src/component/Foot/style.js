import styled from "styled-components";

const Wrapper = styled.footer`
    background-color: #0b2239;

    .follow {
        align-content: center;

        img {
            width: 190px;
            display: block;
        }

        h4 {
            color: white;
            display: inline-block;
            margin-right: 20px;
        }

        svg {
            width: 20px;
            height: 20px;
            fill: white;
            margin-bottom: 8px;
            margin-right: 6px;
        }
    }

    .navi a {
        color: white !important;
        text-decoration: none;
        display: block;
        margin: 25px 0;
        cursor: pointer;
    }

    .copyright {
        background-color: black;
        text-align: center;
    }

    @media screen and (width <= 768px) {
        .follow {
            text-align: -webkit-center;
        }

        .navi a {
            text-align: center;
        }
    }
`;

export default Wrapper;
