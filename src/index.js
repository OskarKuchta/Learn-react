import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { Header } from "./header";
import { Main } from "./main";

function App() {
    return (
        <div>
            <Header name="Oskar" framework="React applications"/>
            <Main />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);