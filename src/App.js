import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Karakter from './components/Karakter'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [charactersData , setCharactersData] = useState([]);
useEffect(()=>{
  axios
  .get("https://swapi.dev/api/people/")
  .then((res)=> res.data)
  .then((data)=>{
    console.log("data cekildi >", data);
    setCharactersData(data);
  })
}, []);
  return (
    <div className="App">
     {charactersData && charactersData.map((char)=>{
      return <Karakter char ={char}/>
     })}
      
    </div>
  );
}

export default App;
