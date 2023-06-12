import React from "react";
import Home from "./views/Home/Home";
import Quantity from "./views/Quantity/Quantity";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./views/Loading/Loading";
import BuyType from "./views/BuyType/BuyType";
import PaymentType from "./views/PaymentType/PaymentType";

export default function AppRouter() {
    return (
        <main className="container">
            <Router>
                <Routes>
                    <Route path="/" element={ <Home/> } />
                    <Route path="/quantity" element={ <Quantity/> } />
                    <Route path="/loading" element={ <Loading/> } />
                    <Route path="/buytype" element={ <BuyType/> } />
                    <Route path="/paymenttype" element={ <PaymentType/> } />

                </Routes>
            </Router>
        </main>
    );
}