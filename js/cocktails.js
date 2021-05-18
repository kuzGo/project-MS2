let cocktailName = document.querySelector(".random-cocktail");
let cocktailNameDisplayed = document.querySelector(".title");
let displayIngreList = document.querySelector(".ingredients");

//https://www.thecocktaildb.com/api/json/v1/1/random.php

cocktailName.addEventListener('click', event => {

fetch ('https://www.thecocktaildb.com/api/json/v1/1/random.php')

.then(function(response) {
        if (response.status !== 200) {
   console.log('Error fetching data' + response.status);
   return;
    }
    response.json().then(response => {     
        
      getCocktail(response.drinks[0]);
      });
    }
  ) 
  .catch(function(err) {
    console.log('Fetch Error', err);
  });

});

  const getCocktail = function(cocktail) {
    
      cocktailNameDisplayed.innerHTML = cocktail.strDrink;

      const ingridients = [];

       for (let i = 1; i < 16; i++) {
        
        if(cocktail[`strIngredient${i}`]) {   

          ingridients.push(`${cocktail[`strIngredient${i}`]}`) 

        } else {

          break;

        }

        let displayIngrediens = `
        <ul>${ingridients.map(ingredient =>`<li class="ingredients-list">${ingredient}</li>`).join('')}</ul>
        `;
     
         displayIngreList.innerHTML = displayIngrediens;
     }

   }

 

