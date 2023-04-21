import { useState } from "react";

function True() {
    return <p>If props value have true return TRUE</p>
}
function False() {
    return <p>If props value have false return false</p>
}
function TakeBoolean(props) {
    const checkBoolean = props.checkBoolean;
    return (
        <>
            <h2>Sentence can be change with checkBoolean props value</h2>
            {checkBoolean ? <True /> : <False />}
        </>
    )
    // if(checkBoolean){
    //     return <True />
    // }
    // return <False />  (Second method to check condition and add function value)
}
function First() {
    const [user, setUser] = useState("in React");
    return (
        <>
            <h2>Inheriting props to another function {user}</h2>
            <Second user="something another text" />
        </>)
}
function Second({ user }) {
    return (
        <>
            <h2>Inheriting props to another function {user}</h2>
            <Third user={user} />
        </>
    )
}
function Third({ user }) {
    return (
        <>
            <h2>Inheriting props to another function {user}</h2>
        </>)
}
function Header(props) {
    return (
        <header className="container">
            <h1>Write first component with using fucntion for {props.name}</h1>
            <h2>Multiply tags need to be written in div in {props.framework}</h2>
            <TakeBoolean checkBoolean={true} />
            <First />
        </header>
    )
}

export default Header