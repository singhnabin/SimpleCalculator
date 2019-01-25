var display = document.getElementById("display");

function toScreen(x){
 display.value+=x;
 if(x==='c'){
  display.value='';
 }
}


function calculate(){
 x=display.value;
 x=eval(x);
 display.value=x;
}

function power(){
 x=display.value;
 display.value=eval(x*x);
}


function backspace(){
 var num = display.value;
display.value=num.substring(0,(num.length-1));
}