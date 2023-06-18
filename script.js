const bar = document.getElementById("bar");
const nav = document.getElementsByClassName("navbar")[0];
const close = document.getElementById("close");

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    })
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}


var MainImg = document.getElementById("MainImg");
var productName = document.getElementById("product-name");
var productPrice = document.getElementById("product-price");
var urlParams = new URLSearchParams(window.location.search);
var img = urlParams.get('img');
var name = urlParams.get('name');
var price = urlParams.get('price');

var smallimg = document.getElementsByClassName("small-img");
for (var i = 0; i < smallimg.length; i++) {
    smallimg[i].onclick = function () {
        MainImg.src = this.src;
        var imgName = this.src.split('/').pop();
        var imgParam = imgName.split('.').shift();
        window.history.replaceState({}, '', '?img=' + imgParam + '&name=' + name + '&price=' + price);
        productName.innerHTML = name;
        productPrice.innerHTML = 'Rs.' + price;

        var imageCell = document.getElementById("product-image-cell");
        imageCell.innerHTML = '<img src="' + MainImg.src + '" alt="Product Image">';
    }
    }



if (img === 'f1') {
    MainImg.src = 'img/products/f1.jpg';
} else if (img === 'f2') {
    MainImg.src = 'img/products/f2.jpg';
} else if (img === 'f3') {
    MainImg.src = 'img/products/f3.jpg';
} else if (img === 'f4') {
    MainImg.src = 'img/products/f4.jpg';
}



productName.innerHTML = name;
productPrice.innerHTML = 'Rs.' + price;



