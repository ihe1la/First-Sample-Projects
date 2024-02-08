let $ = document

let inputElem = $.querySelector('input')

let addBtn = $.querySelector('#addButton')
let clearBtn = $.querySelector('#clearButton')
let ulElem = $.querySelector('#todoList')

let compBtn = $.querySelector('.btn-success')
let delBtn = $.querySelector('.btn-danger')

let todosArray=[]
function addBtnF(){
      
    let inputValue=inputElem.value

    let newTodoObj = 
        {id : todosArray.length+1,
        title : inputValue,
        complete : false
        
        }
    
    
    todosArray.push(newTodoObj)
    setLocal(todosArray)
    todoGenerator(todosArray)
    inputElem.value=''
    inputElem.focus()
    



}
function setLocal(todoList){
localStorage.setItem('todos',JSON.stringify(todoList))

}
function todoGenerator (todoList){
     
    let labelLi,newLiElem,compBtnList,delBtnList
    ulElem.innerHTML=''
    todoList.forEach(function(todo){
       
        newLiElem = document.createElement('li')
        newLiElem.className ='completed well'
        
        labelLi= document.createElement('label')
        labelLi.innerHTML=todo.title;
       
        compBtnList = document.createElement('button')
        compBtnList.className ='btn btn-success'
        compBtnList.innerHTML='Complete'
        compBtnList.setAttribute('onclick','compTodo('+todo.id+')')

        delBtnList = document.createElement('button')
        delBtnList.className ='btn btn-danger'
        delBtnList.innerHTML='Delete'
        delBtnList.setAttribute('onclick','removeTodo('+todo.id+')')

        if(todo.complete){
            newLiElem.className='uncompleted well'
            compBtnList.innerHTML='Uncompletd'
                }        
        
        newLiElem.append(labelLi,compBtnList,delBtnList)
        ulElem.append(newLiElem)
        
    })
    
    }

function getItemLocal(){
   let localStorageGet= JSON.parse(localStorage.getItem('todos')) 
    if(localStorageGet){
        todosArray=localStorageGet
    }else{
        todosArray=[]
    }
    todoGenerator(todosArray)
}
function clearBtnF(){
    todosArray=[]
    todoGenerator(todosArray)
 inputElem.value=''
 localStorage.removeItem('todos')

}

function removeTodo(todoID){
    
    let localStorageGet= JSON.parse(localStorage.getItem('todos'))
    todosArray=localStorageGet
    let maintodoIndex =  localStorageGet.findIndex(function(todo){
        return todo.id === todoID
    })
    
    
    todosArray.splice(maintodoIndex,1)
    setLocal(todosArray)
    todoGenerator(todosArray)
}
function compTodo(todoId){
    let localStorageGet= JSON.parse(localStorage.getItem('todos'))
    todosArray=localStorageGet
    todosArray.forEach(function(todo){
        if(todo.id===todoId){
            todo.complete=!todo.complete
        }
    })
    setLocal(todosArray)
    todoGenerator(todosArray)
}

inputElem.addEventListener('keypress',function(event){
   
if(event.key === 'Enter'){
    console.log('hey');
    addBtnF()
}
})
window.addEventListener('load',getItemLocal)
addBtn.addEventListener('click',addBtnF)
clearBtn.addEventListener('click',clearBtnF)
















