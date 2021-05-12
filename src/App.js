import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";

import {BASE_URL, API_KEY} from './constants/api';

import Header from './Header';
import Photo from './Photo';

function App() {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [hdImage, setHdImage] = useState();
  const [explanation, setExplanation] = useState();

  useEffect(() => {
    axios.get(`${BASE_URL}${API_KEY}`)
      .then(function(res) {
        console.log(res.data.url);
        setTitle(res.data.title);
        setDate(res.data.date);
        setExplanation(res.data.explanation);
      })
  })

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
