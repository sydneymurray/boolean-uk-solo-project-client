import "../styles/StatementSection.css"
import useStore from "../hooks/useStore"
import RenderTransaction from "./RenderTransaction"
import processAccountStatement from "./processAccountStatement"

export default function StatementSection(){
  let accountStatement = useStore(store => store.accountStatement)

  if (!accountStatement) return <>
      <section className="statement-section-container">
        <img className="safe-image" src="./images/MoneySafe.jpeg" alt="Safe"/>
      </section>
    </> 

  let processedStatement = processAccountStatement(accountStatement)

  return <>
    <section className="statement-section-container">
      <article className="transaction">
        <h4 className="table-heading dark-barkground">Date</h4>
        <h4 className="table-heading dark-barkground non-mobile">Account</h4>
        <h4 className="table-heading dark-barkground name">Name</h4>
        <h4 className="table-heading dark-barkground non-mobile">Description</h4>
        <h4 className="table-heading dark-barkground non-mobile right">Paid In</h4>
        <h4 className="table-heading dark-barkground right">Paid Out</h4>
        <h4 className="table-heading dark-barkground right">Balance</h4>
      </article>
      {processedStatement.map((transaction, index) =>
        <RenderTransaction transaction={transaction} key={index}/>)}
    </section>
  </>       
}

