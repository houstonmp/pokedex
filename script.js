const pokeBtn = document.querySelectorAll('button');

const container = document.querySelector('#container');

pokeBtn.forEach((el) => {
    el.addEventListener("click", changePoke);
});

//Change pokemon depending on selected Region
function changePoke() {
    container.innerHTML = "";
    const dex = this.id;
    switch (dex) {
        case 'Kanto':
            loadPokemon(1, 151);
            break;
        case 'Johto':
            loadPokemon(152, 251);
            break;
        case 'Hoenn':
            loadPokemon(153, 386);
            break;
        case 'Sinnoh':
            loadPokemon(387, 493);
            break;
        case 'Kalos':
            loadPokemon(494, 649);
            break;
        case 'Unova':
            loadPokemon(650, 721);
            break;
        case 'Alola':
            loadPokemon(722, 809);
            break;
        case 'Galar':
            loadPokemon(810, 905);
            break;
        default:
            loadPokemon();
    }
}

//Load Pokemon images
function loadPokemon(firstPoke = 1, lastPoke = 905) {
    for (let i = firstPoke - 1; i < lastPoke; i++) {
        let poke = document.createElement('img');
        poke.src = 'sprites/pokemon/' + (i + 1) + '.png';
        poke.classList = 'pokemon';
        container.appendChild(poke);
    }
}
