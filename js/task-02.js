const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listOfIngredientsRef = document.querySelector('[id="ingredients"]');

const arrOfIngredientItems = ingredients.map(item => {
  const tagLi = document.createElement('li');
  tagLi.classList.add('item');
  tagLi.textContent = item;

  return tagLi;
});

listOfIngredientsRef.append(...arrOfIngredientItems);
