function getApi() {
    const nameInput = document.getElementById('nameInput').value; // Hämta värdet från input
    const fullUri = `https://www.swapi.tech/api/people/?name=${nameInput}`; // Skapa full url

    fetch(fullUri)
        .then(res => res.json())
        .then(data => {
            if (data.result && data.result.length > 0) {
                // console.log(data.result);
                const character = data.result[0].properties; // Plocka ut result
                const resultString = `Height: ${character.height}, Mass: ${character.mass}, Gender: ${character.gender}, Hair Color: ${character.hair_color}`;
                document.getElementById('output').value = resultString; // Skriv resultatet till textarea
            } else {
                document.getElementById('output').value = 'Character not found.';
            }
        })
        .catch(err => {
            console.log('Error:', err);
            document.getElementById('output').value = 'Error fetching data.';
        });
}

// Eventlistener
document.getElementById('fetchButton').addEventListener('click', getApi);
