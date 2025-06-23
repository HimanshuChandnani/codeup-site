import styled from "styled-components";

const Wrapper = styled.div`
    .container {
        position: relative;

        .full-para {
            position: absolute;
            background-color: #0b2239;
            padding: 30px;
            transition: 0.2s;
            z-index: 1;
            transform: scale(1);
            left: 0;
            margin-left: -10px;
            margin-right: -10px;
            color: white;
            min-width: 100%;

            .close {
                margin: 3px 0;
                float: none;
                padding: 2px;
                margin-left: auto;
                display: block;
                color: white;
                filter: invert(1);
            }
        }

        .closed-class {
            transform: scale(0);
        }
    }
`;

export default Wrapper;
