// Function to add to the score

function add1(id) {
    document.getElementById(id).innerHTML++;
}

// Function to remove subscribe div

function removesub(divname) {
    document.getElementById(divname).remove();
}

// Function to alert 

function alertfunction(){
    alert("The Ninjas have won!");
}

setTimeout(alertfunction,13000);