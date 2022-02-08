import "../styles/CreatNewAccountModal.css"
import useStore from "../hooks/useStore"
import createNewAccount from "./createNewAccount";

export default function ModalPopUp() {
  const retrieveAccounts = useStore(store => store.retrieveAccounts)
  const setModal = useStore(store => store.setModal)
  let loggedInCustomer = useStore(store => store.loggedInCustomer)
  if (!loggedInCustomer) return <></>

  function handleSubmit(event){
    event.preventDefault()
    const accountData = {
      type: event.target.accountType.value
    }
    createNewAccount(accountData, setModal, retrieveAccounts)
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




