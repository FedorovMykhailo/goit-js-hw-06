const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector('#ingredients');
const newIngredientList = [];

const addIngredient = (ingredient) => {
  const newLiElement = document.createElement('li');
  newLiElement.textContent = ingredient;
  newLiElement.className = 'item';
  newIngredientList.push(newLiElement);
};

ingredients.forEach(ingredient => {
  addIngredient(ingredient)
});

ingredientList.append(...newIngredientList);

