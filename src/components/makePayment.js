import {transactionsURL} from "./data.js"

export default function makePayment(transactionData, setModal, setAccountStatement, accountStatement) {
  fetch(transactionsURL, {
    credentials: "include",
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(transactionData)
  })
  .then(promise=> promise.json())
  .then(dbResponse=>{
    console.log(accountStatement)
    if(dbResponse.msg){
      alert(dbResponse.msg)
      return
    }    
    setModal("")
    alert("Payment Succesful")
    accountStatement.transactions = [dbResponse, ...accountStatement.transactions]
    let clearedTransactions = accountStatement.account
    clearedTransactions.transactions = []
    setAccountStatement(clearedTransactions)
    setAccountStatement(accountStatement)
  })
}
  














