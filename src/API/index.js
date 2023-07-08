//API KEY
const ApiKey = process.env.REACT_APP_API_KEY;


// makes api fetch reguest route to the API server
export const getJokes = async () => {
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

      const results = await response.json();
      return results;
    } catch(error) {
      console.log('error getting all jokes',error)
    }
  }



