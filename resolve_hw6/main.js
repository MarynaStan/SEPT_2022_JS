// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let lengthString1 = 'hello world';
 console.log(lengthString1.length);
 let lengthString2 = 'lorem ipsum';
 console.log(lengthString2.length);
 let lengthString3 = 'javascript is cool';
 console.log(lengthString3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
 let stringWord1 = 'hello world';
 let string1ToUpperCase= stringWord1.toUpperCase();
 console.log(string1ToUpperCase);

 let stringWord2 = 'lorem ipsum';
 let string2ToUpperCase= stringWord2.toUpperCase();
 console.log(string2ToUpperCase);

 let stringWord3 = 'javascript is cool';
 let string3ToUpperCase= stringWord3.toUpperCase();
 console.log(string3ToUpperCase);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
 let stringWords1 = 'HELLO WORLD';
 let string1ToLowerCase = stringWords1.toLowerCase();
 console.log(string1ToLowerCase);
 let stringWords2 = 'LOREM IPSUM';
 let string2ToLowerCase = stringWords2.toLowerCase();
 console.log(string2ToLowerCase);
 let stringWords3 = 'JAVASCRIPT IS COOL';
 let string3ToLowerCase = stringWords3.toLowerCase();
 console.log(string3ToLowerCase);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

 // const str = ' dirty string   ';
 // console.log('%s -> %s', '"' + str + '"', '"' + str.trim() + '"');

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//    let str = 'Ревуть воли як ясла повні';
 const str = 'Ревуть воли як ясла повні';
 const stringToArray = (string) => {
     return string.split (' ');
 }
 const arr = stringToArray(str);
 console.log(arr);

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10,8,-7,55,987,-1011,0,1050,0];
numbers = numbers.map(value => '' + value);
console.log('', numbers);

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
   let nums = [11,21,3];
//sortNums(nums,'ascending') // [3,11,21]
//sortNums(nums,'descending') // [21,11,3]
const sortNums1 = (nums,sortType) =>  {
 return nums.sort((a,b) => {
  if (sortType === "ascending") {
   return a - b;
  } else if (sortType === "descending") {
   return b - a;
  }
  return a - b;
 })
}

console.log(sortNums1(nums,'ascending'));
console.log(sortNums1(nums,'descending'));
//OR

const sortNums2 = (nums,sortType) => nums.sort((a,b) => sortType === "ascending"
    ? a-b
    : sortType === "descending"
        ? b-a
         :a-b
);

console.log(sortNums2(nums,'ascending'));
console.log(sortNums2(nums,'descending'));


// - є масив
let coursesAndDurationArray = [
 {title: 'JavaScript Complex', monthDuration: 5},
 {title: 'Java Complex', monthDuration: 6},
 {title: 'Python Complex', monthDuration: 6},
 {title: 'QA Complex', monthDuration: 4},
 {title: 'FullStack', monthDuration: 7},
 {title: 'Frontend', monthDuration: 4}
];


// -- відсортувати його за спаданням за monthDuration

coursesAndDurationArray = coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration);

console.log(coursesAndDurationArray);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
coursesAndDurationArray = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(coursesAndDurationArray);

//
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//

const carts = [];
function fn(cardSuit,color){
 let value;
 for(let i=0; i< 9; i++){
 valueNumber = i+6;
 switch (valueNumber){
  case 11:
   value='ace';
   break;
  case 12:
   value='jack';
   break;
  case 13:
   value='queen';
   break;
  case 14:
   value='king';
   break;
  default:
   value = valueNumber;
 }

 carts.push({cardSuit,value,color})
}
}
fn('spade','black');
fn('diamond','red');
fn('heart','red');
fn('clubs','black');
carts.push({cartsSuit:'', value: 'joker', color: ''});
carts.push({cartsSuit:'', value: 'joker', color: ''});
console.log(carts);
const clubsAce = carts.filter(cart => cart.cardSuit === 'spade' && cart.value === 'ace');
const cardsSix = carts.filter(cart => cart.value === 6);
const cardsSpade = carts.filter(cart => cart.cardSuit === 'diamond');
const cardsDiamondGrater9 = carts.filter(cart => cart.cardSuit === 'clubs'&&!(cart.value<9));
console.log(cardsDiamondGrater9);

// {
//  cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//      value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }