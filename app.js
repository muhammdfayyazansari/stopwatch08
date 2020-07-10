


var min =0;
var sec=0;
var mili =0;
var interval;
var get = document.getElementById("mili");
    var getsec = document.getElementById("sec");
    var getmin = document.getElementById("min");
function timer(){
    mili++
    
    get.innerHTML = mili
    if (mili>=100){
        sec++;
        getsec.innerHTML=sec;
        mili = 0;
    }
    else if(sec>=60){
        min++;
        getmin.innerHTML=min;
        sec = 0;
    }
}
function start(){
    interval = setInterval(timer,10)
    var getbutton = document.getElementById("startbtn").disabled = true;
    var getbutton2 = document.getElementById("resumebtn").disabled = true;
    

}

function pause(){
    clearInterval(interval)
    var getbutton = document.getElementById("resumebtn").disabled = false;

}
function resume(){
    interval = setInterval(timer,10)
    var getbutton = document.getElementById("resumebtn").disabled = true;

}
function stop(){
    clearInterval(interval)
    min = 000;
    sec = 000;
    mili =000;
  get.innerHTML = min;
  getsec.innerHTML = sec;
  getmin.innerHTML = mili;
  var getbutton = document.getElementById("startbtn").disabled = false;
  var getbutton = document.getElementById("resumebtn").disabled = false;
  

}
setTimeout(function (){
},5000)

