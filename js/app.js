
//Movement Animation to happen
 const card = document.querySelector(".card1");

 const container = document.querySelector(".card-container");

//Items
 const title = document.querySelector(".title");
 const icyCocktail = document.querySelector(".icy-cocktail img");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 105;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 105;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(80px)"; 
  icyCocktail.style.transform = "translateZ(90px) rotateZ(25deg)"; 
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  icyCocktail.style.transform = "translateZ(0px) rotateZ(0deg)";
  
});

//Display about text when "find out" is clicked

const about = document.querySelector('.about-text1');

about.addEventListener('click', e => {
   about.querySelector('p').classList.toggle('d-none'); 
});

//Playing video animation when hovering mouse 
//credit for inspiration https://www.youtube.com/watch?v=dx4oAxaR1As
const barmanVid = document.querySelector(".barman-vid");

barmanVid.addEventListener('mouseenter', e => {
  barmanVid.play();
});
barmanVid.addEventListener('mouseout', e => {
  barmanVid.pause();
});
const play = document.querySelector(".barman-action");
play.addEventListener("click", e =>{
  console.log(play);
 play.classList.toggle('barman-action');
});