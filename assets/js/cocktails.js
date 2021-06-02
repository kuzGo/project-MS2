
// Declaring variables
let cocktailName = document.querySelector(".random-cocktail");
let cocktailNameDisplayed = document.querySelector(".title");
let displayIngreList = document.querySelector(".ingredients");
// Click event listener will send a new fetch request when clicked
cocktailName.addEventListener("click", (event) => {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(function (response) {
      // Check if the status is not OK
      if (response.status !== 200) {
      // Logs the error message of the resonse status
        console.log("Error fetching data" + response.status);
        return;
      }
      // Gets first item from response
      response.json().then((response) => {
        getCocktail(response.drinks[0]);
      });
    })
    // Catches any errors and logs them
    .catch(function (err) {
      console.log("Fetch Error", err);
    });
    // Informs the user that something went wrong (If Error found in request)
  cocktailNameDisplayed.innerHTML = "Oooh sorry .. Something went wrong :(" ;
});
// Function invoked above gets string values from API response
const getCocktail = function (cocktail) {
  // Renders cocktail name 
  cocktailNameDisplayed.innerHTML = cocktail.strDrink;
  // An empty array where ingredients will be pushed
  const ingridients = [];
// Iterates trough 15 Ingredients and measures
  for (let i = 1; i < 16; i++) {
    // Check if both ingredients and measures have some values 
    if (cocktail[`strIngredient${i}`] && cocktail[`strMeasure${i}`]) {
      // Pushes measures and ingeadients to an array
      ingridients.push(
        `${cocktail[`strMeasure${i}`]}:${cocktail[`strIngredient${i}`]}`
      );
    } else {
      // Breaks the loop
      break;
    }
// This code renders response values to the users in card two 
    let displayIngrediens = `
        <ul>${ingridients
          .map(
            (ingredient) => `<li class="ingredients-list">${ingredient}</li>`
          )
          .join("")}</ul>
        <h3 class="ingredients-header">How To:</h3>
        <p class="ingredients-list">${cocktail.strInstructions}</p>
        `;

    displayIngreList.innerHTML = displayIngrediens;
  }
};
