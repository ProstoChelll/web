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

img4.addEventListener("click", () => {
    buyBackground.classList.remove("show")
    finish.classList.remove("show")
    body.classList.remove("lock")
    all.classList.remove("show")
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
skateButton.addEventListener("click", () => {
    skate.classList.remove("show")
    finish.classList.add("show")
})

revsButton.addEventListener("click", () => {
    revs.classList.remove("show")
    finish.classList.add("show")
})
    const surName = document.querySelector("[name=surname]")
    const userPhon = document.querySelector("[name=userphon]")
    const userEmail = document.querySelector("[name=useremail]")
    const userLocation = document.querySelector("[name=userlocation]")
    const userNameSpan = document.querySelector(".username__span")
    const surNameSpan = document.querySelector(".surname__span")
    const telSpan = document.querySelector(".tel__span")
    const emailSpan = document.querySelector(".email__span")
    const userLocationSpan = document.querySelector(".userlocation__span")

let formElemnts = {
    userName: "",
    surName: "",
    userPhon: "",
    userEmail: "",
    userLocation: ""
}

let arrFormElemnts = [formElemnts.userName , formElemnts.surName , formElemnts.userPhon , formElemnts.userEmail , formElemnts.userLocation]

const valid = (condition) => {
    if(condition){
        arrFormElemnts[0] = form.username.value
        arrFormElemnts[1] = form.surname.value
        arrFormElemnts[2] = form.userphon.value
        arrFormElemnts[3] = form.useremail.value
        arrFormElemnts[4] = form.userlocation.value
    } else {
        arrFormElemnts[0] = ""
        arrFormElemnts[1] = ""
        arrFormElemnts[2] = ""
        arrFormElemnts[3] = ""
        arrFormElemnts[4] = ""
    }
    console.log(arrFormElemnts)
}

const isValid = () =>{
    return arrFormElemnts.map((input, index) => {
        return valid(arrFormElemnts[index].length < 2)
    })
}

form.addEventListener("click", () =>{
    isValid()
})

// function toggleClass(element, clasz) {
//     element.classList.toggle(clasz)
// }
// const setValue = (input, condition) => {
//     if (condition) {
//         formElemnts.userName = ""
//         toggleClass(input, "error")
//         toggleClass(userNameSpan, "block")
//     }
//     else {
//         formElemnts.userName = input.value
//         toggleClass(input, "error")
//         toggleClass(userNameSpan, "block")
//     }
// }
// const formInputs = [form.username, form.username, form.username, form.username, form.username]
// const isValid = () => {
//     return formInputs.map((input, index) => {
//         console.log(formInputs[index].value < 10)
//         return setValue(formInputs[index], formInputs[index].value < 10)
//     })
// }

// const treatment = () => {
//     if (isValid() == false) {
//         buttonNotActiv.style.display = "none"
//     }
// }



// const setUserName = (a) =>{
//     const input = form.username.value
//     if (input.length <= 2){
//         formElemnts.userName = ""
//         form.username.classList.add("error")
//         userNameSpan.style.display = "block"
//         return a = a + 1
//     } else {
//         formElemnts.userName = input
//         form.username.classList.remove("error")
//         userNameSpan.style.display = "none"
//     }
// }
// const setUserSurName = (a) =>{
//     const input = form.surname.value
//     if (input.length <= 2){
//         formElemnts.surName = ""
//         form.surname.classList.add("error")
//         surNameSpan.style.display = "block"
//         return a = a + 1
//     } else {
//         formElemnts.surName = input
//         form.surname.classList.remove("error")
//         surNameSpan.style.display = "none"
//     }
// }
// const setUserTel = (a) =>{
//     const input = form.userphon.value
//     if (!(input.length < 12 && input.length > 10)){
//         formElemnts.userPhon = ""
//         form.userphon.classList.add("error")
//         telSpan.style.display = "block"
//         return a = a + 1
//     } else {
//         formElemnts.userPhon = input
//         form.userphon.classList.remove("error")
//         telSpan.style.display = "none"
//     }
// }
// const setUserEmail = (a) =>{
//     const input = form.useremail.value
//     if (input.length < 1){
//         formElemnts.userEmail = ""
//         form.useremail.classList.add("error")
//         emailSpan.style.display = "block"
//         return a = a + 1
//     } else {
//         formElemnts.userEmail = input
//         form.useremail.classList.remove("error")
//         emailSpan.style.display = "none"
//     }
// }
// const setUserLocation = (a) =>{
//     const input = form.userlocation.value
//     if (input.length < 1){
//         formElemnts.userLocation = ""
//         form.userlocation.classList.add("error")
//         userLocationSpan.style.display = "block"
//         return a = a + 1
//     } else {
//         formElemnts.userLocation = input
//         form.userlocation.classList.remove("error")
//         userLocationSpan.style.display = "none"
//     }
// }

// const treatment = () => {
//     if (setUserName(0) == 1 || setUserSurName(0) == 1 || setUserTel(0) == 1 || setUserEmail(0) == 1 || setUserLocation(0) == 1){

//     } else {
//         buttonNotActiv.style.display = "none"
//     }
// }