import "../styles/PaymentModal.css"
import {accountsURL} from "./data";
import  useStore from "../hooks/useStore"
import {useEffect, useState} from "react"
import makePayment from "./makePayment"

export default function ModalPopUp() {
  const accountStatement = useStore(store => store.accountStatement)
  const setAccountStatement = useStore(store => store.setAccountStatement)  
  let [accounts, setAccounts] = useState(null)
  useEffect(retrieveAccounts,[])
  const setModal = useStore(store => store.setModal)
  let loggedInCustomer = useStore(store => store.loggedInCustomer)
  if (!loggedInCustomer) return <></>
  if (!accounts) return<></>
  accounts = [{type: "", accountID: "---SELECT-AN-ACCOUNT---"},...accounts]

  function retrieveAccounts(){
    fetch(accountsURL,{credentials: "include"})
    .then(res=>res.json())
    .then(accounts => setAccounts(accounts))
  }

  function handleSubmit(event){
    event.preventDefault()
    const paymentData = {
      payerAccount: Number(event.target.payerAccount.value),
      amount: Number(event.target.amount.value),
      comments: event.target.comments.value
    }
    makePayment(paymentData, setModal, setAccountStatement, accountStatement)
  }

  return <>
    <form onSubmit={handleSubmit} className="modal-background">
      <div className="modal">
        <h1>Withdraw Funds</h1>
        <div className="pay-modal-container">

          <label className="payment-account-label">Account Number:</label>
          <select name="payerAccount" className="payment-account-selection">
            {accounts.map(account => <option key={account.accountID} value={account.accountID}>
              {account.type+": "+account.accountID}</option>)}
          </select>

          <label className="payment-amount-label">Amount:</label>
          <input className="payment-amount-input" type="number" name="amount"
            defaultValue="" required/>

          <label className="payment-comments-label">Description:</label>
          <input className="payment-comments-input" type="text" name="comments"
            defaultValue="" required/>

        </div>
        <button type="submit" className="modal-pay-button" onSubmit={handleSubmit}>
          Withdraw</button>
        <img className="modal-close" src="./close-button.svg" onClick={() => setModal("")} alt=""/>
      </div>
    </form>
  </>

}


