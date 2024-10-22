function appendnumber(num) {
    let output = document.getElementById("appendnumber");  
    output.value += num;  
}
function calculation(){
    try{
        let output = document.getElementById("appendnumber");
        output.value=eval(output.value);
    }
    catch(err){
        alert("invalid input!");
    }
}
function cleaar(){
    let output = document.getElementById("appendnumber");
    output.value="";
}
function clearone(){
    output=document.getElementById("appendnumber");
    output.value=output.value.slice(0,-1);
}