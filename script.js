document.querySelector("#search").addEventListener("click", getPokemon);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getPokemon(e) {
    const name = document.querySelector("#pokemonName").value;
    const pokeName = name.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
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
            </div>
                `;
        })
        .catch((err) => {
            console.log("Pokemon not found", err);
        });

    e.preventDefualt();
}



getPokemon();