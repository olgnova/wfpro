// let x = 5;
// if(x > 10) {
//     console.log('Условие верно');
// } else {
//     console.log('Условие не верно');
// }

// let a = 5;
// let b = '10'
// let res = a + +b
// console.log (res);
// console.log (a+b);
// console.log (a.toString());

// alert ('Привет');

// let age = +prompt('Укажите Ваш возвраст')
// console.log (age);
// let a = 10
// let res = +age + a
// console.log (res);


let screenPrice = '20000'
let percentage = '20'
let titleProject = prompt ('Название проекта')
let screensValue = prompt ('шаблонные, с уникальным дизайном, с анимациями')
let responsive = prompt('Нужен ли респонсивный сайт?') === 'confirm';
let service1 = prompt ('Какой сервис нужен?')
let servicePrice1 = prompt ('Сколько это будет стоить?')
let service2 = prompt ('Какой еще сервис тебе нужен?')
let servicePrice2 = prompt ('Сколько будет стоить этот второй сервис?')
let fullPrice = screenPrice + servicePrice1 + servicePrice2
let servicePercentPrice = fullPrice - (fullPrice * 0.15);
console.log(servicePercentPrice);
let roundedPrice = Math.round(servicePercentPrice);
console.log(roundedPrice);
if (fullPrice > 50000) {
console.log ('Сделаем скидку в 10%');
} else if (fullPrice > 20000 && fullPrice < 40000) {
console.log ('сделаем скидку 5%');
} else if (fullPrice < 20000 && fullPrice > 0) {
console.log ('Скидка не предусмотрена');
} else if (fullPrice < 0) {
console.log ('Что-то пошло не так')
} else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
console.log ('Текст по желанию')    
}