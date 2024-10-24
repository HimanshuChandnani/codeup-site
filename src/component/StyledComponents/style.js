import styled from "styled-components";

export const CodeupButton = styled.button`
    display: inline-block;
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
    background-color: #4bf48f;
    color: black;
    font-weight: bold;
    padding: 8px 30px;
    border: none;
`;

export const Title = styled.p`
    text-align: center;
    margin-bottom: 40px;
    font-size: 2rem;
    font-weight: 500;

    &::before {
        content: "{";
    }

    &::after {
        content: "}";
    }

    &:before,
    &:after {
        margin: 0 10px;
        color: #4bf48f;
        font-size: 40px;
        font-weight: 300;
    }
`;

export const ArrowLink = styled.p`
    color: white;
    font-weight: 500;
    text-decoration: none !important;
    transition: 0.2s;
    align-self: flex-start;
    cursor: pointer;

    &::after {
        content: "→";
        color: #4bf48f;
        margin-left: 5px;
        font-family: monospace;
        font-size: 20px;
        transition: 0.2s;
    }

    &:hover {
        color: #4bf48f !important;

        &::after {
            margin-left: 15px;
        }
    }
`;
