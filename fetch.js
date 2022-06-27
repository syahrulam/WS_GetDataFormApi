const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Key': 'f334332200msha41407a419130efp11db37jsna8ff09cfeab0',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
	}
};

fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search?query=videogame', options)
	.then(response => {
        return response.json()
    }).then(jokes => {
        console.log(jokes.result);
        const comedy = jokes.result.map(jokeline => {
            return `
            <p class="joke">${jokeline.value}</p>
            `
        }).join('');
        document.querySelector("#cnjokes").insertAdjacentHTML('afterbegin',comedy);
    })
