import styled from "styled-components";

const Wrapper = styled.div`
    .user-button {
        border: none;
        text-align: left;
        width: 100%;
        transition: 0.2s;
        background-color: #fff;

        &:hover {
            background-color: #f0f0f0;
        }
    }

    .timesheet-details {
        max-height: calc(100dvh - 32px);
        position: sticky;
        top: 16px;

        @media (max-width: 768px) {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            border-radius: 16px 16px 0 0;
            z-index: 1050;
            max-height: none;
        }
    }
`;

export default Wrapper;
