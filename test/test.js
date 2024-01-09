let screenPrice = '20000'
let titleProject = promt ('Название проекта')
let screensValue = prompt ('шаблонные, с уникальным дизайном, с анимациями')
let responsive = prompt('Нужен ли респонсивный сайт?') === 'true';
let service1 = promt ('Какой сервис нужен?')
let servicePrice1 = promt ('Сколько это будет стоить?')
let service2 = promt ('Какой еще сервис тебе нужен?')
let servicePrice2 = promt ('Сколько будет стоить этот второй сервис?')
let fullPrice = screenPrice + servicePrice1 + servicePrice2
let servicePercentPrice = fullPrice - (fullPrice * 0.15);
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


console.log (titleProject, 'Название проекта')
console.log (screensValue,'шаблонные, с уникальным дизайном, с анимациями')
console.log (responsive,'Нужен ли респонсивный сайт?')
console.log (service1, 'Какой сервис нужен?')
console.log (servicePrice1, 'Сколько это будет стоить?')
console.log (service2, 'Какой еще сервис тебе нужен?')
console.log (servicePrice2,'Сколько будет стоить этот второй сервис?')
console.log (fullPrice, 'fullPrice')