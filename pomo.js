var li;
var finTaches;
var taches;




/*function test(){
console.log('marche');
taches = document.getElementById('formGroupInputLarge').value;
finTaches = document.getElementById('terminer');
li = document.createElement('li');
li.innerText=taches;
finTaches.appendChild(li);

}
test();*/

var time;
var min;
var scs;
var mls;
var tab=[];
var currentTime = false;

function start(){
  console.log('marche');
  taches = document.getElementById('formGroupInputLarge').value;
  finTaches = document.getElementById('terminer');
  li = document.createElement('li');
  li.innerText=taches;
  finTaches.appendChild(li);

  min = 1;
  scs = 59;
  mls= 59;
  tab = [];
  time  =setInterval(function (){
    timer = new Date();
    document.getElementById('timer').innerHTML = min +":"+scs;
    document.getElementById('depart').style.display ="none";
    scs--;
    if( scs < 0){
      min--;
      scs= 59;
      if( min == 0){
        min= 0;

      }
      if( min < 0){
        min = 0;
        clearInterval(time);
        li.classList.add("selected");
        document.getElementById('depart').style.display ="inline-block";
        console.log( li + " est terminer");
      }
    }
  }, 1000);
  console.log("Start :" + min +":"+ scs)
}



function pause (){
  clearInterval(time);
  tab.push(min, scs);
  console.log(tab);
}


function reset(){
  tab = [];
  console.log("reset enrgistre : "+ tab);
  clearInterval(time);
  document.getElementById('timer').innerText="00:00";
  document.getElementById('depart').style.display ="inline-block";
}

function play(){
  min =tab[0];
  scs=tab[1];
  tab = [];
  time  =setInterval(function (){
    timer = new Date();
    document.getElementById('timer').innerHTML = min +":"+scs;
    scs--;
    if( scs < 0){
      min--;
      scs= 59;
      if( min == 0){
        min= 0;
      }
      if (min < 0){
        clearInterval(time);
      }
    }
  }, 1000);
}

function lBreak(){
  min = 15;
  scs = 59;
  tab =[];
  time  =setInterval(function (){
    timer = new Date();
    document.getElementById('timer').innerHTML = min +":"+scs;
    scs--;
    if( scs < 0){
      min--;
      scs= 59;
      if( min == 0){
        min= 0;
      }
      if( min < 0){
        min = 0;
        clearInterval(time);
        document.getElementById('terminer').innerText="test";
      }
    }
  },1000)
  console.log("longB : " + min + scs)
}


function sBreak(){
  min = 5;
  scs = 59;
  tab =[];

  time  =setInterval(function (){
    timer = new Date();
    document.getElementById('timer').innerHTML = min +":"+scs;
    scs--;
    if( scs < 0){
      min--;
      scs= 59;
      if( min == 0){
        min= 0;
      }
      if( min < 0){
        min = 0;
        clearInterval(time);
        document.getElementById('terminer').innerText="test";
      }
    }
  },1000)
}
console.log(min ,scs)
