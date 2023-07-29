//active navbar element
let lis = document.querySelectorAll('ul li a')
lis.forEach((ele) => {
    ele.onclick = () => {
        lis.forEach((ele) => {
            ele.classList.remove('active');
        })
        ele.classList.add('active');
    }
});

//the count of products
let plus = document.querySelector(".right .line .add .bx-plus");
let minus = document.querySelector(".right .line .add .bx-minus");
let num = document.querySelector(".right .line .add h3");
let mynum = Number(num.textContent);
console.log(mynum + 1);
plus.onclick = () => {
    if (Number(num.textContent) < 40) {
        mynum++;
        num.textContent = mynum;
    }
}
minus.onclick = () => {
    if (Number(num.textContent) > 0) {
        mynum--;
        num.textContent = mynum;
    }
}

//change the main image 
let Images = document.querySelectorAll(".left .second-image img");
let myImage = document.querySelector(".left .main-image img");
Images.forEach((ele) => {
    ele.onclick = () => {
        myImage.src = ele.src;
        Images.forEach((ele) => {
            ele.classList.remove("active");
        })
        ele.classList.add("active")
    }
})


//display the cart when click on card icon
let AddCart = document.querySelector(".right .line button");
let cartContent = document.querySelector(".cart-content");

let cartTitle = document.querySelector(".cart-content .cart-title");
let cartIcon = document.querySelector(".right-nav .svg-container");
let closeCart = document.querySelector(".cart-content .close");
cartIcon.onclick = () => {
    cartContent.style.display = "block";
}

// close the cart when click on close icon
closeCart.onclick = () => {
    cartContent.classList.add("hide");
}


//display the card content when we click on add to cart button
let cartInfoText = document.querySelector(".cart-content .cart-info p");
let cartInfoPrice = document.querySelector(".cart-content .cart-info  span");
let cartImage = document.querySelector(".cart-content .cart-info img");
let priceDetails = document.querySelector(".cart-content .cart-info h4");
let checkButton = document.querySelector(".cart-content input")
let price = document.querySelector(".right .price span");
let productNum = document.querySelector(".svg-container .cart-products");
let deleteIcon = document.querySelector(".cart-content .delete-icon");


AddCart.onclick = () => {
    let counter = Number(num.textContent);
    if (counter !== 0) {
        cartInfoText.style.marginLeft = "0";
        cartInfoText.textContent = document.querySelector(".right .title").textContent;
        let myPrice = counter * Number(price.textContent);
        cartInfoPrice.textContent = myPrice + "$";
        priceDetails.textContent = price.textContent + " x " + counter;
        cartImage.src = myImage.src;
        checkButton.style.display = 'block';
        productNum.style.backgroundColor = 'var(--purple)';
        productNum.textContent = counter;
        deleteIcon.style.display = 'block';
    }
}
//return the cat empty
deleteIcon.onclick = () => {
    cartInfoText.style.marginLeft = "-100px";
    cartInfoText.textContent = 'The Cart is Empty';
    priceDetails.textContent = '';
    cartInfoPrice.textContent = '';
    cartImage.src = '';
    checkButton.style.display = 'none';
    deleteIcon.style.display = 'none';
    productNum.style.backgroundColor = 'white';
    productNum.textContent = '';
}


//menu for mobile
let menu = document.querySelector(".menu");
let themenu = document.querySelector("nav ul");
let closeMobileNav = document.querySelector(".close-mobile");
menu.onclick = () => {
    closeMobileNav.style.display = "block";
    themenu.style.left = "-100px";
}
closeMobileNav.onclick = () => {
    themenu.style.left = "-290px";
}