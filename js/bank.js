// Login-page js code
// -------------------
// step-1: add click event handler with submit button
document.getElementById("btn-submit").addEventListener("click", function(){
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text form an input field
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    // step-3: get password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    // Delay the action by 2 seconds
    setTimeout(function() {
        // step-4: verify email & password
        // Danger:  Do not verify email & password on client side
        if(email === "human@gmail.com" && password === "password"){
            window.location.href = "bank.html";
        }
        else if(email !== "human@gmail.com"){
            emailField.style.border = "2px solid rgba(255, 0, 0, 0.678)";
        }
        else if(password !== "password"){
            passwordField.style.border = "2px solid rgba(255, 0, 0, 0.678)";
        }
        else {
            emailField.style.border = "2px solid rgba(255, 0, 0, 0.678)";
            passwordField.style.border = "2px solid rgba(255, 0, 0, 0.678)";
        }
    }, 2000); // 2000 = 2 second
})