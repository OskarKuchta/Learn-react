import React from "react"

export class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "some another text to test props in class components",
            year: 2022
        }
    }
    switchYear = () => {
        this.setState({year: this.state.year + 1});
    }
    render() {
        return (
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor {this.state.text} incididunt ut labore et dolore magna aliqua. {this.state.year}
                </p>
                <button onClick={this.switchYear}>Switch year</button>
                <br />
                <img className="main-img"
                    src="https://unsplash.it/400/400"
                    alt="Random pic from  unsplash" />
            </div>
        )
    }
}