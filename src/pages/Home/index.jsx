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

function Home() {
    return (
        <>
            <HeaderGroup />
            <Contact />
            <Terms />
            <CodeupShow />
            <Mentors />
            <AlmaMater />
            <Team />
            <Event />
            <Faq />
            <Footer />
        </>
    );
}

export default Home;
