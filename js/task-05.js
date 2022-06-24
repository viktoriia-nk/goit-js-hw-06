// Напиши скрипт который, при наборе текста в инпуте input#name-input 
// (событие input), подставляет его текущее значение в span#name-output.
//  Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>


const formInputEl = document.querySelector("#name-input");
const userNameOutputEl = document.querySelector("#name-output");

formInputEl.addEventListener("input", (event) => {
    userNameOutputEl.textContent = event.target.value;
    if(event.target.value ===""){
        userNameOutputEl.textContent = "Anonymous"
    }
  });