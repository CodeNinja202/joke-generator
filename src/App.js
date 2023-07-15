// Imports
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./index.css";
////////////////////////////////////////////////////////////////

//API Imports
import { getJokes } from "./API";

//Start of APP component
function App() {
  //state variables
  const [joke, setJoke] = useState("");
  ////////////////////////////////////////////////////////////////

  //fetch all jokes from api server
  async function fetchJokes() {
    const result = await getJokes();
    if (result && result.length > 0) {
      setJoke(result[0].joke);
    }
  }

  //Button when clicked a joke is fetched from api server
  const handleButtonClick = () => {
    fetchJokes();
  };

  return (
    <div className="background-image">
      <div className="card-container">
        <Card className="bg-dark text-white">
          <div className="card-content">
            <Card.Title className="card-title">Card title</Card.Title>
            <Card.Text className="card-text">{joke}</Card.Text>
            <Button
              className="btn"
              variant="primary"
              onClick={handleButtonClick}
            >
              Click me for Jokes
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
