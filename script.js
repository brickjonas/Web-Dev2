document.querySelector("#search").addEventListener("click", getPokemon);

function getPokemon(e) {
    const name = document.querySelector("#pokemonName").ariaValueMax;

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector(".pokemonBox").innerHTML = `
            <div>
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
                    alt="Ditto"
                />
            </div>
            <div class="pokemonInfo">
                <h1>Ditto</h1>
                <p>Description</p>
            </div>
                `;
        })
        .catch((err) => {
            console.log("Pokemon not found", err);
        });

    e.preventDefualt();
}

getPokemon();