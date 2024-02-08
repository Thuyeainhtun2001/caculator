// for display
let outputdisplay = document.getElementById("outputdisplay");
console.log(outputdisplay);
// for clear
let clear = document.getElementById("clear");
console.log(clear);
// for caculate
let caculate = document.getElementById("caculate");
console.log(caculate);
// for number
let number = document.getElementsByClassName("number");
console.log(number);
// for loop for number
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    console.log(element);
    number[i].addEventListener("click", function (){
        outputdisplay.innerHTML += number[i].innerHTML;
    })  
}
// for clear
clear.addEventListener("click", function(){
    outputdisplay.innerHTML = "";
})
// for calculate
caculate.addEventListener("click", function(){
    let result = eval(outputdisplay.innerHTML);
    console.log(result);
    outputdisplay.innerHTML = result;
})