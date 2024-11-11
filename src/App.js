import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Amabassador from "./pages/Ambassador";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ambassador" element={<Amabassador />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
