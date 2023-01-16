const burger = document.querySelector(".burger")
const mobileBackground = document.querySelector(".mobile__background")
const leftArrow = document.querySelector(".accessories__slider__arrow__first")
const rightArrow = document.querySelector(".accessories__slider__arrow__second")
let position = 0

burger.addEventListener("click", ()=>{
    const mobileBurger = document.querySelector(".mobile__menu")
    const mobileBackground = document.querySelector(".mobile__background")

    mobileBurger.classList.toggle("active")
    mobileBackground.classList.toggle("active")
})

mobileBackground.addEventListener("click", ()=>{
    const mobileBurger = document.querySelector(".mobile__menu")
    const mobileBackground = document.querySelector(".mobile__background")

    mobileBurger.classList.remove("active")
    mobileBackground.classList.remove("active")
})

rightArrow.addEventListener("click", ()=>{
    if (position < 748){
        position = position + 187
    } else {
        position = 748
    }
    const slider = document.querySelector(".accessories__slider").style.left = -position + "px";
})

leftArrow.addEventListener("click", ()=>{
    if (position > 0){
        position = position - 187
    } else {
        position = 0
    }
    const slider = document.querySelector(".accessories__slider").style.left = -position + "px";
})