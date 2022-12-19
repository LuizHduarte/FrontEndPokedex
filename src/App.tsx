import { AppRoutes } from "./Routes";
import { Header } from "./components/Header/Header";

import './GlobalStyle.css'

type PokemonType ={
  id: number,
  name: string,
  description?: string,
  height?: number,
  weight?: number,
  ability?: string,
  spriteone?: string,
  spritetwo?: string,
  type?: string,
  typetwo?: string
}


function App() {

  return (
    <>
      <Header />
      <AppRoutes/>
    </>
    
  )
}

export default App
