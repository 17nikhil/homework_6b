var defaultPrices = [1.29, 2.99, 2.99, 2.99, 1.99, 1.99];
//parseFloat(document.getElementById('price-calc').lastChild.innerHTML); //"7.99"
var defaultPrice;
var updatedPrice = document.getElementById('price-calc').lastChild.innerHTML;
var count;

function getDefaultPrice(){    
    if(document.getElementById('bun-name').innerHTML=='Original'){
        defaultPrice=defaultPrices[0];
    }else if(document.getElementById('bun-name').innerHTML=='Blackberry'){
        defaultPrice=defaultPrices[1];
    }else if(document.getElementById('bun-name').innerHTML=='Walnut'){
        defaultPrice=defaultPrices[2];
    }else if(document.getElementById('bun-name').innerHTML=='Gluten Free'){
        defaultPrice=defaultPrices[3];
    }else if(document.getElementById('bun-name').innerHTML=='Pumpkin Spice'){
        defaultPrice=defaultPrices[4];
    }else if(document.getElementById('bun-name').innerHTML=='Caramel Pecan'){
        defaultPrice=defaultPrices[5];
    }
    return defaultPrice;
}

function selectGlaze() {
    getDefaultPrice();
    var price = defaultPrice;
    var image;
    if(document.getElementById('none').checked){
        image = 'Images/Glaze-none.png';
    }
    else if(document.getElementById('sugar').checked) {
        price += 0.99;
        image = 'Images/Glaze-SugarMilk.png';
    }else if(document.getElementById('vanilla').checked) {
        price +=1.19;
        image = 'Images/Glaze-VanillaMilk.png';
    }else if(document.getElementById('chocolate').checked) {
        price +=1.29;
        image = 'Images/Glaze-DoubleChocolate.png';
    }
    document.getElementById('price-calc').lastChild.innerHTML = price.toFixed(2);
    updatedPrice = price.toFixed(2);
    document.getElementById('glazeImage').src = image;
}



function selectBox(){
    var quantPrice = updatedPrice;
    var quantImage;
    
    if(document.getElementById('1').checked){
        quantImage = "Images/Box-1.png";
        quantPrice = parseFloat(quantPrice);
    }
    else if(document.getElementById('6').checked){
        quantImage = "Images/Box-6.png";
        quantPrice = quantPrice * 6;
    }
    else if(document.getElementById('3').checked){
        quantImage = "Images/Box-3.png";
        quantPrice = quantPrice * 3;
    }
    else if(document.getElementById('12').checked){
        quantImage = "Images/Box-12.png";
        quantPrice = quantPrice* 12;
    }

    document.getElementById('price-calc').lastChild.innerHTML = quantPrice.toFixed(2);
    document.getElementById('quantityImage').src= quantImage;
}

//Adding to cart


