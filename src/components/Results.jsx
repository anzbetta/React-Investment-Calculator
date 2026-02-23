import {calculateInvestmentResults, formatter} from "../util/investment";

export default function Results({inputs}) {
    const results = calculateInvestmentResults(inputs);
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result) => {
                    return(
                        <tr key={result.year}>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(result.totalInterest)}</td>
                            <td>{formatter.format(result.totalInvestedCapital)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}