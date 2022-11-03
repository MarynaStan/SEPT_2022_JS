//1.Створити масив, наповнити його 10 елементами
// будь-якого типу, вивести кожен елемент в консоль
const arr=[1,2,5,"text",true, 100, -55,0, "hello",3];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

console.log("================");

//2.Створити 3 об'єкти
// які описують книги.
// Поля об'єкту : title ,pageCount, genre.;

let book1 ={
    title: "Harry Potter",
    pageCount: 250,
    genre: "fantasy"
}
console.log("title = ", book1.title);
console.log("pageCount = ", book1.pageCount);
console.log("genre = ", book1.genre);

let book2 ={
    title: "Romeo and Juliet",
    pageCount: 470,
    genre: "roman"
}
console.log("title = ", book2.title);
console.log("pageCount = ", book2.pageCount);
console.log("genre = ", book2.genre);

let book3 ={
    title: "Hobbits",
    pageCount: 520,
    genre: "fantasy"
}
console.log("title = ", book3.title);
console.log("pageCount = ", book3.pageCount);
console.log("genre = ", book3.genre);
console.log("================");


//3.Створити 3 об'єкти які описують книги.
// Поля об'єкту : title ,pageCount, genre, authors.
//  Поле "автори" - масив. Кожен автор має поля name,age
book1 ={
    title: "Harry Potter",
    pageCount: 250,
    genre: "fantasy",
    authors: [
        {name: "Name1", age: 29},
        {name: "Name2", age: 30},
        {name: "Name3", age: 35}
    ]
}

console.log("title = ", book1.title);
console.log("pageCount = ", book1.pageCount);
console.log("genre = ", book1.genre);
console.log("authors1 = ", book1.authors[0]);
console.log("authors2 = ", book1.authors[1]);
console.log("authors3 = ", book1.authors[2]);

book2 ={
    title: "Romeo and Juliet",
    pageCount: 470,
    genre: "roman",
    authors: [
        {name: "Name4", age: 45},
        {name: "Name5", age: 39},
        {name: "Name6", age: 52}
    ]
}

console.log("title = ", book2.title);
console.log("pageCount = ", book2.pageCount);
console.log("genre = ", book2.genre);
console.log("authors1 = ", book2.authors[0]);
console.log("authors2 = ", book2.authors[1]);
console.log("authors3 = ", book2.authors[2]);

book3 ={
    title: "Hobbits",
    pageCount: 520,
    genre: "fantasy",
    authors: [
        {name: "Name7", age: 35},
        {name: "Name8", age: 42},
        {name: "Name9", age: 32}
    ]
}

console.log("title = ", book3.title);
console.log("pageCount = ", book3.pageCount);
console.log("genre = ", book3.genre);
console.log("authors1 = ", book3.authors[0]);
console.log("authors2 = ", book3.authors[1]);
console.log("authors3 = ", book3.authors[2]);



console.log("================");

//4.Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
//
 let users = [
     {name: "Name1", username: "fdgdf", password: 34544},
     {name: "Name2", username: "fdgdf", password: 3456},
     {name: "Name3", username: "dfgfg", password: 456},
     {name: "Name4", username: "fhfgj", password: 7896},
     {name: "Name5", username: "xfgdh", password: 9874},
     {name: "Name6", username: "yjtyu", password: 6541},
     {name: "Name7", username: "sdere", password: 6542},
     {name: "Name8", username: "cvbvbb", password: 7536},
     {name: "Name9", username: "deew", password: 789},
     {name: "Name10", username: "hhjk", password: 45678},

]

console.log(users);

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


//або
console.log("або");
users.forEach(item=>console.log(item.password));