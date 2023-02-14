import React from "react"

export const Accueil = () => {

    const [pokemons, setPokemons] = React.useState([])

    // Fonction dans laquelle on va passer a l'affichage du composant
    React.useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(result => result.json())
            .then(data => setPokemons(data.results))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            {/* <p>Nom: {pokemons[0]?.name}</p>
            <p>Nom: {pokemons[0]?.url}</p> */}
            {pokemons.map(pokemon => <Pokemon key={pokemon.name} pokemon={pokemon} />
                // <div key={pokemon.name}>
                //     <p>Nom: {pokemon.name}</p>
                //     <p>Url: {pokemon.url}</p>
                // </div>
            )}
        </div>
    )
}

// const Pokemon = (proprietes) => {}
const Pokemon = ({ pokemon }) => {
    // const pokemon = proprietes.pokemon
    // const other = proprietes.other
    // const { pokemon, other } = proprietes

    const [detail, setDetail] = React.useState()

    React.useEffect(() => {
        fetch(pokemon.url)
            .then(result => result.json())
            .then(data => setDetail(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <p>Nom: {pokemon.name}</p>
            <img src={detail?.sprites.front_default} />
        </>
    )

}