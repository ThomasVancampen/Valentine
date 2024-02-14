let heart = document.getElementById("heart");
let noButton = document.getElementById("noButton");
let index = 0;
let moveButton = true;
let sureGif = document.getElementById("sure-gif");
let yButton = document.getElementById("yButton");
let nButton = document.getElementById("nButton");
let hamsterSad = document.getElementById("hamsterSad");
let manSad = document.getElementById("manSad");
let dispgif = document.getElementsByClassName("dispgif");
let title = document.getElementById("pageTitle");

heart.addEventListener("mouseenter", () => {
  heart.classList.add("bouncing");
});

heart.addEventListener("mouseleave", () => {
  heart.classList.remove("bouncing");
});

document.getElementById("heart").addEventListener("click", () => {
    document.body.style.display= "block";
  dispgif[0].style.display = "block";
  dispgif[1].style.display = "block";
  dispgif[2].style.display = "block";
  heart.style.display = "none";
  noButton.style.display = "none";
  title.style.display = "none";
  alert("Thank you! I Love you!");
});

noButton.addEventListener("mouseenter", function () {
  index++;
  if (index >= 10) {
    moveButton = false;
  } else if (index >= 7) {
    noButton.innerText = "No :( (please stop trying to click me)";
  } else if (index >= 5) {
    noButton.innerText = "No :(";
  }

  if (moveButton) {
    noButton.style.position = "absolute";
    noButton.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    noButton.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
  }
});

noButton.addEventListener("click", () => {
  sureGif.style.display = "block";

  setTimeout(() => {
    yButton.style.display = "block";
    nButton.style.display = "block";
  }, 1000);
});

yButton.addEventListener("click", () => {
    document.body.style.display= "block";
  sureGif.style.display = "none";
  yButton.style.display = "none";
  nButton.style.display = "none";
  manSad.style.display = "block";
  hamsterSad.style.display = "block";
  heart.style.display = "none";
  title.style.display = "none";
  noButton.style.display = "none";
  document.body.style.backgroundImage =
    "url(https://tenor.com/view/rain-is-falling-glass-of-water-night-rain-gif-23236544.gif)";
  document.body.style.backgroundSize = "cover";
});

nButton.addEventListener("click", () => {
  location.reload();
});
