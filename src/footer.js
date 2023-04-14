function Colors() {
    const changeColor = () => {
        let selectedColor = document.querySelector(".selectedColor");
        let select = document.querySelector("#colors");
        selectedColor.innerHTML = `You choose ${select.value} color`;
    }
    let addTimeout = () => {
        setTimeout(changeColor, 1000)
    }
    return (<div>
        <label htmlFor="colors">Choose your color:</label>
        <select onClick={addTimeout} name="colors" id="colors">
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="black">Black</option>
            <option value="green">Green</option>
        </select>
        <button onClick={changeColor}>Confirm</button>
        <p className="selectedColor"></p>
    </div>
    )
}


export function Footer() {
    return (
        <div>
            <Colors />
        </div>
    )
}