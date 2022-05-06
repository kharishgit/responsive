var d = new Date();
var time = d.getHours();
var g=d.getHours() ;
var greeting;
var a= document.getElementById("grt");

if (time < 12) {
   greeting="Good Morning Visitor Welcome to Laprep"
}
if (time > 12) {
   greeting="Good Evening Visitor Welcome to Laprep";
}
a.innerHTML=greeting;

function alt(){
    alert("Your Details Are Entered Successfully");
}
var b=document.getElementById("dt");
//b.innerHTML=(time+":"+g);
