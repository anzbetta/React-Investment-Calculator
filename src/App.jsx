import Header from "./components/Header"
import InputBlock from "./components/InputBlock"
import Results from "./components/Results"
import { validateInvestmentInputs } from "./util/validation";
import { useState } from "react";



function App() {
  const [inputs, setInputs] = useState({
      initialInvestment: '10000',
      annualInvestment: '1000',
      expectedReturn: '5',
      duration: '20'
  });
  
  function handleInputChange(inputName, value) {
    setInputs(prev => ({
      ...prev,
      [inputName]: value === '' ? '' : +value
    }));
  }
  const { errors } = validateInvestmentInputs(inputs);

  return (
    <>
      <Header />
      <InputBlock inputs={inputs} handleInputChange={handleInputChange} />
      {errors.length === 1 && (
        <p className="center">{errors[0]}</p>
      )}
      
      {errors.length > 1 && (
        <p className="center">Please enter valid data.</p>
      )}
      {errors.length === 0 && <Results inputs={inputs} />}
    </>
  )
}

export default App
