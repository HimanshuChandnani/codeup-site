import styled from "styled-components";

const Wrapper = styled.div`
    .ribbon {
        width: 100%;
        height: 56px;
        margin-bottom: -2px;
        .container {
            padding: 20px 15px;
            display: flex;
            align-items: center;
            gap: 10px;
            .button {
                font-size: inherit;
                padding: 5px 10px;
            }
            span {
                flex: 1;
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
        background-color: black;
        width: 100%;
        color: white;
        font-size: 14px;
        line-height: 1;
        z-index: 1;

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
        .ribbon {
            margin-bottom: 3px;
            height: 47px;
        }
        .ribbon-container {
            font-size: 10px;
        }
        .ribbon-container .close {
            font-size: 12px;
        }

        a:after {
            font-size: 15px;
        }

        .ribbon .container {
            gap: 0px;
        }
    }

    .link {
    }
`;

export default Wrapper;
