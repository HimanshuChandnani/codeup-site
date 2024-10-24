import styled from "styled-components";

const Wrapper = styled.section`
    .faq-item {
        border-bottom: thin solid #ccc;
        padding: 0 15px;

        .faq-question {
            padding: 30px 0;
            font-size: 20px;
            font-weight: 500;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;

            span {
                transform: rotate(0deg);
                font-family: monospace;
                font-size: 30px;
                transition: 0.5s;
                color: #0b2239;
                margin-left: 10px;

                svg {
                    width: 20px;
                    height: 20px;
                    fill: #0b2239;
                }
            }

            .rotate {
                transform: rotate(180deg);
            }
        }

        .faq-answer {
            transition: 0.5s;
            overflow: hidden;
        }

        .faq-hidden {
            height: 0px;
        }

        p {
            margin: 0;
        }
    }
`;

export default Wrapper;
