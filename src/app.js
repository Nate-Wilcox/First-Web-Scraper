/* ==== RESULT PAGE ==== */
const feedDisplay = document.querySelector('#feed');

fetch('http://localhost:8000/results') //Promise
	.then((response) => {
		//Promise Response
		return response.json();
	})
	.then((data) => {
		//Parsed and Formatted Information
		data.forEach((article) => {
			const articleItem =
				'<div><h3>' + article.title + '</h3><p>' + article.link + '</p></div>';
			feedDisplay.insertAdjacentHTML('beforeend', articleItem);
		});
	})
	.catch((err) => console.log(err)); //Error Catching
