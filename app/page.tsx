"use client"

import { useEffect, useState } from 'react'
import  React  from 'react'

export default function Home() {
  //const id = 0;
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [newPokemon, setNewPokemon] = useState('');

  useEffect(() => {
    fetch("/api/route")
    .then((res) => res.json())
    .then((data) => setPokemons(data))
  }, [])

  const addPokemon = () => {
    fetch("/api/route", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: newPokemon })
    })
    .then((res) => res.json())
    .then((data) => {
      setPokemons([...pokemons, data])
      setNewPokemon('')
    })
  }

  return (
    <div>
      <h1>Pokedex</h1>
      <ul>
        {pokemons.map((pokemon) => (
        <li key={pokemon.id}>
          {pokemon.name}
        </li>
        ))}
      </ul>
    </div>
  )

}
