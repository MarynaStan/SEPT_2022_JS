//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let arr = [
    "January",
    "February",
    "March",
    "April ",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October"
];
for (let i = 0; i < arr.length;i++) {
    document.write(`<div>${arr[i]}</div>`);
}
document.write("<hr>");
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (i = 0; i < 10; i++ ){
//     document.write(`<div>вивести 10 блоків ${i}</div>`)
 arr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October"
];
for (let i = 0; i < arr.length;i++) {
    document.write(`<div>${i} ${arr[i]}</div>` );
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i=0;
while (i < 20) {
    document.write(`<h3>Lorem ipsum dolor sit amet.</h3>`);
    i++;
}
document.write("<hr>");
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
i=0;
while (i < 20) {
    document.write(`<h3>${i} Lorem ipsum dolor sit amet, consectetur adipisicing elit..</h3>`);
    i++;
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write("<ul>");
for (let i = 0; i < listOfItems.length;i++) {
    document.write(`<li>${listOfItems[i]}</li>`);
}
document.write("</ul>");

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    document.write(`<div class="target">
                            <h2>${product.title} - ${product.price} UAH</h2>
                            <img src="${product.image}" alt="">
                      </div>`);
}

//є масив
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

for (let user of users) {
    if (user.status) {
        document.write(`
    <div> ${user.name} - ${user.status}</div>
    `);
    }
}
    for (let user of users) {
        if (!user.status) {
            document.write(`
    <div> ${user.name} - ${user.status}</div>
    `);
        }
    }
for (let user of users) {
    if (user.age >30) {
        document.write(`
    <div> ${user.name} - ${user.age} </div>
    `);
    }
}
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років