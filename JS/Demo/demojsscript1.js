// function printdefault(element){
//     console.log(element);
// }

// function hide(element) {
//     element.remove();
// }

function addshadow(element) {
    element.classList.add("shadow");
}

function removeshadow(element) {
    element.classList.remove("shadow");
}

var count=1;
var x = document.querySelector("h2");

function add() {
    count++;
    x.innerText = "The count is "+count;
}
function sub() {
    count--;
    x.innerText = "The count is "+count;
}