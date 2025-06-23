// import "../App.css";
import AlmaMater from "../../component/AlmaMater";
import Contact from "../../component/Contact";
import Terms from "../../component/Terms";
import Event from "../../component/Event";
import Faq from "../../component/Faq";
import Footer from "../../component/Foot";
import HeaderGroup from "../../component/HeaderGroup";
import Mentors from "../../component/Mentors";
import Team from "../../component/Team";
import CodeupShow from "../../component/CodeupShow";
import Ribbon from "../../component/Ribbon";
import Redirect from "../../component/Redirect";
import News from "../../component/News";
import OneupAdModal from "../../component/OneupAdModal";
import { useEffect, useState } from "react";

function Home() {
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        if (window.localStorage.getItem("OneupAdShown") !== "true") {
            setShowModal(true);
            window.localStorage.setItem("OneupAdShown", "true");
        }
    }, []);
    return (
        <>
            {/* <Redirect> */}
            <Ribbon />
            <HeaderGroup />
            <OneupAdModal showModal={showModal} setShowModal={setShowModal} />
            <Contact />
            <Terms />
            {/* <News /> */}
            <CodeupShow />
            <Mentors />
            <AlmaMater />
            <Team />
            <Event />
            <Faq />
            <Footer />
            {/* </Redirect> */}
        </>
    );
}

export default Home;
