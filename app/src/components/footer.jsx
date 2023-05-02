import { useState } from "react"

function Btn () {
    const [count, setCount] = useState(0);
    const clicked = () => {
        setCount(count => count + 1)
    } 
    return (
        <button onClick={clicked}>Clicked {count} times</button>
    )
}

function Footer() {
    return (
        <footer>
            <Btn />
            <br />
            <Btn />
        </footer>
    )
}

export default Footer