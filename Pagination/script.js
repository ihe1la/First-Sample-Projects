const listItems = [
    { id: 1, name: 'Amin', family: 'Saeedi Rad' },
    { id: 2, name: 'Amir', family: 'Zehtab' },
    { id: 3, name: 'Qadir', family: 'Yolme' },
    { id: 4, name: 'Babak', family: 'Mohammadi' },
    { id: 5, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 6, name: 'Amin', family: 'Saeedi Rad' },
    { id: 7, name: 'Amir', family: 'Zehtab' },
    { id: 8, name: 'Qadir', family: 'Yolme' },
    { id: 9, name: 'Babak', family: 'Mohammadi' },
    { id: 10, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 11, name: 'Saeed', family: 'Ehsani' },
    { id: 12, name: 'Siamak', family: 'Modiri' },
    { id: 13, name: 'Mohsen', family: 'Ansari' },
    { id: 14, name: 'Mehran', family: 'Ali Pour' },
    { id: 15, name: 'Amir Hossein', family: 'Mahtabi' },

    { id: 16, name: 'Hossein', family: 'Amino' },
    { id: 17, name: 'Melika', family: 'Ehsani' },
    { id: 18, name: 'Qadir', family: 'Yolme' },
    { id: 19, name: 'Fatemeh', family: 'Alilou' },
    { id: 20, name: 'Ehsan', family: 'Tayyebi' },

    { id: 21, name: 'Zahra', family: 'Gholami' },
    { id: 22, name: 'Matin', family: 'Sahebi' },
    
];

let listElem = document.querySelector('#list')
let pagingElem = document.querySelector('#pagination')
let currentPage = 4
let rowCount = 5

function displayUserList(allUsers,userContainer,currentPage,rowCount){
    userContainer.innerHTML = ''
    let endIndex = rowCount*currentPage
    let startIndex = endIndex - rowCount

    let paginatedUsers = allUsers.slice(startIndex,endIndex)
    console.log(paginatedUsers);
    paginatedUsers.forEach(function(page){
        let newDiv = document.createElement('div')
        newDiv.className='main list item'
        newDiv.innerHTML=page.name
        listElem.appendChild(newDiv)
    }
)}
function setUpPaging(allUsers,pagesContainer,rowCount){
    pagesContainer.innerHTML=''
    let pageCount = Math.ceil(allUsers.length/rowCount)
    for(let i=1 ; i<pageCount+1;i++){
        let btn = paginatButtonGenerator(i,allUsers)
        pagesContainer.appendChild(btn)
    }
}
function paginatButtonGenerator(page,allUsers){
    let newButton = document.createElement('button')
    newButton.innerHTML=page

    if(page===currentPage){
        newButton.classList.add('active')
    }
    newButton.addEventListener('click',function(){
        currentPage=page
        displayUserList(allUsers,listElem,currentPage,rowCount)
        let activeBtn=document.querySelector('button.active')
        activeBtn.classList.remove('active')
        newButton.classList.add('active')
    })
    return newButton
}



displayUserList(listItems,listElem,currentPage,rowCount)
setUpPaging(listItems,pagingElem,rowCount)