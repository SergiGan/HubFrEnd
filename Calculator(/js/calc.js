var result = null;
windows.onload = function() {
	result = document.getElementById('result');
}
function onclick(button){
	result.value += button.value;
}


function equalsClick(button){
	
}


/*function f_0(){
from_get=document.getElementById("f0").innerHTML;
alert(from_get);
from_result = document.getElementById("result").innerHTML;
if (from_result === "0"){document.getElementById("result").innerHTML = "";}
	from_length = from_result.length;

	document.getElementById("result").innerHTML += from_id;
}
function f_1(){
from_get=document.getElementById("f1").innerHTML;
alert(from_get);
}
function f_2(){
from_get=document.getElementById("f2").innerHTML;
alert(from_get);
}
function f_3(){
from_get=document.getElementById("f3").innerHTML;
alert(from_get);
}
function f_4(){
from_get=document.getElementById("f4").innerHTML;
alert(from_get);
}
function f_5(){
from_get=document.getElementById("f5").innerHTML;
alert(from_get);
}
function f_6(){
from_get=document.getElementById("f6").innerHTML;
alert(from_get);
}
function f_7(){
from_get=document.getElementById("f7").innerHTML;
alert(from_get);
}
function f_8(){
from_get=document.getElementById("f8").innerHTML;
alert(from_get);
}
function f_9(){
from_get=document.getElementById("f9").innerHTML;
alert(from_get);
}