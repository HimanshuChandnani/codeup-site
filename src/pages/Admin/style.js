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

    .desc {
        font-size: 11px;
    }

    /* @media (max-width: 768px) {
        .admin-tabs-wrapper {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #fff;
            border-top: 1px solid #ccc;
            z-index: 1000;
            padding: 5px 0;
        }

        .admin-tabs {
            display: flex;
            justify-content: space-around;
            border: none !important;
        }

        .admin-tabs .nav-item {
            flex: 1;
            text-align: center;
        }

        .admin-tabs .nav-link {
            border: none !important;
            color: #555 !important;
            font-size: 14px;
            padding: 8px 0;
        }

        .admin-tabs .nav-link.active {
            color: #0d6efd !important;
            font-weight: 600;
            border-bottom: 2px solid #0d6efd !important;
        }
    } */

    /* Desktop Tabs */
    .admin-top-nav {
        border-bottom: 1px solid #ddd;
    }

    /* Mobile Bottom Tabs */
    .admin-bottom-nav {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
        border-top: 1px solid #ccc;
        z-index: 1000;
        justify-content: space-around;
    }

    .admin-bottom-nav .nav-item {
        flex: 1;
        text-align: center;
    }

    .admin-bottom-nav .nav-link {
        color: #555;
        font-size: 13px;
        border: none !important;
        padding: 10px 0;
    }

    .admin-bottom-nav .nav-link.active {
        color: #0d6efd !important;
        font-weight: 600;
        /* border-bottom: 2px solid #0d6efd !important; */
        box-shadow: 0 -3px 0 #0d6efd inset;
    }

    /* Add padding so content isn't hidden behind bottom nav */
    @media (max-width: 768px) {
        .tab-content-area {
            padding-bottom: 70px;
        }
    }
`;

export default Wrapper;
