import {accountStatementURL} from "./data.js"

export default function updateSelectedAccount(setAccountStatement, accountStatement){
  let clearedTransactions = accountStatement
  clearedTransactions.transactions = []
  setAccountStatement(clearedTransactions)
  console.log("updateSelectedAccount")  
  
  let account = accountStatement.account
  fetch(accountStatementURL,{
    method:"GET",
    headers:{accountid: accountStatement.account.accountID},
    credentials: "include"})
  .then(res=>res.json())
  .then(transactions => {
    setAccountStatement({account, transactions})
  })
}
