import React, { useState, useEffect } from "react";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";
import photo7 from "../assets/photo7.jpg";
import ComponentProvider from "./componentProvider";
import CounterContext from "../context/CounterContext";
import Button from "./Button";
class UseClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  componentDidMount = () => {
    this.Timer = setInterval(() => {
      this.tick();
    }, 1000);
  };
  componentWillUnmount = () => {
    clearInterval(this.Timer);
  };
  tick = () => {
    this.setState({
      date: new Date(),
    });
  };
  render() {
    return (
      <>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </>
    );
  }
}
const Images = () => {
  const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7];
  const [src, setSrc] = useState(1);
  useEffect(() => {
    const IntervalPhotos = setInterval(() => {
      if (src === 7) {
        setSrc(1);
      } else {
        setSrc((src) => src + 1);
      }
    }, 2000);
    return () => clearInterval(IntervalPhotos);
  }, [src]);
  return (
    <div style={{ width: "400px", height: "400px" }} className="photo">
      <img
        className="photos"
        src={images[src - 1]}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};
const ShowData = () => {
  const [data, setData] = useState("");
  const [city, setCity] = useState("");
  const showData = async () => {
    const url = await fetch(
      `https://timezone.abstractapi.com/v1/current_time/?api_key=e27920d12c5c4e8880813dfd68434aec&location=${city}`
    );
    let response = await url.text();
    response = JSON.parse(response);
    setData(response.datetime);
    if (Object.keys(response).length === 0) {
      alert("Invalid city. Please enter a valid city name.");
      setData("");
    }
    console.log(response);
  };
  const switchCity = (event) => {
    const cityValue = event.target.value;
    setCity(cityValue);
  };
  return (
    <>
      <label htmlFor="countries">Select your country</label>
      <br />
      <input type="text" id="countries" onChange={switchCity} value={city} />
      <Button onClick={showData}>Confirm</Button>
      <br />
      <p>{data}</p>
    </>
  );
};

const Main = () => {
  const [counter, setCounter] = useState(0);
  const addCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <main>
      <ShowData />
      <Images />
      <UseClass />
      <CounterContext.Provider value={counter}>
        <ComponentProvider />
        <Button onClick={addCounter}>Click me!</Button>
      </CounterContext.Provider>
    </main>
  );
};
export default Main;
