import React, { useState } from "react";

import LoadingButton from "../LoadingButton/index"; // Assuming the LoadingButton component is in the same directory

import "./index.css";

// API Imports
import { getJokes } from "../API";

function Jokes() {
  const [joke, setJoke] = useState("");

  async function fetchJokes() {
    const result = await getJokes();
    if (result && result.length > 0) {
      setJoke(result[0].joke);
    }
  }

  return (
    <div>
      <div className="card-container">
        <div className="card-content">
          <div className="card-title card-text">{joke}</div>
          <LoadingButton  onClick={fetchJokes} />
          
        </div>
      </div>
    </div>
  );
}

export default Jokes;
