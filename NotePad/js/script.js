let $=document

let inputElem = $.querySelector('.form-control')
let btnSave = $.getElementById('btn-save')
let btnDel = $.getElementById('btn-delete')
let colorSel=$.querySelectorAll('.color-box')
let divColCol = $.querySelector('.card')
let divCol = $.querySelector('.col-11')
let divListed = $.querySelector('#listed')


inputElem.addEventListener('keydown',coloring)
btnSave.addEventListener('click',savehere)
btnDel.addEventListener('click',delhere)

function coloring(){

    colorSel.forEach(function(colorItem){
        colorItem.addEventListener('click',function(){
            let colorBoxStyle = colorItem.getAttribute('style')
          inputElem.setAttribute('style',colorBoxStyle)
           
        })
    })
    

}

function savehere(){

let pNew = document.createElement('p')
pNew.className =('card-text p-3')
pNew.innerText=inputElem.value

if(inputElem.hasAttribute('style')){
    pNew.setAttribute('style',inputElem.getAttribute('style'))
}

divColCol.className =('card shadow-sm rounded')
divColCol.append(pNew)
inputElem.value=''
inputElem.removeAttribute('style')
}
divListed.append(divColCol)

function delhere(){
inputElem.value='';
inputElem.removeAttribute('style')

}
divColCol.addEventListener('click',function(event){
    if(event.target.tagName === 'P'){
        event.target.remove()
    }
})
document.body.addEventListener('keypress',function(event){
    if(event.code ==='Enter'){
    savehere();
    }

})