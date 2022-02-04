import {transactionsURL} from "./data.js"
import updateSelectedAccount from "./updateSelectedAccount"

export default function makePayment(transactionData, setModal, setAccountStatement, accountStatement) {
  fetch(transactionsURL, {
    credentials: "include",
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(transactionData)
  })
  .then(promise=> promise.json())
  .then(dbResponse=>{
    if(dbResponse.msg){
      alert(dbResponse.msg)
      return
    }    
    setModal("")
    alert("Payment Succesful")
    if (accountStatement!==null) updateSelectedAccount(setAccountStatement, accountStatement) 
  })
}












