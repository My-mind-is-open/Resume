

const API_KEY = '5f4865a4-5aeb-40ae-a164-cfc37529f82e';
const API_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1';
const API_URL_SEARCH = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=';


getMoies(API_URL)
async function getMoies(url) {
	const response = await fetch(url, {
		headers: {
			'X-API-KEY': API_KEY,
			'Content-Type': 'application/json',
		},
	});
	const respData = await response.json();
	showMovies(respData);
}
function getClassByrate(vote) {
	if (vote >= 7) {
		return 'green';
	} else if (vote > 5) {
		return 'orange';
	} else {
		return 'red';
	}
}
function showMovies(data) {
	const moviesEl = document.querySelector('.movies');

	document.querySelector('.movies').innerHTML = '';

	data.films.forEach(movie => {
		const movieEl = document.createElement('div');
		movieEl.classList.add('movie');
		movieEl.innerHTML = `<div class="movie__cover-inner">
		<img class="movie__img"
			src="${movie.posterUrlPreview}" alt="${movie.nameRu}">
		<div class="movie__cover-dark">

		</div>
	</div>
	<div class="movie__info">
	<div class="movie__title">${movie.nameRu}</div>
	<div class="movie__category">${movie.genres.map((genre) => ` ${genre.genre}`)}</div>
	${movie.rating &&
			`
	<div class="movie__average movie__average--${getClassByrate(movie.rating)}">${movie.rating}</div>
	`
			}
</div>
	 `;
		moviesEl.appendChild(movieEl);

	})

}

const form = document.querySelector('.header__form');
const input = document.querySelector('.header__search');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const apiSearchUrl = `${API_URL_SEARCH}${input.value}`
	if (input) {
		getMoies(apiSearchUrl);
		input.value = '';
	}
})