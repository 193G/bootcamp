// var myButton = document.querySelector("#change-btn");
var myButton = $("#change-btn")

// var myBox1 = document.querySelector("#box-1")
var myBox1 = $("#box-1")

function changeColor() {
    // myBox1.style.backgroundColor = "blue"
    myBox1.css("background-color", "blue");
    myBox1.css("height", "400px")
}

// myButton.addEventListener("click", changeColor)
myButton.on("click", changeColor)