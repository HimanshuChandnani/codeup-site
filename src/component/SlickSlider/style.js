import Slider from "react-slick/lib/slider";
import styled from "styled-components";

const CustomSlider = styled(Slider)`
    .slick-arrow {
        mix-blend-mode: ${(props) => (props.theme === "light" ? "difference" : "unset")};
    }

    .slick-dots {
        position: unset;

        li button:before {
            color: ${(props) => (props.theme === "light" ? "black" : "white")};
        }

        li.slick-active button:before {
            color: ${(props) => (props.theme === "light" ? "black" : "white")};
        }
    }

    .slick-prev {
        left: -10px;
    }
    .slick-next {
        right: -10px;
    }

    &:has(.event) {
        .slick-next {
            right: 30px;
        }
        .slick-prev {
            left: 30px;
        }
        .slick-arrow {
            z-index: 5;
            text-shadow: 0 0 5px black;
        }
    }

    &:has(.partner) {
        .slick-arrow {
            display: none !important;
        }
        .slick-dots {
            display: none !important;
        }
    }
`;

export default CustomSlider;
