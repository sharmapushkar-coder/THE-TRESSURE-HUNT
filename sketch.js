var r=0;
var r2=0
var q1="n"
var q2="n2"
var x,y
function setup(){
  var s=new p5.Speech();
  s.speak("AUTOCHECK, ENABLED, FOR ,YOUR, ANSWERS")
}
function draw(){
  check()
  x= document.getElementById("an1").value;
  y= document.getElementById("an2").value;
 // var z= document.getElementById("").value;
 //console.log(r)
 if(x==="ISTOUCHING"){
  q1="correct"
  document.getElementById("c").innerHTML="CHECKING..<progress max='450'value="+r+"></progress>";
  setInterval(function(){document.getElementById("result").innerHTML="Correct answer!!"},2000)
  r=r+10
  
}
else if(x===""){
  document.getElementById("result").innerHTML="Enter something to check"
  r=0
}
else{
  document.getElementById("result").innerHTML="ENTER SOMETHING NEW .."
  r=0
}
if(y==="MATTER"){
    q2="correct";
  document.getElementById("c2").innerHTML="CHECKING..<progress max='450'value="+r2+"></progress>";
  setInterval(function(){document.getElementById("result2").innerHTML="Correct answer!!"},2000)
  r2=r2+10
  
}
else if(y===""){
  document.getElementById("result2").innerHTML="Enter something to check"
  r2=0
}
else{
  document.getElementById("result2").innerHTML="ENTER SOMETHING NEW .."
  r2=0
}
}
function check(){
if(q1==="correct"&&q2==="correct"){
  document.getElementById("Enter").innerHTML="<button type='button'onclick='check"
  window.open("https://github.com",200,200)
}
}