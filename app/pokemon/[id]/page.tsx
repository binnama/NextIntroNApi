import Link from "next/link";
import React from "react";

const getPokemon = async (id: string) => {
  try {
    const response = await fetch(
      `http://localhost:${
        process.env.NEXT_PUBLIC_PORT ?? 3000
      }/api/${id}`,
      {
        method: "get",
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default async function PokemonPage({
  params, }: {
    params: { id: string, name: string }
}) {
  const pokemonId = await getPokemon(params.id);
  const pokemonName = await getPokemon(params.name);

  /*
    <div>
      <Link href={"/"}>Home</Link>
    </div>

  */

  return (
    <div>
      <h1>{pokemonName}</h1>
      <p>{JSON.stringify(params)}</p>
      <p>{JSON.stringify(pokemonId)}</p>
      <p>{JSON.stringify(pokemonName)}</p>
      <Link href={"/"}>Home</Link>
    </div>
  );
}
