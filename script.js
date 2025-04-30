let output = "";

function press(value) {
    output += value;
    document.querySelector(".display").innerText = output;
}

function cleardisplay() {
    output = "";
    document.querySelector(".display").innerText = output;
}

function delchar() {
    output = output.slice(0, -1);
    document.querySelector(".display").innerText = output;
}

function calculate() {
    try {
        output = eval(output).toString();
        document.querySelector(".display").innerText = output;
    } catch (e) {
        document.querySelector(".display").innerText = "Error";
    }
}
