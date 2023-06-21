import { useState } from "react";
import Button from "../Button";

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

export default ShowData;
