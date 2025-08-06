let hrs=document.getElementById("hr");
let mins=document.getElementById("min");
let secs=document.getElementById("sec");

let set_clock=setInterval(()=>{
    let date=new Date();

    let hr=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();

    let hr_ang=(hr * 30) + (min / 2);
    let min_ang=(min * 6) + (sec / 10);
    let sec_ang=sec * 6;

    hrs.style.transform=`rotate(${hr_ang}deg)`;
    mins.style.transform=`rotate(${min_ang}deg)`;
    secs.style.transform=`rotate(${sec_ang}deg)`;
},1000)