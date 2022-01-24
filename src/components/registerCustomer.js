import {registerURL} from "./data.js"

export default function registerCustomer(newCustomer, setModal){
  fetch(registerURL,{
    credentials: "include",
    method:'POST',
    headers:{'Content-Type': 'Application/json'},
    body: JSON.stringify(newCustomer)
  })
  .then(resp=>{
    if (resp.ok) {
      setModal("")
      alert(`Registration Successful: Please Login with username ${newCustomer.userName}`)
    } 
    else alert("Incorrect Registration Details. Try using a different username.")
  })
}



