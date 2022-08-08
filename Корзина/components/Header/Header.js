
class Header {


	handlerOpenShoppingPage() {
		shoppingPage.render();
		console.log(ROOT_SHOPPING)

	}


	render(count) {
		const html = `
		<div class='header-container' onclick="headerPage.handlerOpenShoppingPage();">
		<div class='header-counter'>
		🛒 ${count}
		</div>
		</div>
		`;
		ROOT_HEADER.innerHTML = html;
	}

}
const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();


headerPage.render(productsStore.length);

