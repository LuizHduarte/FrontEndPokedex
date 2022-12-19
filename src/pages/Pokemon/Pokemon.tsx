import axios from "axios"
import './style.css'

import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import {useState, useEffect} from 'react';
import { useParams  } from "react-router-dom";

type PokemonType ={
    id: number,
    name: string,
    description?: string,
    height?: number,
    weight?: number,
    ability?: string,
    spriteone?: string,
    spritetwo?: string,
    type: string,
    typetwo: string
}

enum Types{
    None = "#FFFFFF",
    Normal = "#a4acaf" , 
    Fire = "#fd7d24",
    Water= "#4592c4",
    Grass = "#9bcc50",
    Electric = "#eed535",
    Ice = "#51c4e7",
    Fighting = "#d56723",
    Poison = "#b97fc9",
    Ground= "#948437",
    Flying= "#4A4AAC",
    Psychic= "#f366b9",
    Bug= "#729f3f",
    Rock= "#a38c21",
    Ghost= "#b97fc9",
    Dark= "#707070",
    Dragon= "#691b5e",
    Steel= "#9eb7b8",
    Fairy= "#fdb9e9",
}

export function Pokemon(){
    const [pokemon, setPokemon] = useState<PokemonType>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const params = useParams();

    const navigatePrevPokemon = () => {
        // 👇️ navigate to /
        window.location.href = `/pokemon/${parseInt(params.id!)-1}`
    };

    const navigateNextPokemon = () => {
        // 👇️ navigate to /
        window.location.href = `/pokemon/${parseInt(params.id!)+1}`
    };

    const navigateToTypeOne = () => {
        // 👇️ navigate to /
        window.location.href = `/type/${pokemon?.type}`
    };

    const navigateToTypeTwo = () => {
        // 👇️ navigate to /
        window.location.href = `/type/${pokemon?.typetwo}`
    };

    useEffect(() => {
        axios.get(`https://back-end-pokedex.vercel.app/pokemon/${params.id}`)
        .then((response) => {setPokemon(response.data[0]), setIsLoading(false)})
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);

    let typeOneColor = Types[pokemon?.type as keyof typeof Types]
    let typeTwoTColor = Types[pokemon?.typetwo as keyof typeof Types]

    {if (isLoading) return (
        <h1>Loading...</h1>
    );}
    
    return(  
        <div id="PokemonPageContainer">
            <div id="PokemonPageButtonContainer">
                <a id="PokemonPagePrevButton" onClick={navigatePrevPokemon} href="#"><span>< IoIosArrowBack /> Nº {pokemon!.id - 1}</span></a>
                <a id="PokemonPageNextButton" onClick={navigateNextPokemon} href="#"><span> Nº {pokemon!.id + 1} < IoIosArrowForward /></span></a>
            </div>
            <div id="pokemonPageIdentityContainer">
                <h1 className="PokemonPageName">{pokemon?.name}</h1>
                <h1 className="PokemonPageName">Nº{pokemon?.id}</h1>
            </div>
            <div id="PokemonPageSecondaryContainer">
                <img id="pokemonPageImage" src={pokemon?.spriteone} alt="" />
                <div id="PokemonPageDataContainer">
                    <span id="PokemonPageDescription">{pokemon?.description}</span>
                    <div id="PokemonPageAtributesContainer">
                        <div className="PokemonColumnAtribute">
                            <span className="PokemonAttributeTitle">Height</span>
                            <span className="PokemonAttributeText">{pokemon?.height} m</span>

                            <span className="PokemonAttributeTitle">Weight</span>
                            <span className="PokemonAttributeText">{pokemon?.weight} kg</span>
                        </div>
                        <div className="PokemonColumnAtribute">
                            <span className="PokemonAttributeTitle">Abilities</span>
                            <span className="PokemonAttributeText">{pokemon?.ability}</span>

                            <span className="PokemonAttributeTitle">Weight</span>
                            <span className="PokemonAttributeText">{pokemon?.weight} kg</span>
                        </div>
                    </div>

                </div>
            </div>
            <div id="PokemonPageTypeContainer">
                <span id="PokemonPageType" onClick={navigateToTypeOne} style={{backgroundColor : typeOneColor}}>{pokemon?.type}</span>
                {pokemon?.typetwo != "None" ? <span id="PokemonPageType" onClick={navigateToTypeTwo} style={{backgroundColor : typeTwoTColor}}>{pokemon?.typetwo}</span> : <></>}
            </div>
        </div>
    )
}