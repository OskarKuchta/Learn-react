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
      "./photo1.jpg",
      "./photo2.jpg",
      "./photo3.jpg",
      "./photo4.jpg",
      "./photo5.jpg",
      "./photo6.jpg",
      "./photo7.jpg",
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
  const [country, setCountry] = useState("Warszawa");
  const showData = async() => {
    const url = await fetch(`https://timezone.abstractapi.com/v1/current_time/?api_key=e27920d12c5c4e8880813dfd68434aec&location=${country}`);
    let response = await url.text();
    response = JSON.parse(response);
    console.log(response)
    setData(response.datetime)
  }
  const switchCountry = (event) => {
    setCountry(event.target.value)
  }
  return (
    <>
      <label htmlFor="countries">Select your country</label>
      <br />
      <select id="select-country" name="countries" onChange={switchCountry}>
        <option value="Warszawa">Warszawa</option>
        <option value="Berlin">Berlin</option>
        <option value="Paryż">Paryż</option>
        <option value="Moskwa">Moskwa</option>
        <option value="Los Angeles">Los Angeles</option>
      </select>
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
