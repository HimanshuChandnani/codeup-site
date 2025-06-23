import $ from "jquery";

let form;
$(document).ready(() => (form = $("#contact-form")));
export const contactOpen = () => {
    form.removeClass("closed-class");
};

export const contactClose = () => {
    form.addClass("closed-class");
    $(".one, .two, .three").val("");
};

let terms;
$(document).ready(() => (terms = $("#terms")));
export const termsOpen = () => {
    terms.removeClass("closed-class");
};

export const termsClose = () => {
    terms.addClass("closed-class");
};

let codeupShow;
$(document).ready(() => (codeupShow = $("#codeupShow")));
export const codeupShowOpen = () => {
    codeupShow.removeClass("closed-class");
};

export const codeupShowClose = () => {
    codeupShow.addClass("closed-class");
};

export const scrollCustom = (id, elem) => {
    let extra_height = $("#navigation").outerHeight() - $("#navigation .row").height();
    let scroll = $(id).position().top - $("#navigation .row").height() - extra_height + 3;
    $(window).scrollTop(scroll);
};

const setActive = (elem) => {
    $(".nav-link").removeClass("active");
    $(elem).addClass("active");
};

// window.onscroll = function () {
//     let window_top = $(window).scrollTop();
//     if (window_top + 60 >= $("#mentors").position().top && window_top < $("#mentors").position().top + $("#mentors").height()) {
//         setActive($("header .nav-link")[0]);
//     } else if (window_top + 60 >= $("#alma-mater").position().top && window_top < $("#alma-mater").position().top + $("#alma-mater").height()) {
//         setActive($("header .nav-link")[1]);
//     } else if (window_top + 60 >= $("#team").position().top && window_top < $("#team").position().top + $("#team").height()) {
//         setActive($("header .nav-link")[2]);
//     } else if (window_top + 60 >= $("#event").position().top && window_top < $("#event").position().top + $("#event").height()) {
//         setActive($("header .nav-link")[3]);
//     } else if (window_top + 60 >= $("#partners").position().top && window_top < $("#partners").position().top + $("#partners").height()) {
//         setActive($("header .nav-link")[4]);
//     }
//     // else if(window_top + 60 >= $('#faq').position().top && window_top < $('#faq').position().top + $('#faq').height()){
//     //     setActive($('header .nav-link')[4])
//     // }
//     else {
//         $(".nav-link").removeClass("active");
//     }
// };

window.dataLayer = window.dataLayer || [];
function gtag() {
    window.dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-LNW3Y6NQ6W");
