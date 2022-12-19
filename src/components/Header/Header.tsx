import './style.css'
import logo from '../../public/images/Pokedex.png'
import { BiSearchAlt } from 'react-icons/bi';
import { useState } from 'react';

export function Header(){

    const [pokemonID, setPokemonID] = useState('');

    const navigateSearch = () => {
        console.log()
        window.location.href = `/pokemon/${pokemonID}`
    };

    const navigateMain = () => {
        // 👇️ navigate to /
        window.location.href = '/'
    };

    const navigateCheckTypes = () => {
        // 👇️ navigate to /
        window.location.href = '/allTypes'
    };

    const managePokemon = () => {
        // 👇️ navigate to /
        window.location.href = '/manage'
    };

    return(
        <>
        <div id="mainHeader">
            <img src={logo} id="headerLogo" alt="logo do site pokedéx" onClick={navigateMain} />

            <div id="headerNavContainer">
                <span className='headerItem' onClick={managePokemon}>Manage Pokémons</span>
                <span className='headerItem' onClick={navigateCheckTypes}>Check Types</span>
                <span className='headerItem'>About</span>
                <form onSubmit={navigateSearch} id='headerSearchContainer'>
                    <input id='HeaderSearchBox' type="text" placeholder='Search Pokémon' onChange={e=>( setPokemonID(e.target.value) )} />
                    <BiSearchAlt id="HeadersearchIcon" size={20} onClick={navigateSearch} type='submit'/>
                </form>
                
            </div>
        </div>
        </>
    )
}