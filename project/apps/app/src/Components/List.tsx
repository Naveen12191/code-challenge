import React from 'react';
import './List.css';

const List=({pokemonList}:{pokemonList:{name: string}[]})=>{

    return(
        <div className='grid-container'>
            {
                pokemonList?.map((pokemon,index)=>
                <div key={index} className='grid-item'>{pokemon.name}</div>
                )
            }
        </div>
    )

}
export default List;
