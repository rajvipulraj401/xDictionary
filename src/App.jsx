import React, { useState } from "react";
import "./App.css";
import data from "../Dictionary.json"; // directly using from .json file
// import Data from "./Data"; // using from js file with import export

const App = () => {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("Word not found in the dictionary."); // Default message
  const handleChange = (e) => {
    setWord(e.target.value);
    setMeaning("");
  };
  {
    /* How to implement the word search  after submit word


        1- step 1 : get the  word
        2- step 2 : convert the word toLowerCase() 
        3- setp 3 : search the word in array of object use indexOf(linear search)
        4- step 4 : if no index the show this text in p Word not found in the dictionary.
        5. Step 5 : Else go to that found index and show the meaning of that word in para
        
      */
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    e.target[0].value = "";

    const wordSearch = word?.toLowerCase(); // use optional chaining to see if word is there then only do this
    // let indx = data.indexOf(wordSearch);
    const indx = data.findIndex(
      (item) => item.word.toLowerCase() === wordSearch
    );

    setMeaning(
      indx !== -1 ? data[indx].meaning : "Word not found in the dictionary."
    );
  };

  return (
    <>
      {/* <div>App</div> */}

      <h1>Dictionary App</h1>

      <form onSubmit={(e) => handleSumbit(e)}>
        <input
          type="text"
          placeholder="Search for a word"
          value={word}
          onChange={(e) => handleChange(e)}
          required
        />
        <button type="submit">Search</button>
      </form>

      <h3>Definition:</h3>
      {/* <p>{data[0].meaning}</p> */}
      {/* IF we have the meaning then show it  */}
      {/* {meaning && <p>{meaning}</p>} */}
      {/* Ensure this <p> always renders */}
      <p>{meaning}</p>
    </>
  );
};

export default App;
