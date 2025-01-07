import React,{ useEffect, useState} from 'react';
import List from './Components/List';

const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

// Q1: How did you manage to fetch the list and what tool did you use?

// A1:I used fetch API within useEffect hook to make an API request to the Pokemon API and fetch the List.

// A2: 1.Add error handling with a fallback UI.
//     2.use a custom hook to encapsulate fetching logic
//     3.Add caching for improved performence.

const App = () => {
  const[pokemonList,setPokemonList]=useState([]);

  useEffect(()=>{
   const fetchPokemon=async()=>{
    const response=await fetch(api);
    const data=await response.json();
    setPokemonList(data.results);
   }
   fetchPokemon();
  },[]);

  console.log(pokemonList);
  return (
  <>
    <h1>Pokemon list:</h1>
    <List pokemonList={pokemonList}/>
  </>
  )
}

export default App
