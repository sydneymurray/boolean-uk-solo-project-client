import {accountsURL} from "./data.js"

export default function createNewAccount(newAccount, history, setModal){
  fetch(accountsURL,{
    credentials: "include",
    method:'POST',
    headers:{'Content-Type': 'Application/json'},
    body: JSON.stringify(newAccount)
  })
  .then(resp=>{
    if (resp.ok) {
      setModal("")
      //window.location.reload(false)
      alert(`New Account Successfully Created`)
    } else alert("Account Creation Was Unsuccessful")
  })
}



