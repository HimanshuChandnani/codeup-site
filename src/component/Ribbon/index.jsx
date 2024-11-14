// import React, { useState } from "react";
// import $ from "jquery";
import Wrapper from "./style";
import FormModal from "../FormModal";

const Ribbon = () => {
    // const [element, setElement] = useState("");

    // const closeRibbon = () => {
    //     setElement("");
    //     localStorage.setItem("ribbonClosed", true);
    // };

    // $(document).ready(() => {
    //     const ribbonCheck = () => {
    //         console.log("hello");
    //         const data = (
    //             <div className="ribbon">
    //                 <div className="ribbon-container">
    //                     <div className="container">
    //                         <span>We are organising Codehack 1.0 in GIT</span> <FormModal />
    //                         {/* <button className="btn btn-danger close" onClick={closeRibbon}>
    //                             x
    //                         </button> */}
    //                     </div>
    //                 </div>
    //             </div>
    //         );
    //         if (localStorage.getItem("ribbonClosed") === "true") return;
    //         setElement(data);
    //     };
    // });

    // const resetRibbon = () => {
    //     localStorage.setItem("ribbonClosed", false);
    //     console.log("hello");
    // };
    // alert(window.innerWidth);

    return (
        <Wrapper id="ribbon" className="ribbon-body">
            <div className="ribbon">
                <div className="ribbon-container">
                    <div className="container">
                        <span>We are organising Codehack 1.0 in GIT</span> <FormModal />
                        {/* <button className="btn btn-danger close" onClick={closeRibbon}>
                                x
                            </button> */}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Ribbon;
