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

    form {
        margin-top: 20px;
        max-width: 600px;

        input,
        textarea {
            margin-bottom: 20px;
            padding: 20px;
            border-radius: 10px;
            outline: none;
            border: none;
            border: 1px solid rgba(0, 0, 0, 0.125);
        }

        textarea {
            height: 200px;
        }

        .four {
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 40px;
        }

        button {
            margin: auto;
            margin-bottom: 20px;
        }
    }
`;

export default Wrapper;
