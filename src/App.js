import "./App.css";
import AlmaMater from "./component/AlmaMater";
import Contact from "./component/Contact";
import Terms from "./component/Terms";
// import Cover from "./component/Cover";
import Event from "./component/Event";
import Faq from "./component/Faq";
import Footer from "./component/Foot";
// import Header from "./component/Header";
import HeaderGroup from "./component/HeaderGroup";
import Mentors from "./component/Mentors";
// import Partner from "./component/Partner";
import Team from "./component/Team";

function App() {
    return (
        <>
            <HeaderGroup />
            {/* <Header />
            <Cover />
            <Partner /> */}
            <Contact />
            <Terms />
            <Mentors />
            <AlmaMater />
            <Team />
            <Event />
            <Faq />
            <Footer />
        </>
    );
}

export default App;
