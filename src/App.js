// Imports
import React from "react";
import Jokes from "./components/Jokes"
////////////////////////////////////////////////////////////////

//API Imports

//Start of APP component
function App({setJoke, joke}) {
  //state variables


  return (
    <div className="MainApp">
    <Jokes joke={joke} setJoke={setJoke}/>
    </div>
  );
}

export default App;
