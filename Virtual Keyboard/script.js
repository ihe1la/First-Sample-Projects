
const titleElem = document.querySelector('.title')
document.addEventListener('keyup',function(event){


appendVal(event)

let userKey = event.key.toUpperCase()
let mainkeyElem = document.getElementById(userKey)
mainkeyElem.classList.add('hit')
mainkeyElem.addEventListener('animationed',function(){
    mainkeyElem.classList.remove('hit')
})
console.log(mainkeyElem);
})
function appendVal(event){
titleElem.innerHTML += event.key
}