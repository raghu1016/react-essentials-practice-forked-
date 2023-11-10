import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(identifier, newInput) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [identifier]: +newInput,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userinput={userInput} />
      <Results input={userInput} />
    </>
  );
}

export default App;
