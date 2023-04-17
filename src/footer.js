import { useState } from "react";
import React from "react";

function Colors() {
    const [color, setColor] = useState("red");
    const showColor = () => {
        const selectedColor = document.querySelector(".selectedColor");
        selectedColor.innerHTML = `<h2>You choose ${color} color </h2>`;
    }
    return (
        <>
            <label htmlFor="color">Choose your color:</label>
            <select name="color" id="color" value={color} onChange={(e) => setColor(e.target.value)}>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="black">Black</option>
                <option value="green">Green</option>
            </select>
            <button onClick={showColor}>Confirm</button>
            <p className="selectedColor"></p>
        </>
    )
}
function Side() {
    const leftSide = () => {
        let sideTxt = document.querySelector("#show-side");
        sideTxt.innerText = "You choose left side";
    }
    const rightSide = () => {
        let sideTxt = document.querySelector("#show-side");
        sideTxt.innerText = "You choose right side";
    }
    return (
        <div>
            <p>Choose your side</p>
            <button onClick={leftSide}>Left</button>
            <button onClick={rightSide}>Right</button>
            <p id="show-side"></p>
        </div>
    )
}
function Cars() {
    let cars = ["Audi", "Mercedes", "Volvo", "Bmw"];
    return (<>
        <h2>Cars in your garage</h2>
        {
        cars.length > 0 &&
        <p>You have {cars.length} cars in your garage</p>
        }
        <ul>
            {cars.map((car, numbers) => <li key={car}>{car} is {numbers + 1}</li>)}
        </ul>
    </>
    )
}
function Timer() {
    let numbers = [0,1,2,3,4,5];
    numbers.reverse();
    return (<>
    <h3>Reverse counter to practice wirte list in React</h3>
        <ul>
            {numbers.map(element => <li key={element}>{element}</li>)}
        </ul>
        </>
    )
}
class Nested extends React.Component {
    render() {
        return <h2>Props will be {this.props.txt} in class</h2>
    }
}
function NestedTwo(props) {
    return <h2>Props will be {props.txt} in function</h2>
}
function Person() {
    const [name, setName] = useState("Oskar");
    const [age, setAge] = useState(24);
    const [hungry, setHungry] = useState("not hungry");
    function switchData() {
        setName("Anonymous");
        setAge(999);
        setHungry("very hungry");
    }
    return (<>
        <h2>My name is {name} and I have a {age} yo. In that moment i'm {hungry}.</h2>
        <button onClick={switchData}>Switch data</button>
        </>
    )
}
export function Footer() {
    return (
        <footer>
            <Colors />
            <Side />
            <Nested txt="nested" />
            <NestedTwo txt="nested" />
            <Nested txt="nested twice time" />
            <Cars />
            <Timer />
            <Person />
        </footer>
    )
}