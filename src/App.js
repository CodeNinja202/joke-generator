// Imports
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './index.css';
////////////////////////////////////////////////////////////////


//API KEY
const ApiKey = process.env.REACT_APP_API_KEY;

//Start of APP component
function App() {

  //state variables
  const [joke, setJoke] = useState("");
////////////////////////////////////////////////////////////////

// makes api fetch reguest route to the API server
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.api-ninjas.com/v1/dadjokes?limit=1",
        {
          method: "GET",
          headers: {
            "X-Api-Key": ApiKey,
          },
        }
      );

      const result = await response.json();
      if (result && result.length > 0) {
        setJoke(result[0].joke);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = () => {
    fetchData();
  };

  

  return (
    <div className="background-image">
      <div className="card-container">
        <Card className="bg-dark text-white">
          <div className="card-content">
            <Card.Title className="card-title">Card title</Card.Title>
            <Card.Text className="card-text">{joke}</Card.Text>
            <Button className="btn" variant="primary" onClick={handleButtonClick}>
              Click me for Jokes
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
  
}

export default App;
