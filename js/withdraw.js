// Bank-page js code
// -------------------
// -------------   Withdraw   -------------
document.getElementById("btn-withdraw").addEventListener("click", function(){
    // step-1: withdrawal get &  calculation
    // 1. get withdrawal field by function
    // 2. get withdrawal amount from withdrawal field by function
    // 3. addition with previews and new withdrawal amount
    const newWithdrawalAmount = getInputFieldValueById("withdrawal-field");
    const previewsWithdrawalAmount = getElementValueById("withdrawal-balance");
    const newWithdrawalTotal = previewsWithdrawalAmount + newWithdrawalAmount;
    // step-2: calculation main balance
    // 1. get main balance by function
    // 2. subtraction main balance and with withdrawal amount
    const previewsMainBalanceAmount = getElementValueById("main-balance");
    const newBalanceTotal = previewsMainBalanceAmount - newWithdrawalAmount;
    // step-3: delay function execute for look like real transition
    setTimeout(function() {
        // step-4: insufficient balance alert
        // 1. compare withdrawal amount with main balance
        // 2. set alert and set return to don't execute more code
        if(newWithdrawalAmount > previewsMainBalanceAmount){
            alert("YOU DON'T HAVE SUFFICIENT BALANCE FOR THIS TRANSACTION");
            return;
        }
        // step-5: update withdrawal balance & main balance by function
        setTextElementValueById("withdrawal-balance", newWithdrawalTotal);
        setTextElementValueById("main-balance", newBalanceTotal);
    }, 2000); // 2000 = 2 second
})





/*
// previews code without function and utilities & with repeat code and process
// -------------------
// -------------   Withdraw   -------------
// step-1: add click event handler with withdrawal button
document.getElementById("btn-withdraw").addEventListener("click", function(){
    // step-2: get the withdrawal amount inside the withdrawal amount input field
    // always remember to use .value to get text form an input field
    const withdrawalField = document.getElementById("withdrawal-field");
    const newWithdrawalAmountString = withdrawalField.value;
    // step-2.5.1: convert input string amount to integer
    const newWithdrawalAmount = parseInt(newWithdrawalAmountString);
    // step-2.5.2: clear the withdrawal field
    withdrawalField.value = "";
    // step-2.5.3: input empty amount alert
    if (isNaN(newWithdrawalAmount)){
        alert("YOU DIDN'T INPUT A WITHDRAWAL AMOUNT");
        return;
    }
    // step-3: get the current withdrawal balance
    // for non-input element use ("innerText") to get the text
    const withdrawalBalance = document.getElementById("withdrawal-balance");
    const previewswithdrawalBalanceString = withdrawalBalance.innerText;
    // step-3.5: convert input string amount to integer
    const previewsWithdrawalBalance = parseInt(previewswithdrawalBalanceString);
    // step-4: Delay the action by 2 seconds
    setTimeout(function() {
        // step-5: get the current main balance
        // for non-input element use ("innerText") to get the text
        const mainBalance = document.getElementById("main-balance");
        const previewsMainBalanceString = mainBalance.innerText;
        // step-5.5: convert input string amount to integer
        const previewsMainBalance = parseInt(previewsMainBalanceString);
        // step-6: add inefficient balance alert
        if(newWithdrawalAmount > previewsMainBalance){
            alert("YOU DON'T HAVE SUFFICIENT BALANCE FOR THIS TRANSACTION");
            return;
        }
        // step-7: update withdrawal balance
        currentWithdrawalBalance = previewsWithdrawalBalance + newWithdrawalAmount;
        withdrawalBalance.innerText = currentWithdrawalBalance;
        // step-8: update main balance
        currentMainBalance = previewsMainBalance - newWithdrawalAmount;
        mainBalance.innerText = currentMainBalance;
    }, 2000); // 2000 = 2 second
})
*/