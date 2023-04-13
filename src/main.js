import React from "react"

export class Main extends React.Component {
    render() {
        return(
            <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor {this.props.text} incididunt ut labore et dolore magna aliqua. 
                </p>
                <img className="main-img"
                src="https://unsplash.it/400/400"
                alt="Random pic from  unsplash" />
            </div>
        )
    }
}