import { cocktails } from "./data.js"; // this is your data

///////////////////////////////////////////////////////////////
////////////////// DEVELOPE BELOW THIS LINE ///////////////////
///////////////////////////////////////////////////////////////

// ----------------TODO-----------------
// Render dynamic data to UI
// Working with event listeners, higher order functions
// Array methods map, forEach, find, and filter
// Grid or Flex box

// ----------JAVASCRIPT----------
//connection with API ✔
//choosing the data which we need
//create data in js
//display the data on the web browser
//call the button and filter method / if data is wrong return message "Sorry,No Drinks Matched Your Search"
//when the item clicked, we have to display items individualy
//to add "all coctails" button which retuns to main page
//

// ----------CSS----------------
//create a container/wrapper for coctail
//apply grid, ....
//add hover effect to the image (blur)

//SELECT
const searchButton = document.querySelector(".search-button");
let inputField = document.querySelector(".cocktail-search-name");
const wrapper = document.querySelector(".cocktail-wrapper");


let singleCocktail = "";

const createSingleCocktail = index => `
	<div class="single-cocktail">
		<img src="${cocktails[index].strDrinkThumb}" />
		<p class="cocktail-name">${cocktails[index].strDrink}</p> 
	</div>
`;

for (let i=0; i<cocktails.length; i++) {
    singleCocktail += createSingleCocktail(i);
}

wrapper.innerHTML = singleCocktail;


// 2. Working with event listeners, higher order functio


searchButton.addEventListener("click", (event) => onClick(event));

function onClick(event) {
  //   console.log(event.target);

  const searchedCocktailName = inputField.value;

  //   console.log(searchedCocktailName);
}