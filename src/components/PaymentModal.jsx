import "../styles/PaymentModal.css"
import  useStore from "../hooks/useStore"
import makePayment from "./makePayment"

export default function ModalPopUp() {
  const setModal = useStore(store => store.setModal)
  let setAccountStatement = useStore(store => store.setAccountStatement)
  let accountStatement = useStore(store => store.accountStatement)
  let accounts = useStore(store => store.accounts)
  let loggedInCustomer = useStore(store => store.loggedInCustomer)
  if (!loggedInCustomer || !accounts) return <></>
  accounts = [
    {type: "", accountID: "---SELECT-AN-ACCOUNT---"},
    {type: "", accountID: "CASH PAYMENT"},...accounts]

  function handleSubmit(event, accountStatement){
    event.preventDefault()
    const paymentData = {
      payerAccount: Number(event.target.payerAccount.value),
      payeeAccount: Number(event.target.payeeAccount.value),
      amount: Number(event.target.amount.value),
      comments: event.target.comments.value
    }
    makePayment(paymentData, setModal, setAccountStatement, accountStatement)
  }
    
  return <>
    <form className="modal-background" onSubmit={event=>{
      handleSubmit(event, accountStatement)}}>

      <div className="modal">
        <h1>Make A Payment</h1>
        <div className="pay-modal-container">

          <label className="payment-account-label">Account Number:</label>
          <select name="payerAccount" className="payment-account-selection">
            {accounts.map(account => <option key={account.accountID} value={account.accountID}>
              {account.type+": "+account.accountID}</option>)}
          </select>

          <label className="payment-amount-label">Amount:</label>
          <input className="payment-amount-input" type="number" name="amount"
            defaultValue="" required/>

          <label className="payee-account-label">Account:</label>
          <input className="payee-account-input" type="number" name="payeeAccount"
            defaultValue="" required/>

          <label className="payment-comments-label">Description:</label>
          <input className="payment-comments-input" type="text" name="comments"
            defaultValue="" required/>

        </div>

        <button type="submit" className="modal-pay-button">
          Pay</button>

        <img className="modal-close" src="./close-button.svg" onClick={() => setModal("")} alt=""/>
      </div>
    </form>
  </>

}


