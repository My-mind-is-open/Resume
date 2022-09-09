import { getDataApi } from '../../utils/getDataApi';
import "./Characters.css";

import { IMG_STANDART_XLARGE } from '../../constants/api';
import { ROOT_MODAL } from '../../constants/root';

import Notification from '../Notification';

class Characters {

	renderContent(data) {
		let htmlContent = '';
		data.forEach(({ name, thumbnail: { extension, path } }) => {

			const IMGSRC = path + '/' + IMG_STANDART_XLARGE + '.' + extension;

			htmlContent += `
			<li class="characters__item">
			<img class="characters__img" src="${IMGSRC}"/>
			<span class="characters__name">${name}</span>
			</li>
			`;
		});

		const htmlWrapper = `
		<div class="wrapper">
		<ul class="characters__container">${htmlContent}</ul>
		<button class="characters_close"  onclick="modal.innerHTML = ''"
		></button>
		</div>
		
		`;


		ROOT_MODAL.innerHTML = htmlWrapper;



	}




	async render(uri) {

		const data = await getDataApi.getData(uri);

		data.length ? this.renderContent(data) : Notification.render();

	}
}
export default new Characters();