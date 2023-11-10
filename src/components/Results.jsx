import { calculateInvestmentResults, formatter } from "../util/investment.js";
export default function Results({ input }) {
  const resultsdata = calculateInvestmentResults(input);
  const initialInvestment =
    resultsdata[0].valueEndOfYear -
    resultsdata[0].interest -
    resultsdata[0].annualInvestment;
  console.log(resultsdata);
  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {resultsdata.map((yearData) => {
          const totalinterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalamountinvested = yearData.valueEndOfYear - totalinterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalinterest)}</td>
              <td>{formatter.format(totalamountinvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
