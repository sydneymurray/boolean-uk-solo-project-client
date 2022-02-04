import create from "zustand"
import {accountsURL, updateCustomerURL} from "../components/data"

const useStore = create((set, get)=>({
  loggedInCustomer: null,
  setLoggedInCustomer: customer => set(state => ({loggedInCustomer: customer})),
  accounts: null,
  retrieveAccounts(){
    fetch(accountsURL,{credentials: "include"})
    .then(res=>res.json())
    .then(accounts => set({accounts}))
  },
  retrieveLoggedInCustomer(){
    fetch(updateCustomerURL,{credentials: "include"})
    .then(res=>res.json())
    .then(loggedInCustomer => set({loggedInCustomer}))
  },
  modal: "",
  modalData: {},
  setModal: (modalName, modalData) => {
    set(store => ({modal: modalName, modalData: modalData}))},
  accountStatement: null,
  setAccountStatement: statement => set(() => ({accountStatement: statement})),
  addTransaction: transaction => set(state => ({...state.accountStatement,
    transactions: [transaction, ...state.accountStatement.transactions]})),
}))
export default useStore

