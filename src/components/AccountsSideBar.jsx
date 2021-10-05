import "../styles/AccountsSideBar.css"
import useStore from "../hooks/useStore"
import SideBarAccount from "./SideBarAccount"

export default function AccountsSideBar(){
  const setModal = useStore(store => store.setModal)
  let accounts = useStore(store => store.accounts)
  let loggedInCustomer = useStore(store => store.loggedInCustomer)
  console.log(accounts)
  console.log(loggedInCustomer)

  if (!loggedInCustomer || !accounts) return <></>

  return <>
    <section className="account-sidebar-container">
      <h2 className="sidebar-customer-name" onClick={() => setModal("customerDetails")}>
        {loggedInCustomer.firstName} {loggedInCustomer.lastName}</h2>    
      {accounts.map((account, index) => <SideBarAccount key={index} account={account}/>)}    
    </section>
  </>       
}

