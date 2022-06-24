// // // Напиши скрипт который:

// // Посчитает и выведет в консоль количество
//  категорий в ul#categories, то есть элементов 
//  li.item.
// // Для каждого элемента li.item в списке 
// ul#categories, найдет и выведет в консоль 
// текст заголовка элемента (тега <h2>) и количество 
// элементов в категории (всех вложенных в него <li>).
// // В результате, в консоли будут выведены такие
//  сообщения.

// // Number of categories: 3

// // Category: Animals
// // Elements: 4

// // Category: Products
// // Elements: 3

// // Category: Technologies
// // Elements: 5

const listEl = document.querySelector("#categories")
const numOfCategoryEl = listEl.children.length
console.log(`Number of categories: ${numOfCategoryEl}`)

const listItemEl = listEl.querySelectorAll('.item')

listItemEl.forEach(function (el){
    const titlesOfCategoryEl = el.querySelector("h2").textContent
    console.log(`Category: ${titlesOfCategoryEl}`)

    const ulEl = el.querySelector("ul")

    const elementsLength = ulEl.children.length
    console.log(`Elements: ${elementsLength}`)
})




