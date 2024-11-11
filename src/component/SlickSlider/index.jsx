import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickItem from "../SlickItem";
import CustomSlider from "./style";

const SlickSlider = ({ details = "", type = "normal", theme = "light", openPara = "" }) => {
    const settings = {
        slidesToShow: type === "normal" || type === "partner" ? 3 : 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: type === "partner" ? -1 : 2000,
        speed: type === "partner" ? 10000 : 800,
        dots: type === "partner" ? false : true,
        cssEase: type === "partner" ? "linear" : "normal",
        pauseOnHover: type === "partner" ? false : true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: type === "normal" ? 2 : type === "partner" ? 3 : 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 778,
                settings: {
                    slidesToShow: type === "partner" ? 1.5 : 1,
                    dots: true,
                },
            },
        ],
    };

    let slickItems = [];
    for (let i of details) {
        slickItems.push(<SlickItem key={i.name} image={i.image} name={i.name} work={i.work} linkedin={i.linkedin} para={i.para} theme={theme} type={type} site={i.site} openPara={openPara} />);
    }

    return (
        <CustomSlider {...settings} theme={theme}>
            {slickItems}
        </CustomSlider>
    );
};

export default SlickSlider;
