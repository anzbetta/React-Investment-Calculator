import Header from "./components/Header"
import InputBlock from "./components/InputBlock"

  const [inputs, setInputs] = useState({
      initialInvestment: '10000',
      annualInvestment: '1000',
      expectedReturn: '5',
      investmentDuration: '20'
  });
  function handleInputChange(inputName, value) {
      setInputs(setInputs => {
          return {
              ...setInputs,
              [inputName]: value
          }
      })
  }

function App() {
  return (
    <>
      <Header />
      <InputBlock inputs={inputs} handleInputChange={handleInputChange} />
    </>
  )
}

export default App
