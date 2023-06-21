import { useRef, useState } from "react";
import Button from "../Button";

const Exchange = () => {
  const [value, setValue] = useState("");
  const [side, setSide] = useState("Exchange your money from Złoty");
  const [reverse, setReverse] = useState(false);
  const currencyRef = useRef(null);
  const quantityRef = useRef(null);
  const exchange = () => {
    const pln = " złotych";
    const currency = currencyRef.current.value;
    const quantity = quantityRef.current.value;

    if (quantity === "") {
      return;
    }

    if (reverse) {
      switch (currency) {
        case "EUR":
          setValue((quantity * 4.15).toFixed(2) + pln);
          break;
        case "USD":
          setValue((quantity * 4.66).toFixed(2) + pln);
          break;
        case "GBP":
          setValue((quantity * 5.25).toFixed(2) + pln);
          break;
        case "JPY":
          setValue((quantity * 0.03).toFixed(2) + pln);
          break;
        default:
          setValue("");
      }
    } else {
      switch (currency) {
        case "EUR":
          setValue((quantity * 0.21).toFixed(2) + " euros");
          break;
        case "USD":
          setValue((quantity * 0.24).toFixed(2) + " dollars");
          break;
        case "GBP":
          setValue((quantity * 0.19).toFixed(2) + " pounds");
          break;
        case "JPY":
          setValue((quantity * 32.47).toFixed(2) + " yens");
          break;
        default:
          setValue("");
      }
    }
  };

  const reverseExchange = () => {
    setReverse(!reverse);
    setSide(
      reverse
        ? "Exchange your money from Złoty"
        : "Exchange your money to Złoty"
    );
    setValue("");
  };

  return (
    <>
      <br />
      <label htmlFor="quantity">{side}</label>
      <br />
      <input
        type="number"
        onKeyDown={(evt) =>
          ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
        }
        id="quantity"
        ref={quantityRef}
        placeholder="Type your amount"
      />
      <br />
      <select ref={currencyRef}>
        <option value="EUR">Euro</option>
        <option value="USD">Dollars</option>
        <option value="GBP">Pounds</option>
        <option value="JPY">Yen</option>
      </select>
      <Button onClick={exchange}>Exchange</Button>
      <Button onClick={reverseExchange}>Reverse</Button>
      {value && <p>{value}</p>}
    </>
  );
};

export default Exchange;
