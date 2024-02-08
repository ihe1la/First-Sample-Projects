const colorBtns = document.querySelectorAll('.btn')
colorBtns.forEach(function(colorBtn){
    colorBtn.addEventListener('click',function(event){
        let btnColor = event.target.dataset.color
        console.log(btnColor);
        document.documentElement.style.setProperty('--theme-color',btnColor)
    })
    
})