import { createAsyncThunk, createSlice,PayloadAction } from "@reduxjs/toolkit";

interface PokemonState {
    pokemonList: { name: string }[],
    loading : Boolean,
    error : string|null,
}

const initialState: PokemonState={
    pokemonList:[],
    loading: false,
    error:'',
};

const api = "https://pokeapi.co/api/v2/pokemon?limit=151"


export const fetchPokemon= createAsyncThunk<{name: string}[]>('pokemon', async()=>{
const response = await fetch(api);
const data = await response.json();
return data.results;
});

const pokemonSlice=createSlice({
    name:'pokemon',
    initialState,
    reducers:{
        setPokemonList(state,action: PayloadAction<{name: string}[]>){
            state.pokemonList=action.payload;
        },
        removePokemon(state,action:PayloadAction<string>){
            state.pokemonList=state.pokemonList.filter(p=>p.name!==action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchPokemon.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchPokemon.fulfilled, (state, action: PayloadAction<{name: string}[]>) => {
            state.pokemonList = action.payload;
            state.loading = false;
          })
          .addCase(fetchPokemon.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch Pokémon';
          });
      },
});

export const { setPokemonList, removePokemon } = pokemonSlice.actions;
export const pokemonReducer = pokemonSlice.reducer;