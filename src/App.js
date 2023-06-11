// import React, { useEffect, useState } from 'react';

// function App() {
//   const [apiData, setApiData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('https://api.quotable.io/random', {
//         headers: {
//           // 'Content-Type': 'application/json',
//         }
//       });

//       const result = await response.json();
//       setApiData(result);
//       console.log(result);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
  
//   }, []);



//   return (
//     <>
//       {apiData.content} 
  
       
//        {apiData.author}
    
//        <button onClick={fetchData}>Get Random Joke</button>
   
//     </>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';

function App() {
  const [joke, setJoke] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/dadjokes?limit=1', {
        method: 'GET',
        headers: {
          'X-Api-Key': 'pjkZnEzM/5dkyQJ4b98whg==ce6AakzWVr9lkCIM',
        },
      });

      const result = await response.json();
      if (result && result.length > 0) {
        setJoke(result[0].joke);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleButtonClick = () => {
    fetchData();
  };

  return (
    <>
      {joke && (
        <div>
          <strong>joke: </strong>
          {joke}
        </div>
      )}
      <button onClick={handleButtonClick}>Get Random Joke</button>
    </>
  );
}

export default App;

