import "../styles/SideBarAccount.css"
import useStore from "../hooks/useStore"
import {accountStatementURL} from "./data"

export default function SideBarAccount({account}){
  let setAccountStatement = useStore(store => store.setAccountStatement)

  function handleClick(){
    retrieveTransactions()
    
    function retrieveTransactions(){
      fetch(accountStatementURL,{
        method:"GET",
        headers:{accountid: account.accountID},
        credentials: "include"})
        .then(res=>res.json())
        .then(transactions => setAccountStatement({account,transactions}))
    }
  }

  return <>
    <h4 className="account-h2" key={account.accountID} onClick={handleClick}>
      <span className="sidebar-account-type">{account.type}: </span> 
      <span className="sidebar-account-number">{account.accountID}</span>
    </h4>
  </>       
}




