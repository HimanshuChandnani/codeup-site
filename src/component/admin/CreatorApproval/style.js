import styled from "styled-components";

const Wrapper = styled.div`
    .badge {
        &.bg-danger {
            background-color: #ffe0e2 !important;
            color: #ff5e6c;
        }

        &.bg-success {
            background-color: #d4ebe0 !important;
            color: #00b55e;
        }

        &.bg-warning {
            background-color: #f9ebc1 !important;
            color: #fbbe08;
        }
    }

    .btn-success {
        background-color: #0b2239 !important;
        border: 1px solid #0b2239 !important;

        &:hover {
            background-color: #fff !important;
            color: #0b2239;
        }
    }

    .btn-danger {
        background-color: #fff !important;
        border: 1px solid #0b2239 !important;
        color: #0b2239;

        &:hover {
            background-color: #0b2239 !important;
            color: #fff;
        }
    }
`;

export default Wrapper;
