// var count = document.getElementById("button");
// count.addEventListener('click', function(){
//     count.innerHTML = Number(count.innerHTML) + 1;
//     if (document.getElementById("p1").innerHTML == "New text!"){
//         document.getElementById("p1").innerHTML = "Hello World!"
//     } else {
//         document.getElementById("p1").innerHTML = "New text!"
//     }
// });
// var clicks = 0;
// var clicks2 = 0;
// var p = document.getElementById("p1");
// var x = 0;
// count.addEventListener('click', function(){
//     clicks += 1;
//     clicks2 = clicks*clicks;
//     count.innerHTML = clicks2;
//     x += 1;
//     var psize = x + "pt";
//     p.style.fontSize = (psize);
// });
// var but1 = document.getElementById("button1");
// var but2 = document.getElementById("button2");
// var but3 = document.getElementById("button3");
// var but4 = document.getElementById("button4");
// var but5 = document.getElementById("button5");
// var but6 = document.getElementById("button6");
// var but7 = document.getElementById("button7");
// var but8 = document.getElementById("button8");
// var but9 = document.getElementById("button9");
// var but0 = document.getElementById("button0");
// var plus = document.getElementById("button+");
// var minus = document.getElementById("button-");
// var multiply = document.getElementById("button*");
// var divide = document.getElementById("button/");
// var equally = document.getElementById("button=");
// var clear = document.getElementById("buttonC");

var pole = document.getElementById("numberInput")
var all = document.querySelectorAll("button");

all.forEach(i => { i.onclick = function(){
    let x = pole.value.split(/[+\/\*-]/); 
    let uniq = new Set(x); 
    let bta = [...uniq];
    let fil = bta.filter(e=>{  return bta.indexOf(e) == (bta.length - 1)});
    if(i.innerHTML == "=" ){if(pole.value.search(/\/(?=0(?!.))/) != -1){pole.placeholder = "На ноль делить нельзя"; pole.value = ""} else if(pole.value.length != 0){pole.placeholder = eval(pole.value).toFixed(2); pole.value =""}};
    if(i.innerHTML == "x²"){if(pole.value.length != 0){pole.placeholder = Math.pow(eval(pole.value), 2).toFixed(2); pole.value =""}}; 
    if(i.innerHTML == "√"){if(pole.value.length != 0){pole.placeholder = Math.sqrt(eval(pole.value)).toFixed(2); pole.value =""}}
    if(pole.value.match(/[\+\/\*-\.](?!\d)/) == null && (pole.value.length != 0)){ let y = i.innerHTML; if(y == "+" || y == "-" ||y == "*" ||y == "/" ){pole.value += i.innerHTML}}
    if(i.innerHTML == "-"){ if(pole.value == 0){pole.value += "-";}}
    if(i.innerHTML == "C"){pole.value = ""; pole.placeholder = ""};
    fil.forEach(e =>{
        if(i.innerHTML == "."){
            if(e.match(/\./g) == null && (fil != "")){
                pole.value +='.' }
                else { pole.value += ""}
        }
        if(i.innerHTML == "0"){
            if(fil == "" || e.charAt(0) != 0){pole.value += "0";}
            if(e.charAt(1) == "." && e.charAt(0) == "0"){pole.value += "0"} 
            };
        if(Number(i.innerHTML)){
            if(e.charAt(1) == "." || e.charAt(0) != "0"){pole.value += Number(i.innerHTML)};
        }
    });
     
}});

// let butts = document.querySelectorAll('form.button');
// console.log(all);

// but1.addEventListener('click', function(){
// pole.value += Number(but1.innerHTML);});

// but2.addEventListener('click', function(){                                 /[+\/\*\-](?=[+\/\*\-])/
// pole.value += Number(but2.innerHTML);});

// but3.addEventListener('click', function(){
// pole.value += Number(but3.innerHTML);});
    
// but4.addEventListener('click', function(){
// pole.value += Number(but4.innerHTML);});

// but5.addEventListener('click', function(){
// pole.value += Number(but5.innerHTML);});
    
// but6.addEventListener('click', function(){
// pole.value += Number(but6.innerHTML);});

// but7.addEventListener('click', function(){
// pole.value += Number(but7.innerHTML);});
    
// but8.addEventListener('click', function(){
// pole.value += Number(but8.innerHTML);});
        
// but9.addEventListener('click', function(){
// pole.value += Number(but9.innerHTML);});

// but0.addEventListener('click', function(){
// pole.value += Number(but0.innerHTML);});



// plus.addEventListener('click', function(){
// pole.value += plus.innerHTML;});

// minus.addEventListener('click', function(){
// pole.value += minus.innerHTML;});

// multiply.addEventListener('click', function(){
// pole.value += multiply.innerHTML;});

// divide.addEventListener('click', function(){
// pole.value += divide.innerHTML;}); 
    
// equally.addEventListener('click', function(){
// pole.value = eval(pole.value);});

// clear.addEventListener('click', function(){
// pole.value = "";});
document.addEventListener('DOMContentLoaded', function(){
    let modalButton = document.querySelectorAll('.linkMod'),
        overlay     = document.querySelector('#overlay-modal'),
        closeButton = document.querySelectorAll('.modal_cross');

        modalButton.forEach(function(item){
            item.addEventListener('click', function(event){
                event.preventDefault();
        
                let modalId = this.getAttribute('data-modal'),
                    modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
                modalElem.classList.add('active');
                overlay.classList.add('active');
        });
    });     
        closeButton.forEach(function(item){
            item.addEventListener('click',function(){
                item.parentNode.classList.remove('active');
                overlay.classList.remove('active');
            });
        });
        document.body.addEventListener('keyup', function (e) {
            var key = e.keyCode;
    
            if (key == 27) {
    
                document.querySelector('.modal.active').classList.remove('active');
                document.querySelector('.overlay').classList.remove('active');
            };
        }, false);
    
    
        overlay.addEventListener('click', function() {
            document.querySelector('.modal.active').classList.remove('active');
            this.classList.remove('active');
        });
    
    
    
    
    });       