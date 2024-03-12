console.log("Hello World");

function fetchPokemon() {
    for(let i =1;i <=20;i++){
    const url = 'https://pokeapi.co/api/v2/pokemon/1';
    fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        const pokemon = {
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            type: data.types.map(function(type){
                return type.type.name;
            }).join(', ')
        };
        console.log(pokemon);
    });
}}
fetchPokemon();
