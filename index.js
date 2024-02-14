////////// PROJECT 3 /////////

const clock = document.querySelector(".clock");

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

//// Console.log Local Time ////
setInterval(function () {
  let date2 = new Date();
  console.log(date2.toLocaleTimeString());
}, 1000);
