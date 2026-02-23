import Header from "./components/Header"
import InputBlock from "./components/InputBlock"
import Results from "./components/Results"
import { useState } from "react";



function App() {
  const [inputs, setInputs] = useState({
      initialInvestment: '10000',
      annualInvestment: '1000',
      expectedReturn: '5',
      duration: '20'
  });
  function handleInputChange(inputName, value) {
      setInputs(prevInputs => {
          return {
              ...setInputs,
              [inputName]: value
          }
      })
  }
  return (
    <>
      <Header />
      <InputBlock inputs={inputs} handleInputChange={handleInputChange} />
      <Results inputs={inputs} />
    </>
  )
}

export default App
