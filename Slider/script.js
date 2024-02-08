let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')
let divElem = document.querySelector('.slider')
let imgElem = document.querySelector('img')

let pictures=[
    src='image/1.jpg',
    src='image/2.png',
    src='image/3.jpg'
]
let index=0

function nextF(){
    index++
 
    pictures.forEach(function(pic){
        
        imgElem.setAttribute('src',pictures[index])   
        if(index===pictures.length){
            index=0}
    })
   
    console.log(imgElem);
}
index=3
function prevF(){
    index-- 
    console.log(index);
    pictures.forEach(function(pic){
        imgElem.setAttribute('src',pictures[index])  
        
         if(index===-1){
             index=2
         }
    })
   
    console.log(imgElem);
}

nextBtn.addEventListener('click',nextF)
prevBtn.addEventListener('click',prevF)

