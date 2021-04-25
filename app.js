
//Display text paragraph when button is clicked
const about = document.querySelector('.about-text1');

//Movement Animation to happen
 const card = document.querySelector(".card1");
 const container = document.querySelector(".card-container");
//Items
 const title = document.querySelector(".title");
 const icyCocktail = document.querySelector(".icy-cocktail img");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 55;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 55;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(150px)"; //150px
  icyCocktail.style.transform = "translateZ(200px) rotateZ(45deg)"; //200px
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  icyCocktail.style.transform = "translateZ(0px) rotateZ(0deg)";
  
});
//Display about text when "learn More" button is hovered over

about.addEventListener('click', e => {
  about.querySelector('p').classList.toggle('d-none'); 
});
//  about.addEventListener('mouseleave', e => {
//   about.querySelector('p').classList.add('d-none')
// });

//  plus.addEventListener('mouseenter',e => {
//   plus.classList.remove('.learn-btn');
//  });
 
//  plus.addEventListener('click',e => {
//   plus.classList.add('d-none');
//  });