import React from 'react';

const List=({pokemonList}:{pokemonList:{name: string}[]})=>{

    return(
        <div>
            {
                pokemonList?.map((pokemon,index)=>
                <div key={index}>{pokemon.name}</div>
                )
            }
        </div>
    )

}
export default List;
