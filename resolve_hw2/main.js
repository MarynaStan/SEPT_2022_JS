//1.Створити масив, наповнити його 10 елементами
// будь-якого типу, вивести кожен елемент в консоль
const arr1=[1,2,5,"text",true, 100, -55,0, "hello",3];

console.log("arr1 = ", arr1);
console.log("================");

//2.Створити 3 об'єкти
// які описують книги.
// Поля об'єкту : title ,pageCount, genre.;

const bookTitle = {title: "Harry Potter"};
console.log("bookTitle = ", bookTitle);

const bookPageCount = { pageCount: 250};
console.log("bookPageCount = ", bookPageCount );

const bookGenre = { genre: "fantasy"};
console.log("bookGenre = ", bookGenre);
console.log("================");


//3.Створити 3 об'єкти які описують книги.
// Поля об'єкту : title ,pageCount, genre, authors.
//  Поле "автори" - масив. Кожен автор має поля name,age
const bookTitle2 = {title: "Harry Potter"};
console.log("bookTitle2 = ", bookTitle2);

const bookPageCount2 = { pageCount: 250};
console.log("bookPageCount2 = ", bookPageCount2 );

const bookGenre2 = { genre: "fantasy"};
console.log("bookGenre2 = ", bookGenre2);
const bookAuthor2 = { authors: [
        {name: "Name1", age: 29},
        {name: "Name2", age: 30},
        {name: "Name3", age: 35}
    ]};
console.log("bookAuthor2 = ", bookAuthor2);
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