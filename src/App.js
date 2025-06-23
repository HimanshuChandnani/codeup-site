import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Amabassador from "./pages/Ambassador";
import Admin from "./pages/Admin";
import SummerInternship from "./pages/SummerInternship";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ambassador" element={<Amabassador />} />
                    <Route path="/admin" element={<Admin />} />
                    {/* <Route path="/summer-internship" element={<SummerInternship />} /> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;
