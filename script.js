const burger = document.querySelector(".burger");
const mobileBackground = document.querySelector(".mobile__background");
const leftArrow = document.querySelector(".accessories__slider__arrow__first");
const rightArrow = document.querySelector(".accessories__slider__arrow__second");
const mobileBurger = document.querySelector(".mobile__menu");
const body = document.querySelector("body");
const el = document.querySelector(".accessories__sliders");
let marginRight = window.getComputedStyle(el).marginRight;
let margin = Number(marginRight.slice(0, -4))
let n = 10 * Number(marginRight.slice(3,-2));
let position = 0

burger.addEventListener("click", ()=>{
    mobileBurger.classList.toggle("active");
    mobileBackground.classList.toggle("active");
    body.classList.toggle("lock");
});

mobileBackground.addEventListener("click", ()=>{
    mobileBurger.classList.remove("active");
    mobileBackground.classList.remove("active");
    body.classList.toggle("lock");
});

if(Number.isNaN(n)){n = 0}

rightArrow.addEventListener("click", ()=>{
    if (position < (187 + margin) * (n + 4)){
        position = position + 187 + margin
    } else {
        position = 0
    }
    const slider = document.querySelector(".accessories__slider").style.left = -position + "px";
});

leftArrow.addEventListener("click", ()=>{
    if (position > 0){
        position = position - 187 - margin
    } else {
        position =  (187 + margin) * (n + 4)
    }
    const slider = document.querySelector(".accessories__slider").style.left = -position + "px";
});







const shop = document.querySelector(".shop__now")
const buy = document.querySelector(".buy");
const buyBackground = document.querySelector(".buy__background");
const shopTwo = document.querySelector(".shop__now2")
const span = document.querySelector(".buy__span")
const span2 = document.querySelector(".buy__span2")
const span3 = document.querySelector(".buy__span3")
const span4 = document.querySelector(".buy__span4")
const chekboxSkate = document.querySelector(".product__input__skate")
const chekboxRevs = document.querySelector(".product__input__revs")
const button = document.querySelector(".next")
const skate = document.querySelector(".catalog__skateboards")
const revs = document.querySelector(".catalog__revs")
const skateButton = document.querySelector(".catalog__skateboards__button")
const revsButton = document.querySelector(".catalog__revs__button")
const finish = document.querySelector(".finish")

shop.addEventListener("click", () => {
    buy.classList.toggle("show")
    buyBackground.classList.add("show")
})

shopTwo.addEventListener("click", () => {
    buy.classList.toggle("show")
    buyBackground.classList.add("show")
})

span.addEventListener("click",() => {
    buy.classList.remove("show")
    buyBackground.classList.remove("show")
})

span2.addEventListener("click",() => {
    buyBackground.classList.remove("show")
    skate.classList.remove("show")
    revs.classList.remove("show")
})

span3.addEventListener("click",() => {
    buyBackground.classList.remove("show")
    revs.classList.remove("show")
})

button.addEventListener("click", () => {
    if (chekboxSkate.checked){
        buy.classList.remove("show")
        skate.classList.add("show")
    } else if (chekboxRevs.checked){
        buy.classList.remove("show")
        revs.classList.add("show")
    } else {
        alert("выберите товар")
    }
})

skateButton.addEventListener("click", () => {
    skate.classList.remove("show")
    finish.classList.add("show")
})

revsButton.addEventListener("click", () => {
    revs.classList.remove("show")
    finish.classList.add("show")
})
span4.addEventListener("click",() => {
    buyBackground.classList.remove("show")
    finish.classList.remove("show")
})