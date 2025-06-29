const banner = document.querySelector('.banner');

//console.log(date);
//console.log(date.toLocaleTimeString());
function GetMyTime(){
    const date = new Date();
    banner.innerHTML= date.toLocaleTimeString();
}

setInterval(GetMyTime, 1000);



