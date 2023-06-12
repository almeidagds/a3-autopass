import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./routes";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <AppRouter />
        <Footer />
    </React.StrictMode>
);