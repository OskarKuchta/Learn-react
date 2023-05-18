import React, { useState, useEffect } from "react";

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
  const [src, setSrc] = useState(1);
  useEffect(() => {
    const images = [
      "/app/src/assets/photo1.jpg",
      "/app/src/assets/photo2.jpg",
      "/app/src/assets/photo3.jpg",
      "/app/src/assets/photo4.jpg",
      "/app/src/assets/photo5.jpg",
      "/app/src/assets/photo6.jpg",
      "/app/src/assets/photo7.jpg",
    ];
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
        src={`./photo${src}.jpg`}
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
      <button onClick={showData}>Confirm</button>
      <br />
      <p>{data}</p>
    </>
  );
};

const Main = () => {
  return (
    <main>
      <ShowData />
      <Images />
      <UseClass />
    </main>
  );
};
export default Main;
