let id = 0;

document.getElementById('add-jedi').addEventListener('click', () => {
	let table = document.getElementById('jedi-list');
	table.classList.remove('d-none');
	let row = table.insertRow(1);
	row.setAttribute('id', `jedi-${id}`);
	row.insertCell(0).innerHTML = document.getElementById('new-jedi-name').value;
	row.insertCell(1).innerHTML = document.getElementById('new-jedi-position').value;
	let actions = row.insertCell(2);
	actions.appendChild(createDeleteButton(id++, table));
	document.getElementById('new-jedi-name').value = '';
	document.getElementById('new-jedi-position').value = '';
});

function createDeleteButton(id, table) {
	let btn = document.createElement('button');
	btn.className = 'btn btn-success';
	btn.id = id;
	btn.innerHTML = 'Kick off Council';
	btn.onclick = () => {
		console.log(`delete row with id: jedi-${id}`);
		let elementToDelete = document.getElementById(`jedi-${id}`);
		elementToDelete.parentNode.removeChild(elementToDelete);
		console.log(table.rows.length);
		if (table.rows.length < 2) {
			table.classList.add('d-none');
		}
	};

	return btn;
}
