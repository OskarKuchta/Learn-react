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
  const [src, setSrc] = useState("./first.jpg");
  useEffect(() => {
    const images = [
      "./first.jpg",
      "./second.jpg",
      "./third.jpg",
      "./fourth.jpg",
      "./fifth.jpg",
      "./sixth.jpg",
      "./seventh.jpg",
    ];
    const IntervalPhotos = setInterval(() => {
      setSrc(images[Math.floor(Math.random() * 7)]);
    }, 2000);
    return () => clearInterval(IntervalPhotos);
  }, []);
  return (
    <div style={{ width: "400px", height: "400px" }}>
      <img
        className="photos"
        src={src}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};
const Main = () => {
  return (
    <main>
      <UseClass />
      <Images />
    </main>
  );
};
export default Main;
