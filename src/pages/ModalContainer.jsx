import useStore from "../hooks/useStore"
import React from "react"

import RegisterModal from "../components/RegisterModal"
import LoginModal from "../components/LoginModal"
import CustomerDetailsModal from "../components/CustomerDetailsModal"
import PaymentModal from "../components/PaymentModal"
import WithdrawModal from "../components/WithdrawModal"
import CreateNewAccountModal from "../components/CreateNewAccountModal"
//import LoanModal from "../components/LoanModal"

const modals = {
  "": null,
  registerCustomer: RegisterModal,
  loginCustomer: LoginModal,
  customerDetails: CustomerDetailsModal,
  payment: PaymentModal,
  withdraw: WithdrawModal,
  newAccount: CreateNewAccountModal
  // loan: LoanModal,
}

export function ModalContainer() {
  const modal = useStore((store) => store.modal)
  const Modal = modals[modal]

  if (!Modal) return null
  return <Modal />
}


