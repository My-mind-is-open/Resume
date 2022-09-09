import { getDataApi } from '../../utils/getDataApi';
import {
	API_URL, URL_COMICS, URL_CHARACTERS, IMG_STANDART_XLARGE, IMG_NOT_AVAILABLE
} from '../../constants/api';
import { ROOT_INDEX } from '../../constants/root';
import Error from '../Error';
import Characters from '../Characters';
import './Comics.css';





class Comics {

	renderComics(data) {

		let htmlcontent = '';

		data.forEach(({ id, title, thumbnail: { extension, path } }) => {




			if (path.lastIndexOf(IMG_NOT_AVAILABLE) === -1) {

				const uri = API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS;
				const IMGSRC = path + '/' + IMG_STANDART_XLARGE + '.' + extension;


				htmlcontent += `
				<li class="comics__item" data-uri="${uri}">
			<span class="comics__name">${title}</span>
				<img class="comics__img" src="${IMGSRC}"/>
				</li>

				`;

			}

		});


		const htmlWrapper = `<ul class="comics__container">
		${htmlcontent}
		</ul>`;

		ROOT_INDEX.innerHTML = htmlWrapper;
	}

	async render() {

		const data = await getDataApi.getData(API_URL + URL_COMICS);

		// if (data) {
		// 	this.renderComics(data);
		// } else {
		// 	Error.render();
		// }
		data ? this.renderComics(data) : Error.render();

	}

	eventListener() {
		document.querySelectorAll('.comics__item').forEach(element => {
			const uri = element.getAttribute('data-uri');

			element.addEventListener('click', () => {
				Characters.render(uri);
			});
		});
	}

}
export default new Comics();