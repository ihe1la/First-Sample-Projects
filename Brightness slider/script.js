let inputElem = document.querySelector('input')
let divElem = document.querySelector('div')

inputElem.addEventListener('click',function(event){
    let inputRange = event.target
    console.log(inputRange.value);
    divElem.style.filter="brightness(" + inputRange.value + "%)"
    console.log(divElem);

})