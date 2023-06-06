import Home from "./views/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
    return (
        <main className="container">
            <Router>
                <Routes>
                    <Route path="/" element={ <Home/> } />
                </Routes>
            </Router>
        </main>
    );
}