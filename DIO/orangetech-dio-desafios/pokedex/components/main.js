import '../style.css'
import '../reset.css'
import '../components/pokedex.css'
import '../components/pokeapi.js'
import '../components/pokemonModel'

const maxRecords = 250;
const limit = 10
let offset = 0

function loadPokemonItens(offset,limit) {
  
  pokeApi.getPokemons(offset,limit).then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map((pokemon) =>  `
      <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
          <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
          </ol>
          <img src='${pokemon.photo}' alt='${pokemon.name}'>
        </div>
      </li>`
    ).join('')
  })
}

const pokemonList = document.querySelector('#pokemonList');
const loadMoreBtn = document.querySelector('#loadMoreBtn');


loadPokemonItens(offset, limit)

loadMoreBtn.addEventListener('click', () => {
  offset += limit

  const qtdRecord = offset + limit

  if(qtdRecord >= maxRecords){
    const newLimit = qtdRecord - maxRecords
    loadPokemonItens(offset, newLimit)

    loadMoreBtn.parentElement.removeChild(loadMoreBtn)
  }else{
    loadPokemonItens(offset, limit)
  }
})









