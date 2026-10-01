console.log("Spice Garden website loaded!");

const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        console.log("Button clicked");

    });

});