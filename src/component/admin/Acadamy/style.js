import styled from "styled-components";

const Wrapper = styled.div`
    .hover-bg {
        transition: 0.2s;
        &:hover {
            background-color: #f8f8f8 !important;
        }
    }

    .cursor-pointer {
        cursor: pointer;
    }
`;

export default Wrapper;