function fetchSelectionDetails(bun){
    var glaze;
    var box;
    if(bun == 'walnut'){
        var parentId = document.getElementById('glaze-input-walnut')
        var selectedGlaze = parentId.getElementsByClassName('radio')
        for(var i=0;i<selectedGlaze.length;i++){
            if(selectedGlaze[i].getElementsByTagName('input')[0].checked){
                glaze = selectedGlaze[i].getElementsByTagName('input')[0].value
            }
        }
        
        var parentId = document.getElementById('quantity-input-walnut')
        var selectedBox = parentId.getElementsByClassName('radio')
        for(var i=0;i<selectedBox.length;i++){
            if(selectedBox[i].getElementsByTagName('input')[0].checked){
                box = selectedBox[i].getElementsByTagName('input')[0].value
            }
        }
        var totalPrice = document.getElementById('price-calc').innerText
        return {
            name: "Walnut Cinnamon Bun",
            image: "Images/walnut.jpg",
            glaze: glaze,
            boxSize: box,
            price: totalPrice
        }
    }else if(bun == 'pumpkin'){
        var parentId = document.getElementById('glaze-input-pumpkin')
        var selectedGlaze = parentId.getElementsByClassName('radio')
        for(var i=0;i<selectedGlaze.length;i++){
            if(selectedGlaze[i].getElementsByTagName('input')[0].checked){
                glaze = selectedGlaze[i].getElementsByTagName('input')[0].value
            }
        }
        
        var parentId = document.getElementById('quantity-input-pumpkin')
        var selectedBox = parentId.getElementsByClassName('radio')
        for(var i=0;i<selectedBox.length;i++){
            if(selectedBox[i].getElementsByTagName('input')[0].checked){
                box = selectedBox[i].getElementsByTagName('input')[0].value
            }
        }
        var totalPrice = document.getElementById('price-calc').innerText
        return {
            name: "Pumpkin Spice Cinnamon Bun",
            image: "Images/pumpkin.jpg",
            glaze: glaze,
            boxSize: box,
            price: totalPrice
        }
    }else if(bun == 'original'){
        var parentId = document.getElementById('glaze-input-original')
        var selectedGlaze = parentId.getElementsByClassName('radio')
        for(var i=0;i<selectedGlaze.length;i++){
            if(selectedGlaze[i].getElementsByTagName('input')[0].checked){
                glaze = selectedGlaze[i].getElementsByTagName('input')[0].value
            }
        }
        
        var parentId = document.getElementById('quantity-input-original')
        var selectedBox = parentId.getElementsByClassName('radio')
        for(var i=0;i<selectedBox.length;i++){
            if(selectedBox[i].getElementsByTagName('input')[0].checked){
                box = selectedBox[i].getElementsByTagName('input')[0].value
            }
        }
        var totalPrice = document.getElementById('price-calc').innerText
        return {
            name: "Original Cinnamon Bun",
            image: "Images/original.jpg",
            glaze: glaze,
            boxSize: box,
            price: totalPrice
        }
    }else if(bun == 'gluten'){
        var parentId = document.getElementById('glaze-input-gluten')
        var selectedGlaze = parentId.getElementsByClassName('radio')
        for(var i=0;i<selectedGlaze.length;i++){
            if(selectedGlaze[i].getElementsByTagName('input')[0].checked){
                glaze = selectedGlaze[i].getElementsByTagName('input')[0].value
            }
        }
        
        var parentId = document.getElementById('quantity-input-gluten')
        var selectedBox = parentId.getElementsByClassName('radio')
        for(var i=0;i<selectedBox.length;i++){
            if(selectedBox[i].getElementsByTagName('input')[0].checked){
                box = selectedBox[i].getElementsByTagName('input')[0].value
            }
        }
        var totalPrice = document.getElementById('price-calc').innerText
        return {
            name: "Gluten-Free Cinnamon Bun",
            image: "Images/gluten.jpg",
            glaze: glaze,
            boxSize: box,
            price: totalPrice
        }
    }else if(bun == 'caramel'){
        var parentId = document.getElementById('glaze-input-caramel')
        var selectedGlaze = parentId.getElementsByClassName('radio')
        for(var i=0;i<selectedGlaze.length;i++){
            if(selectedGlaze[i].getElementsByTagName('input')[0].checked){
                glaze = selectedGlaze[i].getElementsByTagName('input')[0].value
            }
        }
        
        var parentId = document.getElementById('quantity-input-caramel')
        var selectedBox = parentId.getElementsByClassName('radio')
        for(var i=0;i<selectedBox.length;i++){
            if(selectedBox[i].getElementsByTagName('input')[0].checked){
                box = selectedBox[i].getElementsByTagName('input')[0].value
            }
        }
        var totalPrice = document.getElementById('price-calc').innerText
        return {
            name: "Caramel Pecan Cinnamon Bun",
            image: "Images/pecan.jpg",
            glaze: glaze,
            boxSize: box,
            price: totalPrice
        }
    }else if(bun == 'blackberry'){
        var parentId = document.getElementById('glaze-input-blackberry')
        var selectedGlaze = parentId.getElementsByClassName('radio')
        for(var i=0;i<selectedGlaze.length;i++){
            if(selectedGlaze[i].getElementsByTagName('input')[0].checked){
                glaze = selectedGlaze[i].getElementsByTagName('input')[0].value
            }
        }
        
        var parentId = document.getElementById('quantity-input-blackberry')
        var selectedBox = parentId.getElementsByClassName('radio')
        for(var i=0;i<selectedBox.length;i++){
            if(selectedBox[i].getElementsByTagName('input')[0].checked){
                box = selectedBox[i].getElementsByTagName('input')[0].value
            }
        }
        var totalPrice = document.getElementById('price-calc').innerText
        return {
            name: "Blackberry Cinnamon Bun",
            image: "Images/blackberry.jpg",
            glaze: glaze,
            boxSize: box,
            price: totalPrice
        }
    }
    
}


function displayAlert(bun_name){

    alert(bun_name + ' cinnamon bun added to the cart!')
    //checking which bun was added to the cart

    var cart = JSON.parse(localStorage.getItem('cart'));
    if(bun_name == "walnut"){
        cart.push(fetchSelectionDetails('walnut'))
    }else if(bun_name == "pumpkin"){
        cart.push(fetchSelectionDetails('pumpkin'))
    }else if(bun_name == "original"){
        cart.push(fetchSelectionDetails('original'))
    }else if(bun_name == "gluten"){
        cart.push(fetchSelectionDetails('gluten'))
    }else if(bun_name == "caramel"){
        cart.push(fetchSelectionDetails('caramel'))
    }else if(bun_name == "blackberry"){
        cart.push(fetchSelectionDetails('blackberry'))
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById('cart-counter-text').innerHTML = cart.length;

}

//the automatic reccommendation slider
var slider = document.getElementById("slider");
var sliderWidth = slider.offsetWidth;
var slideList = document.getElementById("slideWrap");
var count = 1;
var items = slideList.querySelectorAll("li").length;
var prev = document.getElementById("prev");
var next = document.getElementById("next");

window.addEventListener('resize', function() {
  sliderWidth = slider.offsetWidth;
});

function prevSlide() {
    if(count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  
    else if(count = 1) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  function nextSlide() {
    if(count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = items) {
      slideList.style.left = "0px";
      count = 1;
    }
  };

  setInterval(function() {
    nextSlide()
  }, 3000);