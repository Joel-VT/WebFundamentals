function changetext(element){
    if(element.innerText === "Login"){
        element.innerText = "LogOut";
    }
    else {
        element.innerText = "Login";
    }
}

function hide(element){
    element.remove();
}