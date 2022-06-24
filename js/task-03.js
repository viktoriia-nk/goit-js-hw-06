const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// Используй массив объектов images для создания элементов <img> вложенных в <li>.
//  Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.


const galleryEl = document.querySelector(".gallery") 


const makeGalleryCard = ({url, alt} = {}) => {
  return `<li>
            <img src=${url} alt=${alt}>
          </li>`
          
}

const galleryMarkUp = images.map(el=>makeGalleryCard(el)).join("")

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkUp)

const galleryImage = galleryEl.querySelectorAll("img")

galleryImage.forEach(function (el)  {el.style.width = "500px"})


galleryEl.style.listStyle = "none"
galleryEl.style.display = "grid"
galleryEl.style.gap = "30px"
galleryEl.style.paddingLeft = "0px"

