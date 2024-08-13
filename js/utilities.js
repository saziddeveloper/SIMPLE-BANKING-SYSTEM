// function for get input field value
function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseInt(inputFieldValueString);
    inputField.value = " ";
    if (isNaN(inputFieldValueString)){
        alert("INPUT A AMOUNT");
        return;
    }
    return inputFieldValue;
}
// function for get new input value
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseInt(elementValueString);
    return value;
}
// function for update balance
function setTextElementValueById(elementId, newValue){
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}