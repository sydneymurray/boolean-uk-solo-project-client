import "../styles/CreatNewAccountModal.css"
import {useHistory} from "react-router-dom"
import {accountsURL} from "./data";
import  useStore from "../hooks/useStore"
import {useEffect, useState} from "react"
import makePayment from "./makePayment"
import {accountStatementURL} from "./data"
import createNewAccount from "./createNewAccount";

export default function ModalPopUp() {
  let parentAccountPage = window.location.reload()
  let history = useHistory()  
  let setAccountStatement = useStore(store => store.setAccountStatement)
  let accountStatement = useStore(store => store.accountStatement)
  const setModal = useStore(store => store.setModal)
  let loggedInCustomer = useStore(store => store.loggedInCustomer)
  if (!loggedInCustomer) return <></>

  function handleSubmit(event){
    event.preventDefault()
    const accountData = {
      type: event.target.accountType.value
    }
    createNewAccount(accountData, history, setModal)
  }
  return <>
    <form onSubmit={handleSubmit} className="modal-background">
      <div className="modal">
        <h1>Create New Account</h1>
        <div className="pay-modal-container">

          <label className="account-type-label">Account Type:</label>
          <select name="accountType" className="account-type-selection">
            <option value="">--SELECT-A-TYPE--</option>
            <option value="BUSINESS">BUSINESS</option>
            <option value="CURRENT">CURRENT</option>
            <option value="SAVINGS">SAVINGS</option>
          </select>

        </div>
        <button type="submit" className="modal-pay-button" onSubmit={handleSubmit}>
          Create Account</button>
        <img className="modal-close" src="./close-button.svg" onClick={() => setModal("")} alt=""/>
      </div>
    </form>
  </>

}


