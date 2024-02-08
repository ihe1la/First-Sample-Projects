let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to become Freelancer",
    "How to become Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];


let autoCompElem = document.querySelector('.autocom-box')
let inputElem = document.querySelector('input')
let searchInputElem = document.querySelector('.search-input')
let divWrapper = document.querySelector('.wrapper')

function autoComplete(){
    let inputValue = inputElem.value
   
if(inputValue){
    searchInputElem.classList.add('active')

    let suggestFilter = suggestions.filter(function(suggest){
        return suggest.toLowerCase().startsWith(inputValue.toLowerCase())
    })//includes

    suggestionsListGenerator(suggestFilter)
    select()
}
else{
    searchInputElem.classList.remove('active')
}

}
function suggestionsListGenerator(wordsArray){
let ListMapArray = wordsArray.map(function(word){
    return '<li>'+word +'</li>'
})
let customListItem

if(!ListMapArray.length){
    customListItem = '<li>'+inputElem.value +'</li>'
}else{
    customListItem = ListMapArray.join('')
}
autoCompElem.innerHTML=customListItem
    select()
}

function select(){
    let allLists = autoCompElem.querySelectorAll('li')
    allLists.forEach(function(wordItem){
        wordItem.addEventListener('click',function(event){
            
            inputElem.value = event.target.textContent
        })
    })
}
inputElem.addEventListener('keyup',autoComplete)