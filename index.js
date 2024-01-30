function displayvalue(val) {
    document.getElementById("display").value = document.getElementById("display").value + val;
}
function clearvalue() {
    document.getElementById("display").value = ""
}
function calculate() {
    let userInput = document.getElementById("display").value;
    var result=eval(userInput)
    document.getElementById("display").value=result;
}