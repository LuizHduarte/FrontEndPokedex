import { useState } from "react";
import { TypeBox } from "../TypeBox/TypeBox"
import "./style.css"


type PokemonProps ={
    id: number,
    name: string,
    spriteone?: string,
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

export default function Pokemon(props: PokemonProps){

    const navigateToPokemonPage = () => {
        // 👇️ navigate to /
        window.location.href = `/pokemon/${props.id}`
    };

    let typeOneColor = Types[props.type as keyof typeof Types]
    let typeTwoTColor = Types[props.typetwo as keyof typeof Types]

    return(
        <div id="PokemonContainer">
            <img id="PokemonImg" src={props.spriteone} alt="" onClick={navigateToPokemonPage}/>
            <span id="PokemonId">Nº{props.id}</span>
            <span id="PokemonName">{props.name}</span>
            <div id="PokemonTypes">
                <TypeBox type={props.type} color={typeOneColor}/>
                {props.typetwo != "None" ? <TypeBox type={props.typetwo} color={typeTwoTColor}/> : <></>}
            </div>
        </div>
    )
}