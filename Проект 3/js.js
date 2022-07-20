

let input = document.querySelector('.footer__input');
let btn = document.querySelector('.footer__button')

btn.addEventListener('click', () => {
	console.log(input.value);
	input.value = '';
});
let title = document.querySelector('.element-show');





function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('element-active');
		}
	});
}

let options = {
	threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-show');

for (let elm of elements) {
	observer.observe(elm);
}