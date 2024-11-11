import styled from "styled-components";

const Card = styled.div`
    padding: 30px;
    text-align: center;
    margin: 0 20px;
    border: ${(props) => (props.theme === "light" ? "1px solid rgba(0,0,0,.125)" : "none")};
    border-radius: 0.25rem;
    word-wrap: break-word;
    background-clip: border-box;
    color: ${(props) => (props.theme === "light" ? "black !important" : "white !important")};
    text-decoration: none !important;
    &:is(a) {
        display: block;
    }
    &:focus-visible {
        outline: none !important;
    }
    &:has(.event) {
        padding: 0;
        margin: 0;
    }

    .defaultImg {
        width: 40%;
        border-radius: 100px;
        margin: 10px auto;
    }
    .smth {
        border: 2px solid;
    }

    .text {
        margin: 10px;
        align-self: center;
        display: flex;
        flex-direction: column;
        place-items: center;
        h3 {
            white-space: nowrap;
            font-size: 1.5rem;
        }
    }

    .name {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: left;
        width: 100%;
    }

    .para {
        text-align: left;
        display: -webkit-box;
        -webkit-line-clamp: 4; /* adjust the number of lines */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .side-image {
        width: 70%;
        border-radius: 200px;
        margin: 10px;
        display: inline !important;
    }

    .arrow-link {
        color: white;
        font-weight: 500;
        text-decoration: none !important;
        transition: 0.2s;

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
    }

    .event {
        text-align: left;

        .imageHolder {
            position: relative;
            background-image: linear-gradient(to bottom, #0b2239 0px, transparent 20px, transparent calc(100% - 100px), #0b2239 calc(100% - 40px));
            padding-bottom: 1px;
        }
        .container {
            margin-top: -30px;
            .row {
                align-items: center;
            }
        }

        img {
            width: 100%;
            position: relative;
            z-index: -3;
            object-fit: cover;
            min-height: 350px;
        }

        h5 {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin: 0 !important;

            @media screen and (width <= 400px) {
                & {
                    font-size: 1rem;
                }
            }
        }
    }

    &:has(.partner) {
        background-color: #ffffff14;
        border-radius: 5px;
        padding: 15px 20px;
    }
    .partner {
        width: 100% !important;
        object-fit: contain;
        max-height: 80px;
    }
`;

export default Card;
