import "../styles/LoginModal.css"
import  useStore from "../hooks/useStore"
import {useHistory} from "react-router-dom"
import loginCustomer from "./loginCustomer"

export default function ModalPopUp() {
  const setModal = useStore((store) => store.setModal)
  const setLoggedInCustomer = useStore(store => store.setLoggedInCustomer)
  const history = useHistory()
  
  function handleSubmit(event){
    event.preventDefault()

    const customer = {
      userName: event.target.userName.value,
      password: event.target.password.value
    }
    loginCustomer(customer, history, setModal, setLoggedInCustomer)    
  }

  return <>
    <form onSubmit={handleSubmit} className="modal-background">
      <div className="modal">
        <h1>SIGN IN</h1>
        <div className="login-input-container">
          <label className="login-label-username">Username:</label>
          <input className="login-input-username" type="text" name="userName" required/>
          <label className="login-label-password">Password:</label>
          <input className="login-input-password" type="password" name="password" required/>
        </div>
        <button type="submit" className="modalloginbutton" onSubmit={handleSubmit}>Login</button>
        <img className="modal-close" src="./close-button.svg" onClick={() => setModal("")} alt=""/>
      </div>
    </form>
  </>
}


