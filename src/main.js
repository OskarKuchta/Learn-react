import React from "react"

class Top extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "some another text to test props in class components",
            year: 2022
        }
    }
    switchYear = () => {
        this.setState({ year: this.state.year + 1 });
    }
    changeImage = () => {
        setTimeout(() => {
            let images = document.querySelector(".main-img");
            images.src = "https://unsplash.it/400/400";
            console.log(123);
        }, 1000)
    
    }
    render() {
        return (
            <div onLoad={this.changeImage}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor {this.state.text} incididunt ut labore et dolore magna aliqua. {this.state.year}
                </p>
                <button onClick={this.switchYear}>Switch year</button>
                <br />
                <img
                    className="main-img"
                    src="https://unsplash.it/400/400"
                    alt="Random pic from  unsplash" />
            </div>
        )
    }
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
        <div>
            <input id="myName" type="text" placeholder="Type your name" />
            <p className="typedName"></p>
            <button onClick={showName}>Save</button>
        </div>
    )
}
export class Main extends React.Component {
    render() {
        return (
            <div>
                <Top />
                <InputName />
            </div>
        )
    }
}