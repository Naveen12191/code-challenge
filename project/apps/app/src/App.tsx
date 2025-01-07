import React,{ useEffect, useState} from 'react';
import List from './Components/List';
import { useDispatch, useSelector } from 'react-redux';
import { RootState,AppDispatch } from './Redux/store';
import  { fetchPokemon } from './Redux/pokemonslice';

const App = () => {
  const pokemonList = useSelector((state:RootState)=>state.pokemon.pokemonList);
  const laoding = useSelector((state:RootState)=>state.pokemon.loading);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(()=>{
     dispatch(fetchPokemon());
  },[dispatch]);

  return (
  <>
    <h1>Pokemon list:</h1>
    { laoding ? <p>Loading.....</p>:
    <List pokemonList={ pokemonList }/>
    }
  </>
  )
}

export default App
