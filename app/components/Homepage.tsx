"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import instance from "../lib/axios";
import Link from "next/link";
import styles from "../page.module.css";

export default function Homepage() {
  //const id = 0;
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [newPokemon, setNewPokemon] = useState("");

  useEffect(() => {
    fetch("/api/")
      .then((res) => res.json())
      .then((data) => setPokemons(data));
  }, []);

  const addPokemon = () => {
    fetch("/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newPokemon }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPokemons([...pokemons, data]);
        setNewPokemon("");
      });
  };

  /*
const getPokemons = async () => {
  try {
    const response = await axios.get("/api/route")

    if (response?.data?.success) {
      setPokemons(response.data.data)
    }
  } catch (error) {
    console.error(error?.response?.data);
  }
}

useEffect(() => {
  getPokemons()
}, [])

useEffect(() => {
    instance.get("")
    .then((response) => {
        setPokemons(response.data)
    })
}, [])
  */

  return (
    <div className={styles.container}>
      <h1>Pokedex</h1>
      <input
        type="text"
        placeholder="Add a pokemon"
        value={newPokemon}
        onChange={(e) => setNewPokemon(e.target.value)}
      />
      <button onClick={addPokemon}>Add Pokemon</button>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Link href={`/pokemon/${pokemon.id}`}>
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}