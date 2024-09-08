// var second=0;
// var minute=0;
// var hour=0;

const hr=document.querySelector("#hours");
const mins=document.querySelector("#minutes");
const secs=document.querySelector("#seconds");

console.log(Date());

 
let final=()=>{
let time=new Date();

let hh=time.getHours();
let mm=time.getMinutes();
let ss=time.getSeconds();

let hhh=hh*30+mm/2;
let mmm=mm*6;
let sss=ss*6;


    hr.style.transform="rotate(" +hhh+ "deg)";
    mins.style.transform="rotate(" +mmm + "deg)";
    secs.style.transform="rotate(" +sss + "deg)";
    
}
setInterval(final,1000);