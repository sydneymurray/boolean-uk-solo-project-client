/* NOT YET IMPLEMENTED

import "../styles/PaymentModal.css";
import {accountsURL} from "./data";
import  useStore from "../hooks/useStore";
import {useEffect, useState} from "react";

export default function ModalPopUp() {
  console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
  let [accounts, setAccounts] = useState(null)
  useEffect(retrieveAccounts,[])
  const setModal = useStore(store => store.setModal)
  let loggedInCustomer = useStore(store => store.loggedInCustomer)
  if (!loggedInCustomer) return <></>
  if (!accounts) return<></>
  console.log(accounts)

  function retrieveAccounts(){
    fetch(accountsURL,{credentials: "include"})
    .then(res=>res.json())
    .then(accounts => setAccounts(accounts))
  }
  function handleSubmit(){

  }
  return <>
    <form onSubmit={handleSubmit} className="modal-background">
      <div className="modal">
        <h1>DETAILS</h1>
        <div className="register-input-container">
          <label className="register-label-firstname">First Name:</label>
          <input className="register-input-firstname" type="text" name="firstName" 
            defaultValue={loggedInCustomer.firstName} required/>
          <label className="register-label-lastname">Last Name:</label>
          <input className="register-input-lastname" type="text" name="lastName"
            defaultValue={loggedInCustomer.lastName} required/>
          <label className="register-label-email">eMail:</label>
          <input className="register-input-email" type="email" name="email"
            defaultValue={loggedInCustomer.email} required/>
          <label className="register-label-username">Username:</label>
          <input className="register-input-username" type="text" name="userName"
            defaultValue={loggedInCustomer.userName} required/>
        </div>
        <button type="submit" className="modalregisterbutton" onSubmit={handleSubmit}>
          Update</button>
        <img className="modal-close" src="./close-button.svg" onClick={() => setModal("")} alt=""/>
      </div>
    </form>
  </>

}

/*
  return <>
    <form onSubmit={updateCustomer} className="modal-background">
      <div className="modal">
        <h1>DETAILS</h1>
        <div className="register-input-container">
          <label className="register-label-firstname">First Name:</label>
          <input className="register-input-firstname" type="text" name="firstName" 
            defaultValue={loggedInCustomer.firstName} required/>
          <label className="register-label-lastname">Last Name:</label>
          <input className="register-input-lastname" type="text" name="lastName"
            defaultValue={loggedInCustomer.lastName} required/>
          <label className="register-label-email">eMail:</label>
          <input className="register-input-email" type="email" name="email"
            defaultValue={loggedInCustomer.email} required/>
          <label className="register-label-username">Username:</label>
          <input className="register-input-username" type="text" name="userName"
            defaultValue={loggedInCustomer.userName} required/>
        </div>
        <button type="submit" className="modalregisterbutton" onSubmit={updateCustomer}>
          Update</button>
        <img className="modal-close" src="./close-button.svg" onClick={() => setModal("")} alt=""/>
      </div>
    </form>
  </>
*/

