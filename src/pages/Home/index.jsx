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
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
// import Ribbon from "../../component/Ribbon";
// import Redirect from "../../component/Redirect";
// import News from "../../component/News";
// import OneupAdModal from "../../component/OneupAdModal";
// import { useEffect, useState } from "react";

function Home() {
    // const [showModal, setShowModal] = useState(false);
    // useEffect(() => {
    //     if (window.localStorage.getItem("OneupAdShown") !== "true") {
    //         setShowModal(true);
    //         window.localStorage.setItem("OneupAdShown", "true");
    //     }
    // }, []);
    const [searchParams, setSearchParams] = useSearchParams();
    const ticket = searchParams.get("ticket");

    useEffect(() => {
        const consumeTicket = async (ticket) => {
            try {
                const res = await axios.post("https://dev.codeup.in/dev/sso/consume-ticket", { ticket });
                const jwt = res.data?.jwt;

                if (jwt) {
                    const resp = await axios.get("https://dev.codeup.in/dev/update-user", { headers: { Authorization: `Bearer ${jwt}` } });
                    const data = resp.data;
                    if (data.user) {
                        localStorage.setItem("googleUser", JSON.stringify(data.user));
                        localStorage.setItem("authToken", jwt);
                        window.location.reload();
                    }
                }
            } catch (e) {
                console.error(e);
            }
        };
        if (ticket) {
            consumeTicket(ticket);
            searchParams.delete("ticket");
            setSearchParams(searchParams);
        }
    }, [ticket, searchParams, setSearchParams]);
    return (
        <>
            {/* <Redirect> */}
            {/* <Ribbon /> */}
            <HeaderGroup />
            {/* <OneupAdModal showModal={showModal} setShowModal={setShowModal} /> */}
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
