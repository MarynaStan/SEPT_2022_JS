//1. Є змінна х, якій ви надаєте довільне числове значення.
//    Якщо змінна x не дорівнює нулю, виведіть 'Вірно',
//    інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let num = 9;
if (num !== 0 ){
    console.log('true');
}else {
    console.log('false');
}

if (y = 1){
    console.log('true');
}else {
    console.log('false');
}
if (y = 0){
    console.log('true');
}else {
    console.log('false');
}
if (y = -3){
    console.log('true');
}else {
    console.log('false');
}
console.log("-----------------");

//2.- Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).

let time = 25;
if (time >=0 &&time<=14){
    console.log('in 1 part');
}
if (time >=15 &&time<=30){
    console.log('in 2 part');
}
if (time >=31 &&time<=45){
    console.log('in 3 part');
}
if (time >=46 &&time<=59){
    console.log('in 4 part');
}
console.log("-----------------");

//3.У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
//місяця потрапляє це число (у першу, другу чи третю).
let day = 12;
if (day >=0 &&day<=10){
    console.log('in 1 decade');
}
if (day >=11 &&day<=20){
    console.log('in 2 decade');
}
if (day >=21 &&day<=31){
    console.log('in 3 decade');
}
console.log("--------------");

//4.Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

switch (5) {
    case  1:
        console.log('Monday');
        break;
    case  2:
        console.log('Tuesday');
        break;
    case  3:
        console.log('Wednesday');
        break;
    case  4:
        console.log('Thursday');
        break;
    case  5:
        console.log('Friday');
        break;
    case  6:
        console.log('Saturday');
        break;
    case  7:
        console.log('Sunday');
        break;
    default:
        console.log('next week');
}
console.log("-------------");

//5.Користувач вводить або має два числа.
//    Потрібно знайти та вивести максимальне число з тих двох .
//    Також потрібно врахувати коли введені рівні числа.

let a = 47;
let b = 26;
if (b >= a) {
    console.log ('b',26);
}
else {
    (a >= b);
    console.log ('a',47);
}
if (a = b) {
    console.log('a', 'b');
}
console.log("----------");

//6.є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//    за допомоги  оператора || буде присвоювати змінній х значення "default"
//    якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let x = false || 'default';
console.log(x);
