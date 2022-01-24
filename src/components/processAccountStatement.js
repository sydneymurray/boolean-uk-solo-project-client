export default function processAccountStatement(accountStatement){
    let processedStatement = []
    let balance=0
    
    for (let i = accountStatement.transactions.length-1; i > -1 ; i--){
    let processedTransaction = {}

    let dateString = accountStatement.transactions[i].date.toString()
    processedTransaction.date = (
        dateString.slice(8,10)+"/"+dateString.slice(5,7)+"/"+dateString.slice(0,4))

    if(accountStatement.account.accountID===accountStatement.transactions[i].payeeAccount){
        processedTransaction.otherPartiesName = retrievePayerAccountName(accountStatement.transactions[i])
        processedTransaction.otherPartiesAccount = retrievePayerAccountNumber(accountStatement.transactions[i])
        processedTransaction.comments = accountStatement.transactions[i].comments
        processedTransaction.payedIn = "£"+accountStatement.transactions[i].amount
        processedTransaction.payedOut = ""
        balance+=accountStatement.transactions[i].amount
        processedTransaction.balance = "£"+balance.toString()
    }  
    else{
        processedTransaction.otherPartiesName = retrievePayeeAccountName(accountStatement.transactions[i])
        processedTransaction.otherPartiesAccount = accountStatement.transactions[i].payeeAccount
        processedTransaction.comments = accountStatement.transactions[i].comments
        processedTransaction.payedIn = ""
        processedTransaction.payedOut = "£"+accountStatement.transactions[i].amount
        balance-=accountStatement.transactions[i].amount
        processedTransaction.balance = "£"+balance.toString()
    } 
    
    processedStatement = [processedTransaction, ...processedStatement]
  }
  return processedStatement
}

function retrievePayerAccountNumber(transaction){ 
    if(transaction.payerAccount===null) return ""
    return transaction.payerAccount
}

function retrievePayerAccountName(transaction){ 
    if(transaction.payerAccount===null) return "CASH PAYMENT"
    return transaction.accounts_accountsTotransactions_payerAccount.customers.firstName+" "+
        transaction.accounts_accountsTotransactions_payerAccount.customers.lastName
}

function retrievePayeeAccountName(transaction){
    if(transaction.payeeAccount===null) return "CASH WITHDRAWAL" 
    return transaction.accounts_accountsTotransactions_payeeAccount.customers.firstName+" "+
        transaction.accounts_accountsTotransactions_payeeAccount.customers.lastName
}

