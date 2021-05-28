let confirmBtn = document.querySelector(".yes-btn");
const notAllowBtn = document.querySelector(".no-btn");
const loader = document.querySelector(".loader");
const loaderText = document.querySelector(".loader-text");
const about = document.querySelector(".about-text1");
let plusButton = document.querySelector(".about-plus");
const barmanVid = document.querySelector(".barman-vid");
const buttonText = document.getElementById("drop");
const rooftopButton = document.getElementById("drop-season");
let closeNavIcon = document.querySelector(".fa-align-right");
let plusToClose = document.querySelector(".fa-plus");
let closeNavButtom = document.querySelector(".navbar-toggler");
let activeButton = document.querySelectorAll(".nav-link");
let aboutUs =
  "Here at London Libre we have a passion for cocktails and travel." +
  "The founder has traveled the world wile on cruise ships,making" +
  " cocktails and has worked in some London's prestige hotels and" +
  "cocktail bars. Now, at London Libre Bar, we can offer a diversity" +
  "of cocktails and service that fits all cultures and types of" +
  "events.We are specialised in weddings,corporate events,private events, festivals and concerts.";
//Movement Animation to happen
const card = document.querySelector(".card1");
//Items
const icyCocktail = document.querySelector(".icy-cocktail img");
// Animate In
card.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  icyCocktail.style.transform = "translateZ(90px) rotateZ(25deg)";
});
//Animate Out
card.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 1.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  icyCocktail.style.transform = "translateZ(0px) rotateZ(0deg)";
});
//Display about text when "find out" is clicked
plusButton.addEventListener("click", (e) => {
  about.classList.toggle("show-about-text");
  about.innerHTML = aboutUs;
  plusToClose.classList.toggle("fa-times");
});
//Playing video animation when hovering mouse
//credit for inspiration https://www.youtube.com/watch?v=dx4oAxaR1As
barmanVid.addEventListener("mouseenter", function (event) {
  barmanVid.play();
});
barmanVid.addEventListener("mouseout", (event) => {
  barmanVid.pause();
});
buttonText.addEventListener("mouseover", (event) => {
  buttonText.innerText = "Music Events";
});
buttonText.addEventListener("mouseout", (event) => {
  buttonText.innerText = "Fancy trying our cocktails?";
});

rooftopButton.addEventListener("mouseover", (event) => {
  rooftopButton.innerText = "Off Season";
});
// Event listener will change text of cocktails button back
rooftopButton.addEventListener("mouseout", (event) => {
  rooftopButton.innerText = "Always mixing for you";
});
// This code changes font size of navigation bar buttons
activeButton.forEach((activeButton) => {
  activeButton.addEventListener("mouseover", (e) => {
    activeButton.classList.toggle("active-button");
  });
});
activeButton.forEach((activeButton) => {
  activeButton.addEventListener("mouseout", (e) => {
    activeButton.classList.toggle("active-button");
  });
});
// Event listener will change burger button icon when clicked
closeNavButtom.addEventListener("click", () => {
  closeNavIcon.classList.toggle("fa-times");
});

confirmBtn.addEventListener("click", () => {
  loader.classList.add("d-none");
});
notAllowBtn.addEventListener("click", () => {
  loaderText.innerHTML =
    "Sorry,we are not able to allow you access to site at this time.";
});
