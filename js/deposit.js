// Bank-page js code
// -------------------
// -------------   Deposit   -------------
document.getElementById("btn-deposit").addEventListener("click", function(){
    // step-1: deposit get &  calculation
    // 1. get deposit field by function
    // 2. get deposit amount from withdrawal field by function
    // 3. addition with previews and new deposit amount
    const newDepositAmount = getInputFieldValueById("deposit-field");
    const previewsDepositAmount = getElementValueById("deposit-balance");
    const newDepositTotal = previewsDepositAmount + newDepositAmount;
    // step-2: calculation main balance
    // 1. get main balance by function
    // 2. subtraction main balance and with deposit amount
    const previewsMainBalanceAmount = getElementValueById("main-balance");
    const newBalanceTotal = previewsMainBalanceAmount + newDepositAmount;
    // step-3: delay function execute for look like real transition
    setTimeout(function() {
        // step-4: update deposit balance & main balance by function
        setTextElementValueById("deposit-balance", newDepositTotal);
        setTextElementValueById("main-balance", newBalanceTotal);
    }, 2000); // 2000 = 2 second
})





/* 
// previews code without function and utilities & with repeat code and process
// -------------------
// -------------   Deposit   -------------
// step-1: add click event handler with deposit button
document.getElementById("btn-deposit").addEventListener("click", function(){
    // step-2: get the deposit amount inside the deposit amount input field
    // always remember to use .value to get text form an input field
    const depositField = document.getElementById("deposit-field");
    const newDepositAmountString = depositField.value;
    // step-2.5.1: convert input string amount to integer
    const newDepositAmount = parseInt(newDepositAmountString);
    // step-5.2: clear the deposit field
    depositField.value = "";
    // step-2.5.3: input empty amount alert
    if (isNaN(newDepositAmount)){
        alert("YOU DIDN'T INPUT A DEPOSIT AMOUNT");
        return;
    }
    // step-3: get the current deposit balance
    // for non-input element use ("innerText") to get the text
    const depositBalance = document.getElementById("deposit-balance");
    const previewsDepositBalanceString = depositBalance.innerText;
    // step-3.5: convert input string amount to integer
    const previewsDepositBalance = parseInt(previewsDepositBalanceString);
    // step-4: Delay the action by 2 seconds
    setTimeout(function() {
        // step-5: update deposit balance
        currentDepositBalance = previewsDepositBalance + newDepositAmount;
        depositBalance.innerText = currentDepositBalance;
        // step-6: get the current main balance
        // for non-input element use ("innerText") to get the text
        const mainBalance = document.getElementById("main-balance");
        const previewsMainBalanceString = mainBalance.innerText;
        // step-6.5: convert input string amount to integer
        const previewsMainBalance = parseInt(previewsMainBalanceString);
        // step-7: update main balance
        currentMainBalance = previewsMainBalance + newDepositAmount;
        mainBalance.innerText = currentMainBalance;
    }, 2000); // 2000 = 2 second
})
*/