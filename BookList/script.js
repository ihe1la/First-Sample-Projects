let $=document
let titleElem = $.querySelector('#title')
let authorElem = $.querySelector('#author')
let YearElem = $.querySelector('#year')
let btnElem = $.querySelector('.btn')
let tBodyElem = document.querySelector('#book-list')


bookArray = []

function addBook(){
    tBodyElem.innerHTML=''
    let titleValue = titleElem.value
    let authorValue = authorElem.value
    let YearValue = YearElem.value
let newObjBook={
    title : titleValue,
    authorName : authorValue,
    yearName : YearValue
}
    
    bookArray.push(newObjBook)
    bookList(bookArray)
    setLocal(bookArray)
    event.preventDefault();
}
function setLocal(bookList){
    localStorage.setItem('bookss',JSON.stringify(bookArray))
}
function bookList(books){
    bookArray.forEach(function(book){
       let trElem = document.createElement('tr')
       let thTitleElem = document.createElement('th')
       let thAuthorElem = document.createElement('th')
       let thYearElem = document.createElement('th')
        thTitleElem.innerHTML=book.title
        thAuthorElem.innerHTML=book.authorName
        thYearElem.innerHTML=book.yearName
        trElem.append(thTitleElem,thAuthorElem,thYearElem)
        tBodyElem.append(trElem)

    })
}
function getLocal(){
    let getDatas = JSON.parse(localStorage.getItem('bookss'))
    if(getDatas){
       bookArray=getDatas 
    } else{
        bookArray=[]
    }
    bookList(bookArray)

}

function enterF(event){
    if(event.key == 'Enter'){
        addBook()
    }
}
document.addEventListener('keydown',enterF)
window.addEventListener('load',getLocal)
btnElem.addEventListener('click',addBook)