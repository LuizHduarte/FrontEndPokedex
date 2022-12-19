import { useState } from "react";
import './style.css'

enum Types {
  None = "#FFFFFF",
  Normal = "#a4acaf",
  Fire = "#fd7d24",
  Water = "#4592c4",
  Grass = "#9bcc50",
  Electric = "#eed535",
  Ice = "#51c4e7",
  Fighting = "#d56723",
  Poison = "#b97fc9",
  Ground = "#948437",
  Flying = "#4A4AAC",
  Psychic = "#f366b9",
  Bug = "#729f3f",
  Rock = "#a38c21",
  Ghost = "#b97fc9",
  Dark = "#707070",
  Dragon = "#691b5e",
  Steel = "#9eb7b8",
  Fairy = "#fdb9e9",
}

export function ChechTypes() {
  const [types, setTypes] = useState([
    "None",
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dark",
    "Dragon",
    "Steel",
    "Fairy",
  ]);
  return (
    <div id="CheckTypeMainContainer">
      {types.map((type) => {
        return (
            <>
            {type != 'None'? <span onClick={() =>{window.location.href = `/type/${type}`}} className="CheckTypeStyleSpan" style={{
                    backgroundColor: Types[type as keyof typeof Types]
                }}>
                {type}
                </span> : ''}
            </>
        );
      })}
    </div>
  );
}
