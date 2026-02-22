import { useState } from "react";


export default function InputBlock() {
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

    return(
        <section id = "user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input type="number" id="initial-investment" value = {inputs.initialInvestment} onChange={(event) => handleInputChange("initialInvestment", event.target.value)}/>
                </p>
                <p>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input type="number" id="annual-investment" value = {inputs.annualInvestment} onChange={(event) => handleInputChange("annualInvestment", event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input type="number" id="expected-return" value = {inputs.expectedReturn} onChange={(event) => handleInputChange("expectedReturn", event.target.value)}/>
                </p>
                <p>
                    <label htmlFor="investment-duration">Investment Duration</label>
                    <input type="number" id="investment-duration" value = {inputs.investmentDuration} onChange={(event) => handleInputChange("investmentDuration", event.target.value)}/>
                </p>
            </div>
        </section>
    )
}