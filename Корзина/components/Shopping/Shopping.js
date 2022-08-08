
class Shopping {
	headleClear() {
		ROOT_SHOPPING.innerHTML = '';
	}

	render() {
		let htmlCatalog = '';
		let sumCatalog = 0;
		const productsStore = localStorageUtil.getProducts();

		CATALOG.forEach(({ id, name, price }) => {
			if (productsStore.indexOf(id) !== -1) {

				htmlCatalog += `
	  <tr>
	  <td class="shopping-element__name">😍 ${name}</td>
	  <td class="shopping-element__price">${price.toLocaleString()} Rub</td>
	   </tr>
	  `;
				sumCatalog += price;
			}
		});


		const html = `
		<div class="shopping-container">
		<div class="shopping-close" onclick="shoppingPage.headleClear();"></div>
		<table>
		${htmlCatalog}
		<tr>
	  <td class="shopping-element__name">🧠 Sum</td>
	  <td class="shopping-element__price">${sumCatalog.toLocaleString()} Rub</td>
	   </tr>
		</table>
		</div>
		`;
		ROOT_SHOPPING.innerHTML = html;
	}
}

const shoppingPage = new Shopping();
