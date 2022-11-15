// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle(a,b) {
    let result = a*b;
    return result;
}
let S = rectangle(12,10);
console.log(S);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(π,r) {
    let result = π*r*r;
    return result;
}
let R = circle(3.14,10);
console.log(R);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(π,h,r) {
    let result = 2*π*r*h;
    return result;
}
let C = cylinder(3.14,5,8);
console.log(C);

// - створити функцію яка приймає масив та виводить кожен його елемент
function userlist (users) {
    return users;
}
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
console.log(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraph(text) {
    document.write(`<p> ${text}</p>`);
}
createParagraph('Lorem ipsum dolor sit amet, consectetur');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function listOfItems1 (text) {
    document.write("<ul>");
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write("<ul>");
}
listOfItems1 ("Lorem ipsum dolor");

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listOfItems2 (text) {
    document.write("<ul>");
    for (let i = 0; i < arguments[1]; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write("<ul>");
}
listOfItems2 ("Lorem ipsum dolor",3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список

function listOfItems3 (arr) {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
listOfItems3 ([55, 19,'Hola', 'print', true, false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

function writeUsers(arr) {
    for (const item of arr) {
        document.write(`<div>${item.id} - ${item.name} - ${item.age}-- ${item.status}</div>`);
    }
}
writeUsers([
    {id: 1, name: 'Dan', age: 25, status: false},
    {id: 2, name: 'Taras', age: 35, status: true},
    {id: 3, name: 'Kolya', age: 36, status: true},
    {id: 4, name: 'Marta', age: 29, status: false},
    {id: 5, name: 'Max', age: 30, status: true}
]);

