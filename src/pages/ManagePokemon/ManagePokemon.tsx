import axios from "axios";
import { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import './style.css'

export function ManagePokemon(){
    const [operationType, setOperationType] = useState('Add');

    const [PokemonId, setPokemonId] = useState();
    const [PokemonName, setPokemonName] = useState('');
    const [pokemonDescription, setPokemonDescription] = useState('');
    const [pokemonHeight, setPokemonHeight] = useState('');
    const [pokemonWeight, setPokemonWeight] = useState('');
    const [pokemonAbility, setPokemonAbility] = useState('');
    const [pokemonSprite, setPokemonSprite] = useState('');
    const [pokemonPrimaryType, setPokemonPrimaryType] = useState('');
    const [pokemonSecondarytype, setpokemonSecondarytype] = useState('');
    
    const changeOperationAdd = () => {
        setOperationType('Add')
    };

    const changeOperationUpdate = () => {
        setOperationType('Update')
    };

    const handlePokemonSearch = event => {
        event.preventDefault();
        axios.get(`https://back-end-pokedex.vercel.app/pokemon/${PokemonId}`)
        .then((response) => {
            console.log(response),
            setPokemonName(response.data[0].name),
            setPokemonDescription(response.data[0].description),
            setPokemonHeight(response.data[0].height),
            setPokemonWeight(response.data[0].weight),
            setPokemonAbility(response.data[0].ability),
            setPokemonSprite(response.data[0].spriteone),
            setPokemonPrimaryType(response.data[0].type),
            setpokemonSecondarytype(response.data[0].typetwo)
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }
    const handleUpdatePokemon = event =>{
        event.preventDefault();
        const headers = { 
            'Content-Type': 'application/json',
            'Accept': '*/*'
        };
        axios.put(`https://back-end-pokedex.vercel.app/pokemon/${PokemonId}`, {
            name: PokemonName,
            description:pokemonDescription,
            height: pokemonHeight,
            weight: pokemonWeight,
            ability: pokemonAbility,
            spriteone:pokemonSprite,
            spritetwo: "",
            type: pokemonPrimaryType,
            typetwo: pokemonSecondarytype},{headers})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const handleAddPokemon = event =>{
        event.preventDefault();
        const headers = { 
            'Content-Type': 'application/json',
            'Accept': '*/*'
        };
        axios.post(`https://back-end-pokedex.vercel.app/pokemon/`, {
            name: PokemonName,
            description:pokemonDescription,
            height: pokemonHeight,
            weight: pokemonWeight,
            ability: pokemonAbility,
            spriteone:pokemonSprite,
            spritetwo: "",
            type: pokemonPrimaryType,
            typetwo: pokemonSecondarytype},{headers})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    if(operationType == 'Add'){
        return(
            <>
                <div id="ManageMainContent">
                    <a onClick={changeOperationUpdate}id="PokemonUpdateButton" href="#"><span>UPDATE < IoIosArrowForward /> </span></a>
                </div>
                <h1>ADD POkÉMON</h1>

                <form onSubmit={handleAddPokemon} id="manageUpdateFormContent">
                    <div className="ManageUpdateFormInputContainer">
                        <label htmlFor="name">
                            Name
                        </label>
                        <input 
                            name="name" 
                            className="manageUpdateInput" 
                            type="text" 
                            onChange={e=>( setPokemonName(e.target.value)
                            )}
                            value={PokemonName}
                        />
                    </div>

                    <div className="ManageUpdateFormInputContainer">
                        <label htmlFor="description">
                            Description
                        </label>
                        <input 
                            name="description" 
                            className="manageUpdateInput" 
                            type="text" 
                            onChange={e=>( setPokemonDescription(e.target.value) 
                            )}
                            value={pokemonDescription}
                        />
                    </div>

                    <div className="ManageUpdateFormInputContainer">
                        <label htmlFor="height">
                            Height
                        </label>
                        <input 
                            name="height" 
                            className="manageUpdateInput" 
                            type="number"
                            onChange={e=>( setPokemonHeight(e.target.value) )}
                            value={pokemonHeight}
                        />
                       
                    </div>

                    <div className="ManageUpdateFormInputContainer">
                        <label htmlFor="weight">
                            Weight
                        </label>
                        <input 
                            name="weight" 
                            className="manageUpdateInput" 
                            type="number"
                            onChange={e=>( setPokemonWeight(e.target.value) )} 
                            value={pokemonWeight}
                        />
                        
                    </div>

                    <div className="ManageUpdateFormInputContainer">
                        <label htmlFor="ability">
                            Ability
                        </label>
                        <input 
                            name="ability" 
                            className="manageUpdateInput" 
                            type="text" 
                            onChange={e=>( setPokemonAbility(e.target.value) )}
                            value={pokemonAbility}
                        />
                    </div>

                    <div className="ManageUpdateFormInputContainer">
                        <label htmlFor="Sprite">
                            Sprite
                        </label>
                        <input 
                            name="Sprite" 
                            className="manageUpdateInput" 
                            type="text" 
                            onChange={e=>( setPokemonSprite(e.target.value) )}
                            value={pokemonSprite}
                        />
                        
                    </div>

                    <div className="ManageUpdateFormInputContainer">
                        <label htmlFor="primary-type">
                            Primary type
                        </label>
                        <select 
                            name="primary-type" 
                            className="manageUpdateInput" 
                            onChange={e=>( setPokemonPrimaryType(e.target.value) )}
                            value={pokemonPrimaryType}
                        >
                            <option value="Normal">Normal</option>
                            <option value="Fire">Fire</option>
                            <option value="Water">Water</option>
                            <option value="Grass">Grass</option>
                            <option value="Electric">Electric</option>
                            <option value="Ice">Ice</option>
                            <option value="Fighting">Fighting</option>
                            <option value="Poison">Poison</option>
                            <option value="Ground">Ground</option>
                            <option value="Flying">Flying</option>
                            <option value="Pshychic">Pshychic</option>
                            <option value="Bug">Bug</option>
                            <option value="Rock">Rock</option>
                            <option value="Ghost">Ghost</option>
                            <option value="Dark">Dark</option>
                            <option value="Dragon">Dragon</option>
                            <option value="Steel">Steel</option>
                            <option value="Fairy">Fairy</option>
                        </select>
                        
                    </div>

                    <div className="ManageUpdateFormInputContainer">
                        <label htmlFor="Secondary-type">
                            Secondary type
                        </label>
                        <select 
                            name="Secondary-type" 
                            className="manageUpdateInput" 
                            onChange={e=>( setpokemonSecondarytype(e.target.value) )}
                            value={pokemonSecondarytype}
                        >
                            <option value="None">None</option>
                            <option value="Normal">Normal</option>
                            <option value="Fire">Fire</option>
                            <option value="Water">Water</option>
                            <option value="Grass">Grass</option>
                            <option value="Electric">Electric</option>
                            <option value="Ice">Ice</option>
                            <option value="Fighting">Fighting</option>
                            <option value="Poison">Poison</option>
                            <option value="Ground">Ground</option>
                            <option value="Flying">Flying</option>
                            <option value="Pshychic">Pshychic</option>
                            <option value="Bug">Bug</option>
                            <option value="Rock">Rock</option>
                            <option value="Ghost">Ghost</option>
                            <option value="Dark">Dark</option>
                            <option value="Dragon">Dragon</option>
                            <option value="Steel">Steel</option>
                            <option value="Fairy">Fairy</option>
                        </select>
                    </div>
                    <button id="ConfirmPokemonUpdateButton" type="submit">ADD new Pokémon</button>
                </form>
            </>
        )
    }
    else if(operationType == "Update"){
        return(
            <>
                <div id="ManageMainContent">
                    <a onClick={changeOperationAdd} id="PokemonAddButton" href="#"><span> < IoIosArrowBack /> ADD </span></a>
                </div>
                <h1>UPDATE POkÉMON</h1>
                
                <form id="SearchPokemonForUpdateForm" onSubmit={handlePokemonSearch}>
                    <input 
                        type="number" 
                        onChange={e=>( setPokemonId(e.target.value))} 
                        placeholder='Pokémon ID'
                        id="UpdatePokemonSearchBar"
                    />
                    <BiSearchAlt type='submit' onClick={handlePokemonSearch} id="HeadersearchIcon" size={20} />
                </form>
                
                
                <form onSubmit={handleUpdatePokemon} id="manageUpdateFormContent">
                    <div className="ManageUpdateFormInputContainer">
                        <label htmlFor="name">
                            Name
                        </label>
                        <input 
                            name="name" 
                            className="manageUpdateInput" 
                            type="text" 
                            onChange={e=>( setPokemonName(e.target.value)
                            )}
                            value={PokemonName}
                        />
                    </div>

                    <div className="ManageUpdateFormInputContainer">
                        <label htmlFor="description">
                            Description
                        </label>
                        <input 
                            name="description" 
                            className="manageUpdateInput" 
                            type="text" 
                            onChange={e=>( setPokemonDescription(e.target.value) 
                            )}
                            value={pokemonDescription}
                        />
                    </div>

                    <div className="ManageUpdateFormInputContainer">
                        <label htmlFor="height">
                            Height
                        </label>
                        <input 
                            name="height" 
                            className="manageUpdateInput" 
                            type="number"
                            onChange={e=>( setPokemonHeight(e.target.value) )}
                            value={pokemonHeight}
                        />
                       
                    </div>

                    <div className="ManageUpdateFormInputContainer">
                        <label htmlFor="weight">
                            Weight
                        </label>
                        <input 
                            name="weight" 
                            className="manageUpdateInput" 
                            type="number"
                            onChange={e=>( setPokemonWeight(e.target.value) )} 
                            value={pokemonWeight}
                        />
                        
                    </div>

                    <div className="ManageUpdateFormInputContainer">
                        <label htmlFor="ability">
                            Ability
                        </label>
                        <input 
                            name="ability" 
                            className="manageUpdateInput" 
                            type="text" 
                            onChange={e=>( setPokemonAbility(e.target.value) )}
                            value={pokemonAbility}
                        />
                    </div>

                    <div className="ManageUpdateFormInputContainer">
                        <label htmlFor="Sprite">
                            Sprite
                        </label>
                        <input 
                            name="Sprite" 
                            className="manageUpdateInput" 
                            type="text" 
                            onChange={e=>( setPokemonSprite(e.target.value) )}
                            value={pokemonSprite}
                        />
                        
                    </div>

                    <div className="ManageUpdateFormInputContainer">
                        <label htmlFor="primary-type">
                            Primary type
                        </label>
                        <select 
                            name="primary-type" 
                            className="manageUpdateInput" 
                            onChange={e=>( setPokemonPrimaryType(e.target.value) )}
                            value={pokemonPrimaryType}
                        >
                            <option value="Normal">Normal</option>
                            <option value="Fire">Fire</option>
                            <option value="Water">Water</option>
                            <option value="Grass">Grass</option>
                            <option value="Electric">Electric</option>
                            <option value="Ice">Ice</option>
                            <option value="Fighting">Fighting</option>
                            <option value="Poison">Poison</option>
                            <option value="Ground">Ground</option>
                            <option value="Flying">Flying</option>
                            <option value="Pshychic">Pshychic</option>
                            <option value="Bug">Bug</option>
                            <option value="Rock">Rock</option>
                            <option value="Ghost">Ghost</option>
                            <option value="Dark">Dark</option>
                            <option value="Dragon">Dragon</option>
                            <option value="Steel">Steel</option>
                            <option value="Fairy">Fairy</option>
                        </select>
                        
                    </div>

                    <div className="ManageUpdateFormInputContainer">
                        <label htmlFor="Secondary-type">
                            Secondary type
                        </label>
                        <select 
                            name="Secondary-type" 
                            className="manageUpdateInput" 
                            onChange={e=>( setpokemonSecondarytype(e.target.value) )}
                            value={pokemonSecondarytype}
                        >
                            <option value="None">None</option>
                            <option value="Normal">Normal</option>
                            <option value="Fire">Fire</option>
                            <option value="Water">Water</option>
                            <option value="Grass">Grass</option>
                            <option value="Electric">Electric</option>
                            <option value="Ice">Ice</option>
                            <option value="Fighting">Fighting</option>
                            <option value="Poison">Poison</option>
                            <option value="Ground">Ground</option>
                            <option value="Flying">Flying</option>
                            <option value="Pshychic">Pshychic</option>
                            <option value="Bug">Bug</option>
                            <option value="Rock">Rock</option>
                            <option value="Ghost">Ghost</option>
                            <option value="Dark">Dark</option>
                            <option value="Dragon">Dragon</option>
                            <option value="Steel">Steel</option>
                            <option value="Fairy">Fairy</option>
                        </select>
                    </div>
                    <button id="ConfirmPokemonUpdateButton" type="submit">Update Pokémon</button>
                </form>
            </>
        )
    }
}