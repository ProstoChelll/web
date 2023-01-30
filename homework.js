let books = [{
    name: "bookName",
    author: "authorName",
    pages: 150,
    dateOfCreation: 2000
}]

const added = (nameBook, authorBok, pagesBook, dateOfCreationBook) =>{
    let book = {
        name: nameBook,
        author: authorBok,
        pages: pagesBook,
        dateOfCreation: dateOfCreationBook
    }
    return book
}
books.push(added("asdf","asdfa",314,1723))//добавляет новый обьект в массив
console.log(books)


const deleted = (delBook) =>{
    let i = 0
    if(books[i].name == delBook){
    } else (
        i++
    )
    books.splice(i,1)
}
//deleted("asdf")удаление по имени


const search = (searchBook) =>{
    let i = 0
    if(books[i].name == searchBook){
    } else (
        i++
    )
    console.log(books[i])
}
//search("asdf")находит обьект по имени


const sort = (from, befor) =>{ //from - это значение от(от 1723). befor - значение до (до 2000)
    let c = books.filter((currentValue) => {
        return currentValue.dateOfCreation >= from && currentValue.dateOfCreation <= befor
    })
    console.log(c)
}
//sort(1723,2000)сортировка книг по дате


const page = (pageBook, pag) =>{ //pageBook - книга к которой применятся изменения. pag - кол-во страниц
    let i = 0
    if(books[i].name == pageBook){
        books[i].pages = pag
    } else (
        i++
    )
}

//page("bookName", 350)





const users = [
    { name: "John", surname: "Doe", birthdate: "1990-01-01", email: "john.doe@example.com", password: "password123" },
    { name: "Jane", surname: "Doe", birthdate: "1995-03-01", email: "jane.doe@example.com", password: "password456" },
    { name: "Bob", surname: "Smith", birthdate: "1985-02-01", email: "bob.smith@example.com", password: "password789" },
    { name: "Alice", surname: "Johnson", birthdate: "2000-04-01", email: "alice.johnson@example.com", password: "password000" }
    ];

function selectUsers(users, date) {
    const validBirthdate = /^\d{4}-\d{2}-\d{2}$/;
    const validEmail = /^[a-z]+\.[a-z]+@[a-z]+\.[a-z]+$/;
    return users.filter(user => {
        return validBirthdate.test(user.birthdate) && validEmail.test(user.email) && user.name !== "" && user.surname !== "" && new Date(user.birthdate) >= new Date(date);
    }).sort((a, b) => new Date(b.birthdate) - new Date(a.birthdate));
}

let SortUsers = (selectUsers(users, 1985))

const filterAndSortUsers = (date) =>{
    let c = SortUsers.filter((currentValue) =>{
        let year = currentValue.birthdate.slice(0,4)
        year = Number(year)
        return year >= date
    })
    console.log(c)
}
filterAndSortUsers(1980)//сдесь задается дата по которой происходит филтрация массива по дате(от 1980- ∞)