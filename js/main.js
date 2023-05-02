const openMenu = document.querySelector("header .container .menu");
const closeMenu = document.querySelector("header .container .close");
const menu = document.querySelector("header .nav");
const cartHolder = document.querySelector(".cart-holder");
const cart = document.querySelector(".cart");
openMenu.addEventListener("click", toggleMenu)
closeMenu.addEventListener("click",toggleMenu)
cartHolder.addEventListener("click", ()=>{
    cart.classList.toggle("active")
})
function toggleMenu(){
    menu.classList.toggle("active");
}
function toggleCart(){
    cart.classList.toggle("active");
}