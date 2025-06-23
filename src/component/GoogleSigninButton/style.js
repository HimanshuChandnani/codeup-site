import styled from "styled-components";

const Wrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    background-color: #fff;
    color: black;
    font-weight: bold;
    padding: 8px 30px;
    border: 1px solid #aaa;

    &:hover {
        background-color: #eee;
    }
`;

export default Wrapper;
