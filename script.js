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
const all = document.querySelector(".all")
const shopTwo = document.querySelector(".shop__now2")
const img = document.querySelector(".buy__img")
const img2 = document.querySelector(".buy__img2")
const img3 = document.querySelector(".buy__img3")
const img4 = document.querySelector(".buy__img4")
const buttonNotActiv = document.querySelector(".next__notactivated")
const skate = document.querySelector(".catalog__skateboards")
const revs = document.querySelector(".catalog__revs")
const skateButton = document.querySelector(".catalog__skateboards__button")
const revsButton = document.querySelector(".catalog__revs__button")
const finish = document.querySelector(".finish")
const form = document.querySelector(".form")
const next = document.querySelector(".next")
const buyBackground = document.querySelector(".buy__background")

shop.addEventListener("click", () => {
    all.classList.add("show")
    body.classList.add("lock")
})

shopTwo.addEventListener("click", () => {
    all.classList.toggle("show")
    body.classList.add("lock")
})

img.addEventListener("click",() => {
    all.classList.remove("show")
    body.classList.remove("lock")
})

img2.addEventListener("click",() => {
    buyBackground.classList.remove("show")
    skate.classList.remove("show")
    revs.classList.remove("show")
    all.classList.remove("show")
    body.classList.remove("lock")
})

img3.addEventListener("click",() => {
    buyBackground.classList.remove("show")
    revs.classList.remove("show")
    all.classList.remove("show")
    body.classList.remove("lock")
})

skateButton.addEventListener("click", () => {
    skate.classList.remove("show")
    finish.classList.add("show")
})

revsButton.addEventListener("click", () => {
    revs.classList.remove("show")
    finish.classList.add("show")
})
img4.addEventListener("click", () => {
    buyBackground.classList.remove("show")
    finish.classList.remove("show")
    body.classList.remove("lock")
    all.classList.remove("show")
})
buttonNotActiv.addEventListener("click", () => {
    const userName = document.getElementsByTagName("input")[0].value
    const user = Number(userName)
    const surName = document.getElementsByTagName("input")[1].value
    const userSur = Number(surName)
    const userPhon = document.getElementsByTagName("input")[2].value
    const userEmail = document.getElementsByTagName("input")[3].value
    const userLocation = document.getElementsByTagName("input")[4].value

    if (user / 1){
        alert("вы зделали что то не так в поле имя, проверте еще раз")
    } else if (userSur / 1){
        alert("вы зделали что то не так в поле фамилия, проверте еще раз")
    } else if (!(userPhon / 1)){
        alert("вы зделали что то не так в поле телефон, проверте еще раз")
    } else if (userName,surName,userPhon,userEmail,userLocation == ""){
        alert("вы зделали что то не заполнили, проверте еще раз")
    }  else {
        buttonNotActiv.style.display = "none"
    }
})

next.addEventListener("click", () => {
    const element = document.querySelector("#select");
    if (element.value == "skate"){
        skate.classList.add("show")
        form.style.display = "none"
        next.style.display = "none"
    } else {
        revs.classList.add("show")
        form.style.display = "none"
        next.style.display = "none"
    }
})