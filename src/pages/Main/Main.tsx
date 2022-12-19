import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "../../components/Pokemon/Pokemon";

import "./style.css"

type PokemonType ={
    id: number,
    name: string,
    description?: string,
    height?: number,
    weight?: number,
    ability?: string,
    spriteone: string,
    spritetwo?: string,
    type: string,
    typetwo: string
}

export function Main(){

    const [pokemons, setPokemons] = useState<PokemonType[]>([]);

  useEffect(() => {
      axios.get("https://back-end-pokedex.vercel.app/pokemon")
      .then((response) => setPokemons(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

    return(
        <div id="mainPage">
        {pokemons.map(pokemon =>{
            return(
                <Pokemon 
                    key={pokemon.id} 
                    id={pokemon.id} 
                    name={pokemon.name} 
                    spriteone={pokemon.spriteone} 
                    type={pokemon.type} 
                    typetwo={pokemon.typetwo}
                />
            )
        })}
        </div>
    )
}