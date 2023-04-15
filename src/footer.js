function Colors() {
    const changeColor = () => {
        let selectedColor = document.querySelector(".selectedColor");
        let select = document.querySelector("#colors");
        selectedColor.innerHTML = `You choose ${select.value} color`;
    }
    let addTimeout = () => {
        setTimeout(changeColor, 1000)
    }
    return (
        <>
            <label htmlFor="colors">Choose your color:</label>
            <select onClick={addTimeout} name="colors" id="colors">
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="black">Black</option>
                <option value="green">Green</option>
            </select>
            <button onClick={changeColor}>Confirm</button>
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

export function Footer() {
    return (
        <>
            <Colors />
            <Side />
        </>
    )
}