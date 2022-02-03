import {accountsURL} from "./data.js"

export default function createNewAccount(newAccount, setModal, retrieveAccounts){
  fetch(accountsURL,{
    credentials: "include",
    method:'POST',
    headers:{'Content-Type': 'Application/json'},
    body: JSON.stringify(newAccount)
  })
  .then(resp=>{
    if (resp.ok) {
      setModal("")
      alert(`New Account Successfully Created`)
      retrieveAccounts()
    } else alert("Account Creation Was Unsuccessful")
  })
}


