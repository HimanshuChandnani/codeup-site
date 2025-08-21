import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Amabassador from "./pages/Ambassador";
import Admin from "./pages/Admin";
import SummerInternship from "./pages/SummerInternship";
import { useEffect } from "react";
import { mountAlertManager } from "./component/Alert";

function App() {
    useEffect(() => {
        mountAlertManager();
    }, []);
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
