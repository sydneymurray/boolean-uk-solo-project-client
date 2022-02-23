import "../styles/RenderTransaction.css"

export default function RenderTransaction({transaction}){
return <>
    <article className="transaction">
      <span className="transaction-element">{transaction.date}</span>
      <span className="transaction-element non-mobile">{transaction.otherPartiesAccount}</span>
      <span className="transaction-element">{transaction.otherPartiesName}</span>
      <span className="transaction-element non-mobile">{transaction.comments}</span>
      <span className="transaction-element non-mobile right">{transaction.payedIn}</span>
      <span className="transaction-element right">{transaction.payedOut}</span>
      <span className="transaction-element right">{transaction.balance}</span>
    </article>
  </>       
}


