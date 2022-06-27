const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.





  const ingredientsListEl = document.querySelector('#ingredients')

  const liEl = ingredients.map(name =>{
    const ingredient = document.createElement("li")
    ingredient.classList.add("item")
    ingredient.textContent = name
    return ingredient
  })

  ingredientsListEl.append(...liEl)
 

console.log(ingredientsListEl)

