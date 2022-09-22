var SiteList = document.querySelector(".site-list");

pokemons.forEach((pokemon) => {
    var newPokemonItem = createElement("li", "pokemon-item")
    var newPokemonImg = createElement("img", "pokemon-img")
    var newPokemonName = createElement("h4", "text-center", pokemon.name);
    var newPokemonType = createElement("p", "text-center", pokemon.type.join(", "));

    newPokemonImg.src = pokemon.img
    newPokemonImg.alt = pokemon.name

    newPokemonItem.appendChild(newPokemonImg)
    newPokemonItem.appendChild(newPokemonName)
    newPokemonItem.appendChild(newPokemonType)

    SiteList.appendChild(newPokemonItem)

})
