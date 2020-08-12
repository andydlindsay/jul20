// $(document).ready(() => {});

$(() => {
  const $ul = $('#recipes');
  const $ol = $('#ingredients');
  const baseURL = 'http://my-json-server.typicode.com/andydlindsay/chef-andy';

  // retrieve the recipes via AJAX
  // $.ajax({
  //   url: 'http://my-json-server.typicode.com/andydlindsay/chef-andy/recipes',
  //   method: 'GET',
  //   dataType: 'JSON',
  //   success: (recipes) => {
  //     console.log(recipes);
  //     // iterate through the array
  //     for (const recipe of recipes) {
  //       // turn each object into an LI
  //       const $li = $('<li>').text(recipe.title); // <li>recipe.title</li>
  //       // append each LI to the UL in the DOM
  //       $ul.append($li);
  //     } 
  //   },
  //   error: (error) => { console.log(error) }
  // });

  const appendRecipeToDOM = (recipe) => {
    // turn each object into an LI
    const $li = $('<li>').text(recipe.title); // <li>recipe.title</li>
    // append each LI to the UL in the DOM
    $ul.append($li);
  };

  // retrieve the ingredients via AJAX
  // $.getJSON(`${baseURL}/ingredients`)
  //   .then((ingredients) => {
  //     console.log(ingredients);
  //     for (const ingredient of ingredients) {
  //       const $li = $('<li>').text(ingredient.name);
  //       $ol.prepend($li);
  //     }
  //   });

  
  // retrieve the recipes via AJAX
  // $.getJSON(`${baseURL}/recipes`)
  //   .then((recipes) => {
  //     console.log(recipes);
  //     // iterate through the array
  //     for (const recipe of recipes) {
  //       appendRecipeToDOM(recipe);
  //     } 
  //   });

  const ingredientPromise = $.getJSON(`${baseURL}/ingredients`);
  const recipePromise = $.getJSON(`${baseURL}/recipes`);

  const promises = [ingredientPromise, recipePromise];
  Promise.all(promises)
    .then(returnValues => {
      const ingredients = returnValues[0];
      const recipes = returnValues[1];
      console.log(returnValues);
    });

  const $form = $('#new-recipe-form');
  $form.on('submit', (event) => {
    event.preventDefault();
    // $(this).serialize();
    const serialized = $form.serialize();
    console.log(serialized);

    $.post(`${baseURL}/recipes`, serialized)
      .then((recipe) => {
        console.log(recipe);
        appendRecipeToDOM(recipe);
      });
  });



});
