function getNumber(num){
 
    var result = document.getElementById("final");
    result.value += num;
}

function clearResult(){
    var result = document.getElementById("final");
    result.value = ""
}
function getResult(){
    var result = document.getElementById("final");
    result.value = eval(result.value)
}
function back(){
    var result = document.getElementById("final");
    result.value = result.value.slice(0,-1)
}
