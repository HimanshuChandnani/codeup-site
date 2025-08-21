import styled from "styled-components";

const Wrapper = styled.div`
    .form-control {
        border-radius: 4px;
        box-shadow: none !important;
        background-color: hsl(0, 0%, 100%);
        border-color: hsl(0, 0%, 80%);

        &:hover {
            border-color: hsl(0, 0%, 70%);
        }

        &:focus {
            border-color: #2684ff;
            box-shadow: 0 0 0 1px #2684ff !important;
        }
    }
`;

export default Wrapper;
