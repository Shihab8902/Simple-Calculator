// Element Selection
const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");
let string = " ";
//Adding Event listeners
buttons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            display.value = string;
        }else if(e.target.innerHTML == "x"){
            string = "";
            display.value = string;
        }
        else{
            string = string + e.target.innerHTML;
            display.value = string;
        }
    })
})