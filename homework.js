let arr = [1,2,3,4,5,6,7,8]

let array = arr.filter((element) => {
    return element % 2 == 0
})
console.log(array)



let arr2 = [
    {name: "sasha", age: 20},
    {name: "misha", age: 30},
    {name: "masha", age: 25}
]
let array2 = arr2.map((elment) => {
    if (elment.age > 24){
        return elment.age
    }
})
console.log(array2)



let arr3 = [
    {name: "sasha", age: 20, city: "russia"},
    {name: "sasha", age: 40, city: "russia"},
    {name: "sasha", age: 90, city: "russia"},
    {name: "misha", age: 30, city: "america"},
    {name: "misha", age: 60, city: "america"},
    {name: "misha", age: 20, city: "america"},
    {name: "masha", age: 75, city: "canada"},
    {name: "masha", age: 15, city: "canada"},
    {name: "masha", age: 35, city: "canada"}
]

let i = 0
let b = 0
let c = 0

let array3 = arr3.reduce((prev,item) => {
        if (item.city == "russia"){
        console.log(item.age)
        i++
        }
}, 0)
console.log(i)

let array3_1 = arr3.reduce((prev,item) => {
    if (item.city == "america"){
        console.log(item.age)
        b++
    }
})
console.log(b)

let array3_2 = arr3.reduce((prev,item) => {
    if (item.city == "canada"){
        console.log(item.age)
        c++
    }
})
console.log(c)

let booksArray = [
    {name: "Harry Potter", author: "J.K. Rowling", genre: "fantasy", pages: 400},
    {name: "1984", author: "George Orwell", genre: "dystopian", pages: 300},
    {name: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "comedy", pages: 200},
    {name: "Dune", author: "Frank Herbert", genre: "science fiction", pages: 500},
    {name: "Ender's Game",author: "Orson Scott Card", genre: "science fiction", pages: 400},
    {name: "The Foundation", author: "Isaac Asimov", genre: "science fiction", pages: 600},
    {name: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "fantasy", pages: 800},
    {name: "The Martian", author: "Andy Weir", genre: "science fiction", pages: 400},
    {name: "The Hunger Games", author: "Suzanne Collins", genre: "dystopian", pages: 300},
    {name: "Brave New World", author: "Aldous Huxley", genre: "dystopian", pages: 350}
    ]

books(booksArray)

function books(arr) {
    arr.map((element) => {
        if (element.genre = "fantasy"){

        } else {
            delete arr.value//из за такого удаления ненужные обьекты удалились визуально но в массиве они все ровно присутсвуют(это видно по длине массива)
        }
    })
}

console.log(booksArray)