const bar = document.getElementById("bar");
const nav = document.getElementsByClassName("navbar")[0];
const close = document.getElementById("close");

if (bar) {
    bar.addEventListener("click" , () => {
        nav.classList.add("active");
    })
}

if (close){
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}

var MainImg = document.getElementById("MainImg");
var urlParams = new URLSearchParams(window.location.search);
var img = urlParams.get('img');

var smallimg = document.getElementsByClassName("small-img");
for (var i = 0; i < smallimg.length; i++) {
    smallimg[i].onclick = function(){
        MainImg.src = this.src;
        var imgName = this.src.split('/').pop();
        var imgParam = imgName.split('.').shift();
        window.history.replaceState({}, '', '?img=' + imgParam);
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

document.addEventListener('DOMContentLoaded', function() {
// get the "Add to Cart" button element
var addToCartButton = document.querySelector('.normalspro');

// add a click event listener to the button
addToCartButton.addEventListener('click', function() {
// get the selected image
var selectedImage = document.querySelector('#MainImg');
// get the values of the product to be added
var productName = document.querySelector('.single-pro-details h4').textContent;
var productImage = selectedImage.src;
var productPrice = 1899;
// create a new table row element
var newRow = document.createElement('tr');
// add the row HTML with the product details
newRow.innerHTML = `
    <td><a href="#" class="remove-icon" data-row-id="4"><i class="far fa-times-circle"></i></a></td>
    <td><img src="${productImage}" alt=""></td>
    <td>${productName}</td>
    <td>Rs. ${productPrice}</td>
    <td><input type="number" value="1" min="1" id="quantity-input-4"></td>
    <td><span id="price-display-4">Rs. ${productPrice}</span></td>
`;
// append the new row to the cart table body
var cartTableBody = document.querySelector('#cart tbody');
if (cartTableBody) {
    cartTableBody.appendChild(newRow);
} else {
    console.error('Cart table body not found');
}})
});

// // get all small images
// var smallImages = document.querySelectorAll('.small-img');

// // add click event listener to each small image
// for (var i = 0; i < smallImages.length; i++) {
//   smallImages[i].addEventListener('click', function() {
//     // remove active class from all small images
//     for (var j = 0; j < smallImages.length; j++) {
//       smallImages[j].classList.remove('active');
//     }
//     // add active class to the clicked small image
//     this.classList.add('active');
//     // set the main image source to the clicked small image source
//     var imageParam = this.src.split('/').pop().split('.')[0];
//     var mainImage = document.querySelector('#MainImg');
//     mainImage.src = `img/products/${imageParam}.jpg`;
//   });
// }


const input = document.querySelector('input[type="number"]');
input.addEventListener('input', function() {
    if (input.value < 1) {
        input.value = 1;
    }
});

const quantityInputs = document.querySelectorAll('input[type="number"]');
    
quantityInputs.forEach(function(quantityInput) {
    const priceDisplay = document.getElementById('price-display-' + quantityInput.id.slice(-1));
    const price = parseInt(priceDisplay.textContent.slice(4));
    
    quantityInput.addEventListener('input', function() {
        const quantity = quantityInput.value;
        const total = quantity * price;
        priceDisplay.textContent = 'Rs. ' + total;
    });
});

const removeIcons = document.querySelectorAll('.remove-icon');
    
    removeIcons.forEach(function(removeIcon) {
        const rowId = removeIcon.dataset.rowId;
        const row = document.getElementById('row-' + rowId);
        
        removeIcon.addEventListener('click', function(e) {
            e.preventDefault();
            row.remove();
        });
    });