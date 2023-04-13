import React from "react"

export class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "some another text to test props in class components",
            year: 2023
        }
    }
    render() {
        return (
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor {this.state.text} incididunt ut labore et dolore magna aliqua. {this.state.year}
                </p>
                <img className="main-img"
                    src="https://unsplash.it/400/400"
                    alt="Random pic from  unsplash" />
            </div>
        )
    }
}