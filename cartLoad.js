function populateCart(){
    var cart;
    if(!localStorage.getItem('cart')){
        cart = []
        localStorage.setItem('cart', JSON.stringify(cart))
        
    }else{
        cart= JSON.parse(localStorage.getItem("cart"))
        document.getElementById('cart-counter-text').innerHTML = cart.length
    }

    var cartHeaders = `<tr>
    <th id="item">Item</th>
    <th>Quantity</th>
    <th>Price</th>
    </tr>`

    var cart = JSON.parse(localStorage.getItem('cart'))
    var totalPrice = 0;
    var cartInfo = '';
    if(cart.length > 0){
        document.getElementById('empty-cart-text').style.display = 'none';
        let count = 0;
        for(let x of cart){
            var htmlCode = `
                <tr class="cart-item" id="cartItem${count}">
                <td>
                    <div class="cart-info">
                        <div class="first-column">
                            <a class="remove" href="cart.html">
                                <img src="Images/Cross.png" alt="remove" id="remove-item" onClick="removeItem(${count})">
                            </a>
                            <img id="cart-image" src="${x.image}" alt="image of the item">
                        </div>
                        <div class="info">
                            <p>${x.name}}</p>
                            <small>${x.glaze} Glaze</small>
                            
                        </div>
                    </div>
                </td>
                <td class = "quant" id="quantity">Box of ${x.boxSize}</td>
                <td class = "price" id="total">$<span>${parseFloat(x.price).toFixed(2)}</span></td>
                </tr>`
                cartInfo += htmlCode
                totalPrice = Number(totalPrice)
                let currPrice = Number(x.price)
                totalPrice = totalPrice + currPrice
                count += 1
        }
        document.getElementsByClassName('cart-items')[0].insertAdjacentHTML("beforeend", cartHeaders)
        document.getElementsByClassName('cart-items')[0].insertAdjacentHTML("beforeend", cartInfo)
        document.getElementById('price-calc').innerHTML = parseFloat(totalPrice).toFixed(2);
    }

}

function removeItem(count){
    document.getElementById(`cartItem${count}`).remove();
    cart = JSON.parse(localStorage.getItem("cart"))
    cart.splice(count,1)
    localStorage.setItem("cart", JSON.stringify(cart));
    if(cart.length == 0){
        document.getElementById("empty-cart-text").style.display = 'block';
        
    }
    }