import styled from "styled-components";

const Wrapper = styled.section`
    .row {
        row-gap: 16px;
    }

    .news-image {
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
    }

    .title {
        padding-right: 12px;
    }

    .delete {
        color: red;
        cursor: pointer;
        position: absolute;
        right: 0;
        margin-right: 16px;
        margin-top: 4px;
        font-size: 16px;
        z-index: 1;

        svg {
            height: 20px;
            width: 20px;
        }
    }
`;

export default Wrapper;
