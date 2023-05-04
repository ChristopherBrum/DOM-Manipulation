class GroceryItem {
	constructor(name, quantity) {
		this.name = name;
		this.quantity = quantity || '1';
	}

	createListItem() {
		let li = document.createElement('li');
		let text = document.createTextNode(this.quantity + ' ' + this.name);
		li.append(text);
		document.getElementById('grocery-list').append(li);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('form');

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const name = document.getElementById('name').value;
		const quantity = document.getElementById('quantity').value || '1';
		
		new GroceryItem(name, quantity).createListItem();
		form.reset();
	});
});