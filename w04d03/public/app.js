// $(document).ready(() => {});

$(() => {
  const $ul = $('#recipes');

  // retrieve the recipes via AJAX
  $.ajax({
    url: 'http://my-json-server.typicode.com/andydlindsay/chef-andy/recipes',
    method: 'GET',
    dataType: 'JSON',
    success: (recipes) => {
      console.log(recipes);
      // iterate through the array
      for (const recipe of recipes) {
        // turn each object into an LI
        const $li = $('<li>').text(recipe.title); // <li>recipe.title</li>
        // append each LI to the UL in the DOM
        $ul.append($li);
      } 
    },
    error: (error) => { console.log(error) }
  });

});
