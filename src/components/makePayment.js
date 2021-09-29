import {transactionsURL} from "./data.js"

export default function makePayment(transactionData, history, setModal, setAccountStatement, accountStatement) {
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
    setTimeout(() => setAccountStatement(accountStatement), 5000)
    //history.push("/accounts")
  })
}
  

/*
export default async function makePayment(transactionData, history, setModal) {
    let dbResponse = await fetch(transactionsURL, {
      credentials: "include",
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(transactionData)
    })
    if (dbResponse.ok){
      setModal("")
      alert("Payment Succesful")  
      //history.push("/accounts")
    } 
    else {
      if (dbResponse.status===404){ 
        alert(`Payee Account ${transactionData.payeeAccount} Does Not Exist.`)
        return
      }
      if (dbResponse.status===901){ 
        alert(`Payment Unsuccesful. Insuffient Funds.`)
        return
      }
      alert("An Error Occurred.")   
    }
  }

  */














