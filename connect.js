const name = document.getElementById("name");
const addbtn = document.getElementById("submit");
const database = firebase.database();
addbtn.addEventListener('click', (e) => {
	e.preventDefault();
	window.alert("ok");
	database.ref('/fruits/' + name.value).set({
		
		name: name
	});
});