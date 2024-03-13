const maxPokemon = 1025;

// When click the seach icon
document.querySelector("#search").addEventListener("click", getPokemon);

// When hit Enter in search bar
document.getElementById('pokemonName').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        getPokemon(); 
    }
});

// While typing in search bar
document.getElementById('pokemonName').addEventListener('input', () => {
    getPokemon();
  });

// Capitalize the first letter (for printting Pokemon Name)
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase()+string.slice(1);
}

// fetch from Pokemon API and display the result
function getPokemon(e){
    const pokemonName = document.querySelector("#pokemonName").value.toLowerCase();

    fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector(".pokemonBox").innerHTML = `
            <div>
                <h1>${capitalizeFirstLetter(data.name)}</h1>
                <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
            </div>
            <div class="pokemonInfo">
                
                <p>#${data.id}</p>
                <p>Height: ${data.height}</p>
                <p>Weight: ${parseInt(data.weight * 0.220462)} lbs</p>
            </div>
            `;
        })
        .catch(error => {
            document.querySelector(".pokemonBox").innerHTML = `
            <div>
            <h1>Wrong ID or Pokemon Name, Try again</h1>
            </div>
            `;
        });
}

async function getPokemonID(string) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${string}`);
        const data = await response.json();
        console.log('data id is ' + data.id);
        return data.id;
    } catch (err) {
        console.log("Pokemon not found", err);
        throw err; // rethrowing error so it can be caught in getPokemonDescription
    }
}

async function getPokemonDescription(e) {
    const name = document.querySelector("#pokemonName").value.toLowerCase();
    console.log('testing' + name);
    
    try {
        const pokeID = await getPokemonID(name);
        console.log('pokeid is ' + pokeID);
        
        const response = await fetch(`https://pokeapi.co/api/v2/characteristic/${pokeID}/`);
        const data = await response.json();
        console.log(data.descriptions)
        document.querySelector(".pokemonBox").innerHTML = `
            <div class="pokemonInfo">
                <p>${data.descriptions["7"]}</p> >
            </div>
        `;
    } catch (err) {
        console.log("Pokemon not found", err);
    }
}



getPokemon();
getPokemonDescription();

