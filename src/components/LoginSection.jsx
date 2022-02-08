import "../styles/LoginSection.css";
import useStore from "../hooks/useStore";

export default function LoginSection(){
  const setModal = useStore((store) => store.setModal);
  //console.log(process.env.REACT_APP_API_URL)
  
  return <>
    <section className="loginsection-container">
      <button className="login-button" onClick={() => setModal("loginCustomer")}>Log In</button>    
      <button className="register-button" onClick={() => setModal("registerCustomer")}>Register</button>    
    </section>
  </>       
}
