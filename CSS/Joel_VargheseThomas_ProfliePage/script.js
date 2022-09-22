function changename(name) {
    document.getElementById(name).innerHTML = "Joel V T";
}

function reducecount(request,divname) {
    document.getElementById(request).innerHTML--;
    document.getElementById(divname).remove();
}

function reducecount(request,connections,divname) {
    document.getElementById(request).innerHTML--;
    document.getElementById(connections).innerHTML++;
    document.getElementById(divname).remove();
}