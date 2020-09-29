import React, { useState } from "react";
import shuffle from 'lodash.shuffle';
import "./App.css";

// image for the pokemon
// https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png

const pokemon = [
  { id: 4, name: "charizard" },
  { id: 10, name: "caterpie" },
  { id: 77, name: "ponyta" },
  { id: 108, name: "lickitung" },
  { id: 132, name: "ditto" },
  { id: 133, name: "eevee" },
];

const doublePokemon = shuffle([...pokemon, ...pokemon]);

export default function App() {
  const [opened, setOpened] = useState([]);

  return (
    <div className="app">
      <div className="cards">
        {doublePokemon.map((pokemon, index) => {

          return <PokenonCard key={index} pokemon={pokemon} />
        })}
      </div>
    </div>
  );
}

function PokenonCard({ pokemon }) {
  return (
    <div className="pokemon-card flipped" >
      <div className="inner">
        <div className="front">
          <img
            width="100"
            alt={pokemon.name}
            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          />
        </div>
        <div className="back">?</div>
      </div>
    </div>
  );
}
