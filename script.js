// When click the seach icon
document.querySelector("#search").addEventListener("click", getPokemon);

// When hit Enter in search bar
document.getElementById('pokemonName').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        getPokemon(); 
    }
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getPokemon(e) {
    const name = document.querySelector("#pokemonName").value.toLowerCase();

    fetch (`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector(".pokemonBox").innerHTML = `
            <div>
                <img
                    src="${data.sprites.other["official-artwork"].front_default}"
                    alt="${data.name}"
                />
            </div>
            <div class="pokemonInfo">
                <h1>${capitalizeFirstLetter(data.name)}</h1>
                <p>Weight:${parseInt(data.weight * 0.220462)} lbs</p>
                <h1>${capitalizeFirstLetter(data.name)}</h1>
                <p>#${data.id}</p>
                <p>Height: ${data.height}</p>
                <p>Weight: ${data.weight * 0.220462} lbs</p>
            </div>
            `;
        })
        .catch((err) => {
            console.log("Pokemon not found", err);
        });

    //e.preventDefualt();
}

//testing to make my own branch lol



getPokemon();