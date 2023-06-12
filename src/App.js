import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function App() {
  const [joke, setJoke] = useState("");
  const [bgColor, setBgColor] = useState("");
// Random color array
const colors = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#1D4350"
];

// sets a random color
const setRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * 7);
  const randomColor = colors[randomIndex];
  setBgColor(randomColor);
};

// ENDS
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.api-ninjas.com/v1/dadjokes?limit=1",
        {
          method: "GET",
          headers: {
            "X-Api-Key": "pjkZnEzM/5dkyQJ4b98whg==ce6AakzWVr9lkCIM",
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
    setRandomColor();
  };
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  // ENDS
  return (
    <div className="App">

<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Jokes</Card.Title>
        <Card.Text>
        {joke}
        </Card.Text>
        <Button variant="primary" onClick={handleButtonClick}>More Jokes</Button>
      </Card.Body>
    </Card>

    </div>
  );
}

export default App;
