import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Main } from './pages/Main/Main'
import { Pokemon } from './pages/Pokemon/Pokemon'
import { PokemonByTypes } from './pages/PokemonByTypes/PokemonByTypes'
import { ChechTypes } from './pages/CheckTypes/CheckTypes'
import { ManagePokemon } from './pages/ManagePokemon/ManagePokemon'



export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/manage' element={<ManagePokemon/>} />
                <Route path='/Pokemon/:id' element={<Pokemon/>} />
                <Route path='/allTypes' element={<ChechTypes/>} />
                <Route path='/type/:type' element={<PokemonByTypes/>} />
            </Routes>     
        </Router>
    )
}