

let input = document.querySelector('.ready-content__input');
let btn = document.querySelector('.ready-content__button')
let form = document.querySelector('.ready-content__form')




btn.addEventListener('submit', () => {

	console.log(input.value);

});

form.addEventListener('click', () => {

	console.log(input.value);
	input.value = '';
});


