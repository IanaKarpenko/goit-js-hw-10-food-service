import dishesTemplate from '../templates/dishes.hbs';
import cards from '../menu.json';

document.querySelector("ul.js-menu").innerHTML = dishesTemplate(cards);