import { ROOT_MODAL } from '../../constants/root';
import "./Notification.css";


class Notification {


	render() {
		const htmlWrapp = `
		<div class="notification__wrp">
		<span class="notification__text">No content</span>
		<button onclick="modal.innerHTML=''" class="notification__close"></button>
		</div>
		`;
		ROOT_MODAL.innerHTML = htmlWrapp;
	}



}
export default new Notification()