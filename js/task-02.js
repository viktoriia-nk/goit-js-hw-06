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



const createIngredient = (ingredients)=>{
  const ingredientsListEl = document.querySelector('#ingredients')
  // console.log(ingredientsListEl)
  let arr =[]
  for (let i = 0; i<= ingredients.length-1; i+=1 ){
    let liEl = document.createElement("li")
    
    liEl.classList.add("item")
    liEl.textContent = ingredients[i]
  
    arr.push(liEl)
   
  }
  ingredientsListEl.append(...arr)
  return ingredientsListEl

}

console.log(createIngredient(ingredients))
