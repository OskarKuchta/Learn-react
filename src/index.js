import "./style.css";
import { ReactDOM } from "react";
import React from "react";

class Header extends React.Component {
    render() {
        return <h1>Hello Oskar</h1>        
    }
}

ReactDOM.render(
    <Header />,
    document.getElementById('root')
);