function mixCocktail () {
fetch ('https://www.thecocktaildb.com/api/json/v1/1/random.php')
.then(function(response) {
        if (response.status !== 200) {
   console.log('Error fetching data' + response.status);
   return;
    }
    response.json().then(function(data) {
        console.log(data);
      });
    }
  ) 
  .catch(function(err) {
    console.log('Fetch Error', err);
  });
 }
 mixCocktail ();