import { ChangeEvent, useState } from "react";
import Button from "../Button";
import axios, { AxiosResponse } from "axios";

const ShowData = () => {
  const [data, setData] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const showData: () => void = async () => {
    if (city.length !== 0) {
      const url: AxiosResponse = await axios.get(
        `https://timezone.abstractapi.com/v1/current_time/?api_key=e27920d12c5c4e8880813dfd68434aec&location=${city}`
      );
      setData(url.data.datetime);
    }
    if (city.length == 0) {
      alert("Invalid city. Please enter a valid city name.");
      setData("");
    }
  };
  const switchCity: (event: ChangeEvent<HTMLInputElement>) => void = (event) => {
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
