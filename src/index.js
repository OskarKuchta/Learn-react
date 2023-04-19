import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

function App() {
    return (
        <>
            <Header name="Oskar" framework="React applications" />
            <Main />
            <Footer />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);