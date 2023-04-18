import React from "react";
import { useState } from "react";

function Top(props) {
    const [year, setYear] = useState(2023);
    const [text] = useState("Some text in middle of sentence");
    const switchYear = () => {
        setYear(year => year + 1)
    }
    const changeImage = () => {
        setTimeout(() => {
            let images = document.querySelector(".main-img");
            images.src = "https://unsplash.it/400/400";
            console.log(123);
        }, 1000)
    }
    return (
        <div onLoad={changeImage}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <strong>{text}</strong> incididunt ut labore et dolore magna aliqua. {year}
            </p>
            <button onClick={switchYear}>Switch year</button>
            <br />
            <img
                className="main-img"
                src="https://unsplash.it/400/400"
                alt="Random pic from  unsplash" />
        </div>
    )
}

function InputName() {
    const showName = (event) => {
        event.preventDefault();
        const myName = document.querySelector("#myName");
        const textBelow = document.querySelector(".typedName");
        if (myName.value === "") {
            alert("You forgot type your name");
        }
        else if (myName.value.match(/[^A-Za-z]/g)) {
            alert("Can't add special symbols or number")
        }
        else {
            textBelow.innerText = `Hello ${myName.value} on my page`;
        }
    }
    return (
        <form onSubmit={showName}>
            <input id="myName" type="text" placeholder="Type your name" />
            <p className="typedName"></p>
            <button>Save</button>
        </form>
    )
}
export class Main extends React.Component {
    render() {
        return (
            <main>
                <Top />
                <InputName />
            </main>
        )
    }
}