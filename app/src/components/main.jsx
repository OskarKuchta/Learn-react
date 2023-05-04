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
  const [selectedCountry, setSelectedCountry] = useState("PL");
    const fetchData = async () => {
      const selectedCountry = document.querySelector("#select-country");
      const url =
        "https://wft-geo-db.p.rapidapi.com/v1/geo/places/%7BplaceId%7D/time";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "52fdbdd35emshdd3d87b914298f4p13565djsnf4b6daae5ca1",
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
        },
      });
      const res = await response.text();
      setData(res);
    };
  useEffect(() => {
    fetchData();
  }, [selectedCountry])
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <>
      <select id="select-country" onChange={handleCountryChange}>
        <option value="PL">Poland</option>
        <option value="DE">Germany</option>
        <option value="NL">Netherlands</option>
        <option value="RU">Russia</option>
        <option value="US">United States</option>
      </select>
      <p>{data}</p>
    </>
  );
};
const Main = () => {
  return (
    <main>
      <ShowData />
      <UseClass />
      <Images />
    </main>
  );
};
export default Main;
