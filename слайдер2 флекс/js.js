

const sliderLine = document.querySelector('.slider-line');
let prevBut = document.querySelector('.button-prev');
let nextBut = document.querySelector('.button-next');
let dots = document.querySelectorAll('.dot');

let position = 0,
	dotIndex = 0;


const nextSlide = () => {
	if (position < (dots.length - 1) * 800) {
		position += 800;
		dotIndex++;
		sliderLine.style.transition = '1s';

	} else {
		position = 0;
		dotIndex = 0;
		sliderLine.style.transition = 'none';
	}
	sliderLine.style.left = -position + "px";
	thisSlide(dotIndex);
}
const prevSlide = () => {
	if (position > 0) {
		position -= 800;
		dotIndex--;
		sliderLine.style.transition = '1s';

	} else {
		position = (dots.length - 1) * 800;
		dotIndex = (dots.length - 1);
		sliderLine.style.transition = 'none';
	}
	sliderLine.style.left = -position + "px";
	thisSlide(dotIndex);
}
const thisSlide = (index) => {
	for (let dot of dots) {
		dot.classList.remove('active');

	}
	dots[index].classList.add('active');
}
nextBut.addEventListener('click', nextSlide);
prevBut.addEventListener('click', prevSlide);


dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		position = 800 * index;
		sliderLine.style.left = -position + 'px';
		dotIndex = index;
		thisSlide(dotIndex);
	});
});



setInterval(nextSlide, 5000);