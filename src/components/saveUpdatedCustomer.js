import {updateCustomerURL} from "./data.js"

export default function saveUpdatedCustomer(updatedCustomer, setModal, loggedInCustomer, setLoggedInCustomer){
  fetch(updateCustomerURL,{
    credentials: "include",
    method:'PATCH',
    headers:{'Content-Type': 'Application/json'},
    body: JSON.stringify(updatedCustomer)
  })
  .then(resp=>{
    if (resp.ok) {
      setModal("")
      alert(`Update Successful`)
      updatedCustomer.customerID = loggedInCustomer.customerID
      setLoggedInCustomer(updatedCustomer)
    } else alert("Update unsuccessful. Try a different username")
  })
}
