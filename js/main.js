let rating = 0;
let rate;
const rating_box = document.querySelector(".rating");
const message = document.querySelector("#message");
const star_no_1 = document.querySelector("#star1");
const star_no_2 = document.querySelector("#star2");
const star_no_3 = document.querySelector("#star3");
const star_no_4 = document.querySelector("#star4");
const star_no_5 = document.querySelector("#star5");




function star1() {
  rating = 1;
  localStorage.setItem("rate", "star1");
  localStorage.setItem("messageText", message.value);
  star_no_1.style.color = "#FFD700";
  star_no_2.style.color = "gray";
  star_no_3.style.color = "gray";
  star_no_4.style.color = "gray";
  star_no_5.style.color = "gray";
}
function star2() {
  rating = 2;
  localStorage.setItem("rate", "star2");
  localStorage.setItem("messageText", message.value);
  star_no_1.style.color = "#FFD700";
  star_no_2.style.color = "#FFD700";
  star_no_3.style.color = "gray";
  star_no_4.style.color = "gray";
  star_no_5.style.color = "gray";
}
function star3() {
  rating = 3;
  localStorage.setItem("rate", "star3");
  localStorage.setItem("messageText", message.value);
  star_no_1.style.color = "#FFD700";
  star_no_2.style.color = "#FFD700";
  star_no_3.style.color = "#FFD700";
  star_no_4.style.color = "gray";
  star_no_5.style.color = "gray";
}
function star4() {
  rating = 4;
  localStorage.setItem("rate", "star4");
  localStorage.setItem("messageText", message.value);
  star_no_1.style.color = "#FFD700";
  star_no_2.style.color = "#FFD700";
  star_no_3.style.color = "#FFD700";
  star_no_4.style.color = "#FFD700";
  star_no_5.style.color = "gray";
}
function star5() {
  rating = 5;
  localStorage.setItem("rate", "star5");
  localStorage.setItem("messageText", message.value);
  star_no_1.style.color = "#FFD700";
  star_no_2.style.color = "#FFD700";
  star_no_3.style.color = "#FFD700";
  star_no_4.style.color = "#FFD700";
  star_no_5.style.color = "#FFD700";
}

let hide = true;
function heart(e) {
  if (hide) {
    e.classList.add("fas");
    e.classList.remove("far");
    e.style.cssText =
      "text-shadow: 0 5px 2px rgba(0, 0, 0, 0.507); color: red;";
    rating_box.style.cssText = "top: -2rem; box-shadow: 0 2px 10px #000; ";
    hide = false;
  }else{
    e.classList.add("far");
    e.classList.remove("fas");
    e.style.cssText =
      "text-shadow: none; color: white;";
    rating_box.style.cssText = "top: -100%; box-shadow: none; ";
    hide = true;
  }
}





function noChoose() {
  star_no_1.style.color = "gray";
  star_no_2.style.color = "gray";
  star_no_3.style.color = "gray";
  star_no_4.style.color = "gray";
  star_no_5.style.color = "gray";
  message.value= ""
  if(message.value){
    localFunc()
  }
}

localFunc()

// Check browser support
function localFunc() {
  if (typeof Storage !== "undefined") {
    const lastRate = localStorage.getItem("rate");
    const getMessage = localStorage.getItem("messageText");
    if (lastRate === "star1") {
      star1();
      message.value = getMessage;
      console.log("Rated Stars :- 1" , "Message is : -" , getMessage);
    } else if (lastRate === "star2") {
      star2();
      message.value = getMessage;
      console.log("Rated Stars :- 2" , "Message is : -" , getMessage);
    } else if (lastRate === "star3") {
      star3();
      message.value = getMessage;
      console.log("Rated Stars :- 3" , "Message is : -" , getMessage);
    } else if (lastRate === "star4") {
      star4();
      message.value = getMessage;
      console.log("Rated Stars :- 4" , "Message is : -" , getMessage);
    } else if (lastRate === "star5") {
      star5();
      message.value = getMessage;
      console.log("Rated Stars :- 5" , "Message is : -" , getMessage);
    }
  } else {
    console.log("not supported !");
  }
}