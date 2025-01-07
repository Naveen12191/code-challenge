import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../Redux/store';
import './List.css';
import  { removePokemon } from '../Redux/pokemonslice';

const List=({pokemonList}:{pokemonList:{name: string}[]})=>{
    const dispatch = useDispatch<AppDispatch>();

    const handleRemove=(name: string)=>{
        dispatch(removePokemon(name));
    }

    return(
        <div className='grid-container'>
            {
                pokemonList?.map((pokemon,index)=>(
                <>
                <div key={index} className='grid-item'>
                    <div className='name'>{pokemon.name}</div>
                    <button className='button'onClick={ ()=>handleRemove(pokemon.name) }>Remove</button>
                    </div>
                </>
                )
                )
            }
        </div>
    )

}
export default List;
