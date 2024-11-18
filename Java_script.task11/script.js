const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const reset = document.querySelector("#reset")
const num = document.querySelector("#text")
const count = 0;
start.addEventListener("click",function(){
    count ++;
    num.textContent = count;


})
stop.addEventListener("click", function () {
  count--;
  num.textContent = count;
});

start.addEventListener("click", function () {
  count++;
  num.textContent = count;
});