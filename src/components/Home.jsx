import React from "react"

export const Accueil = () => {


    // Fonction dans laquelle on va passer a l'affichage du composant
    React.useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(result => result.json())
            .then(data => setPokemons(data.results))
            .catch(err => console.error(err))
    }, [])

    // Je declare un state contenant la valeur de mon input
    const [input, setInput] = React.useState('')
    const [submit, setSubmit] = React.useState('')
    const [pokemons, setPokemons] = React.useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmit(input)
    }
    return (
        <div>
            {/* Barre de recherche pour filtre les pokemons */}
            <form onSubmit={handleSubmit}>
                {/* onChange est une fonction donner par React sur les balises */}
                {/* On passe dans la fonction a chaque fois qu'on ecrit dans l'input */}
                <input value={input} type='text' placeholder='Rechercher' onChange={e => setInput(e.target.value)} />
                <input type={'submit'} />
            </form>
            {/* <p>Nom: {pokemons[0]?.name}</p>
            <p>Nom: {pokemons[0]?.url}</p> */}
            {pokemons.filter(pokemon => pokemon.name.includes(submit)).map(pokemon => <Pokemon key={pokemon.name} pokemon={pokemon} />
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