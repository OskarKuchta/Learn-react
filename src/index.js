import React from "react";
import ReactDOM from "react-dom/client";
import "./components/css/style.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Header />
        <Main />
        <Footer />
    </>

)