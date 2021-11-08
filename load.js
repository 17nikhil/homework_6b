function onLoad(){
    var cart;
    if(!localStorage.getItem('cart')){
        cart = []
        localStorage.setItem('cart', JSON.stringify(cart))
        
    }else{
        cart= JSON.parse(localStorage.getItem("cart"))
        document.getElementById('cart-counter-text').innerHTML = cart.length
    }
}