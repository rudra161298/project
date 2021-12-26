import "./App.css";
import LeftBar from "./components/LeftBar";
import Body from "./components/Body";
import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { useEffect } from "react";
function App() {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get("https://www.gov.uk/bank-holidays.json");

      for (let dt of result.data["england-and-wales"]["events"]) {
        dt.id = uuidv4();
      }
      for (let dt of result.data["scotland"]["events"]) {
        dt.id = uuidv4();
      }
      for (let dt of result.data["northern-ireland"]["events"]) {
        dt.id = uuidv4();
      }
      setEngland(result.data["england-and-wales"]["events"]);
      setScotland(result.data["scotland"]["events"]);
      setNothern(result.data["northern-ireland"]["events"]);
    } catch (err) {
      alert("Error in getting data");
      console.log(err);
    }
  };

  const [england, setEngland] = useState([]);
  const [scotland, setScotland] = useState([]);

  const [nothern, setNothern] = useState([]);

  return (
    <div className="main">
      <LeftBar
        england={england}
        scotland={scotland}
        northern={nothern}
        setEngland={setEngland}
        setNothern={setNothern}
        setScotland={setScotland}
      />
      <Body england={england} scotland={scotland} northern={nothern} />
    </div>
  );
}

export default App;
