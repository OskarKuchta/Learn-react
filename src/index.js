import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";


function Header() {
    return (
        <div class="container">
            <h1>Write first component with using fucntion</h1>
            <h2>Multiply tags need to be written in div</h2>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Header />
);