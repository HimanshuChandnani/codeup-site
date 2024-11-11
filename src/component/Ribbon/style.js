import styled from "styled-components";

const Wrapper = styled.div`
    .ribbon {
        width: 100%;
        height: 60px;
        .container {
            padding: 20px 15px;
            span {
                width: calc(100% - 175px);
                display: inline-block;
            }
            a {
                margin-left: 10px;
            }
        }
        .link {
            display: inline;
            font-size: 14px;
        }
        .arrow-link::after {
            font-size: 15px;
        }
    }

    .ribbon-container {
        position: fixed;
        z-index: 10;
        background-color: black;
        width: 100%;
        color: white;
        font-size: 14px;
        line-height: 1;

        .close {
            color: white;
            font-size: 16px;
            width: 10px;
            float: right;
            width: 20px;
            margin: 0;
        }
    }
    @media only screen and (max-width: 600px) {
        .ribbon-container {
            font-size: 10px;
        }
        .ribbon .container span {
            width: calc(100% - 165px) !important;
        }
        .ribbon-container .close {
            font-size: 12px;
        }
    }
`;

export default Wrapper;
