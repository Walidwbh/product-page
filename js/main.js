const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});
const openMenu = document.querySelector("header .container .menu");
const closeMenu = document.querySelector("header .container .close");
const menu = document.querySelector("header .nav");
const cartHolder = document.querySelector(".cart-holder");
const cart = document.querySelector(".cart");
const activeImg = document.getElementById("selected-img");
const imageList = document.querySelectorAll(".image-list li");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
openMenu.addEventListener("click", toggleMenu)
closeMenu.addEventListener("click",toggleMenu)
cartHolder.addEventListener("click", ()=>{
    cart.classList.toggle("active")
})

imageList.forEach(img=>{
    img.addEventListener("click", changeImage)
})
plus.addEventListener("click", add)
minus.addEventListener("click", reduct)
// functions
function add(){
    document.getElementById("number").value++;
}
function reduct(){
    var number = document.getElementById("number").value;
    if(number>0){
        document.getElementById("number").value--;
    }
}
function toggleMenu(){
    menu.classList.toggle("active");
}
function toggleCart(){
    cart.classList.toggle("active");
}
function changeImage(evt){
    activeImg.src = evt.target.src;
    imageList.forEach(l=>{
        l.classList.remove("active");
    })
    evt.currentTarget.classList.add("active")
}
