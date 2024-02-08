let allProducts = [
    { id: 1, title: 'Album 1', price: 12.93, img: 'Images/Album 1.png',count:1 },
    { id: 2, title: 'Album 2', price: 21, img: 'Images/Album 2.png',count:1 },
    { id: 3, title: 'Album 3', price: 33, img: 'Images/Album 3.png' ,count:1 },
    { id: 4, title: 'Album 4', price: 41.98, img: 'Images/Album 4.png',count:1  },
    { id: 5, title: 'Coffee', price: 98, img: 'Images/Cofee.png' ,count:1 },
    { id: 6, title: 'Shirt', price: 65.33, img: 'Images/Shirt.png',count:1  },
]
let userBasket=[]


let newdivSection = document.querySelector('.shop-items')
let newCardItms = document.querySelector('.cart-items')
let totalSpan = document.querySelector('.cart-total-price')
let removeAllProducts=document.querySelector('#remove-all-products')



function loadProduct(){
    allProducts.forEach(function(product){
        let newDiv = document.createElement('div')
        newDiv.classList.add('shop-item')

        let newSpan = document.createElement('span')
        newSpan.classList.add('shop-item-title')
        newSpan.innerHTML=product.title

        let newImg = document.createElement('img')
        newImg.classList.add('shop-item-image')
        newImg.setAttribute('src',product.img)
        
        let newShopItemDetailes = document.createElement('div')
        newShopItemDetailes.classList.add('shop-item-details')
        
        let newDetail = document.createElement('span')
        newDetail.classList.add('shop-item-price')
        newDetail.innerHTML='$'+product.price
        
        let newBtn = document.createElement('button')
        newBtn.className='btn btn-primary shop-item-button'
        newBtn.innerHTML='ADD To Card'
        newBtn.addEventListener('click',function(){
            addToBsketArray(product.id)
        })



        
        newShopItemDetailes.append(newDetail,newBtn)
        newDiv.append(newSpan,newImg,newShopItemDetailes)
        newdivSection.append(newDiv)
       
    })
    
    
}

function addToBsketArray(productID){
   let mainProduct = allProducts.find(function(product){
       return product.id === productID
   })
   
   userBasket.push(mainProduct)
   userBasketGenertor(userBasket)
   totalInputCal(userBasket)
   console.log(mainProduct);
}

function userBasketGenertor(userBasketArray){
     newCardItms.innerHTML=''
    userBasketArray.forEach(function(product){
        
        let newCardRow = document.createElement('div')
        newCardRow.classList.add('cart-row')

        let newCardDiv=document.createElement('div')
        newCardDiv.className='cart-item cart-column'

        let newCardImg = document.createElement('img')
        newCardImg.classList.add('cart-item-image')
        newCardImg.setAttribute('src',product.img)

        let newCardSpan = document.createElement('span')
        newCardSpan.classList.add('cart-item-title')
        newCardSpan.innerHTML=product.title

        newCardDiv.append(newCardImg,newCardSpan)

        let newCardPriceSpn = document.createElement('span')
        newCardPriceSpn.className='cart-price cart-column'
        newCardPriceSpn.innerHTML='$'+product.price
        

        let newQuaDiv=document.createElement('div')
        newQuaDiv.className='cart-quantity cart-column'


        let newInputItem = document.createElement('input')
        newInputItem.classList.add('cart-quantity-input')
        newInputItem.value=product.count
        totalInputCal(userBasket)
        newInputItem.addEventListener('change',function(){
        updated(product.id,newInputItem.value)
 })

        let newRemoveButton = document.createElement('button')
        newRemoveButton.className='btn btn-danger'
        newRemoveButton.innerHTML='Remove'
        newRemoveButton.addEventListener('click',function(){
            removeProductFromBasket(product.id)
        })

        newQuaDiv.append(newInputItem,newRemoveButton)

        newCardRow.append(newCardDiv,newCardPriceSpn, newQuaDiv)
        
        newCardItms.append(newCardRow)
        
    })
   
}
function removeProductFromBasket(productID) {

     userBasket = userBasket.filter(function(product) {
        return product.id !== productID
    })
    console.log(userBasket);
    userBasketGenertor(userBasket)
    totalInputCal(userBasket)

}
removeAllProducts.addEventListener('click',function(){
   userBasket=[] 
   userBasketGenertor(userBasket)
   totalInputCal(userBasket)
})

function totalInputCal(userBasket){
    let totalPrice=0
    userBasket.forEach(function(product){
        totalPrice += product.count * product.price
        
    })
    totalSpan.innerHTML=totalPrice
 
}

function updated(productID,newcount){
    console.log('produc if is :'+productID + 'new cound is :'+newcount);

    userBasket.forEach(function (product){
        if(product.id===productID){
            product.count= newcount
        }
    })
    totalInputCal(userBasket)
}
window.addEventListener('load',loadProduct)