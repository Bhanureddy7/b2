let Countervalue=document.getElementById("countervalue");

function onIncrement(){
let previousCountervalue = Countervalue.textContent;
let updatedCountervalue = parseInt(previousCountervalue) + 1;
Countervalue.textContent=updatedCountervalue;
if(updatedCountervalue>0)
{
    Countervalue.style.color="green";
}
else if(updatedCountervalue<0)
{
    Countervalue.style.color="red";
}
else
{
    Countervalue.style.color="black";
}

}
function ondecrement(){
    let previousCountervalue = Countervalue.textContent;
let updatedCountervalue = parseInt(previousCountervalue)- 1;
Countervalue.textContent=updatedCountervalue;
if(updatedCountervalue>0)
{
    Countervalue.style.color="green";
}
else if(updatedCountervalue<0)
{
    Countervalue.style.color="red";
}
else
{
    Countervalue.style.color="black";
}
}
function onReset(){
    
    let updatedCountervalue = 0;
    Countervalue.textContent=updatedCountervalue;
    if(updatedCountervalue>0)
{
    Countervalue.style.color="green";
}
else if(updatedCountervalue<0)
{
    Countervalue.style.color="red";
}
else
{
    Countervalue.style.color="black";
}
}