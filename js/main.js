let nume = document.querySelectorAll(".stats .number");
let stats = document.querySelector(".stats");
let start = false;
let progers = document.querySelectorAll(".the-progress span");
let serv = document.querySelector(".our-skills");
window.onscroll= function(){
if (window.scrollY >= serv.offsetTop - 250) {
  progers.forEach((span) => {
    span.style.width = span.dataset.pro;
  });
}
if(window.scrollY >=stats.offsetTop ){
        if(!start){ 
      nume.forEach((num) => counter(num));
    } 
     start= true
    }
}
function counter(ele){
    let gols = ele.dataset.gols;
    let count= setInterval(() => {
        ele.textContent++
        if(ele.textContent === gols){
            clearInterval(count);
        }
    }, 2000 / gols);

}
;

let contdown = setInterval(() => {
  let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
  let datenow= new Date().getTime()
  

  let dataDefer = countDownDate - datenow;

  let days = Math.floor(dataDefer / (1000 * 60 * 60 * 24));
  let hours = Math.floor(dataDefer % (1000 * 60 * 60 * 24) /(1000 * 60 * 60 ));
  let minutes = Math.floor((dataDefer % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dataDefer % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML=days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
if (dataDefer < 0) {
  clearInterval(contdown);
}
  
}, 1000);