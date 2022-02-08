import saveUpdatedCustomer from "./saveUpdatedCustomer";
import "../styles/RegisterModal.css";
import  useStore from "../hooks/useStore";

export default function ModalPopUp() {
  const setModal = useStore(store => store.setModal)
  const setLoggedInCustomer = useStore(store => store.setLoggedInCustomer)
  let loggedInCustomer = useStore(store => store.loggedInCustomer)

  function updateCustomer(event){
    event.preventDefault()
    const updatedCustomer = {
      firstName: capFirstChar(event.target.firstName.value),
      lastName: capFirstChar(event.target.lastName.value),
      userName: event.target.userName.value,
      email: event.target.email.value,
      active: true
    }
    function capFirstChar(name){  
      return name.charAt(0).toUpperCase() + name.slice(1)
    }
    saveUpdatedCustomer(updatedCustomer, setModal, loggedInCustomer, setLoggedInCustomer)
  }

  return <>
    <form onSubmit={updateCustomer} className="modal-background">
      <div className="modal">
        <h1>DETAILS</h1>
        <div className="register-input-container">
          <label className="register-label-firstname">First Name:</label>
          <input className="register-input-firstname" type="text" name="firstName" 
            defaultValue={loggedInCustomer.firstName} required/>
          <label className="register-label-lastname">Last Name:</label>
          <input className="register-input-lastname" type="text" name="lastName"
            defaultValue={loggedInCustomer.lastName} required/>
          <label className="register-label-email">eMail:</label>
          <input className="register-input-email" type="email" name="email"
            defaultValue={loggedInCustomer.email} required/>
          <label className="register-label-username">Username:</label>
          <input className="register-input-username" type="text" name="userName"
            defaultValue={loggedInCustomer.userName} required/>
        </div>
        <button type="submit" className="modalregisterbutton" onSubmit={updateCustomer}>
          Update</button>
        <img className="modal-close" src="./close-button.svg" onClick={() => setModal("")} alt=""/>
      </div>
    </form>
  </>
}

