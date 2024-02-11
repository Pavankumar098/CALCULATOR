window.onload = function() {
    var input = document.getElementById("inputBox");
    var container = document.getElementById("container");

    container.addEventListener("click", function(e) {
        buttonClick(e.target);
    });

    function buttonClick(button) {
        if(button.tagName === "INPUT") {
            var buttonValue = button.value;
            if(buttonValue !== "C" && buttonValue !== "=") {
                input.value += buttonValue;
            } else if(buttonValue === "C") {
                erase();
            } else if(buttonValue === "=") {
                calculate();
            }
        }
    }

    function calculate() {
        try {
            input.value = eval(input.value);
        } catch(error) {
            alert("Invalid expression");
        }
    }

    function erase() {
        input.value = "";
    }
};
