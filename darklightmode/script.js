let switchElem = document.querySelector('.switch')

switchElem.addEventListener('click',function(){
  document.body.classList.toggle('dark') 
    if(document.body.className.includes('dark')){
        localStorage.setItem('theme','dark')
    }else{
        localStorage.setItem('theme','light')
    }
})

window.onload=function(){
     let locltheme = localStorage.getItem('theme')
     if(locltheme==='dark'){
        document.body.classList.add('dark')
     } 
}