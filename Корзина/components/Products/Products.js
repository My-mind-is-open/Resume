
class Products {

	constructor() {
		this.classNameActive = 'products-element__btn--active';
		this.labalAdd = 'Add in basket';
		this.labelRemove = 'Remove from Trash';
	}

	handleSetLocationStorage(element, id) {
		const {
			pushProduct,
			products
		} = localStorageUtil.putProducts(id);
		if (pushProduct) {
			element.classList.add(this.classNameActive);
			element.innerHTML = this.labelRemove;

		} else {
			element.classList.remove(this.classNameActive);
			element.innerHTML = this.labalAdd;

		}
		headerPage.render(products.length)


	}


	render() {
		let htmlCatalog = '';
		const productsStore = localStorageUtil.getProducts();


		CATALOG.forEach(({ id, name, price, img }) => {
			let activeClass = '';
			let activeText = '';

			if (productsStore.indexOf(id) === -1) {
				activeText = this.labalAdd;
			} else {
				activeClass = ' ' + this.classNameActive;
				activeText = this.labelRemove;
			}

			htmlCatalog += `
			<li class="products-element">
			<span class="products-element__name">${name}</span>
			<img  class="products-element__img"src="${img}"/>
			<span class="products-element__price">😍 ${price.toLocaleString()} Rub</span>
			<button class="products-element__btn${activeClass}" onclick='productsPage.handleSetLocationStorage(this, "${id}")'>${activeText}</button>
			</li>
			`;
		});
		const html = `
		<ul class="products-container">
		${htmlCatalog}
		</ul>
		`;
		ROOT_PRODUCTS.innerHTML = html;
	}
}
const productsPage = new Products();
productsPage.render();