import React from "react";

const getPokemon = async (id: string) => {
  try {
    const response = await fetch(
      `http://localhost:${
        process.env.NEXT_PUBLIC_PORT ?? 3000
      }/api/route/${id}`,
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
    params: { id: string }
}) {
  const pokemon = await getPokemon(params.id);

  return (
    <div>
      <h1>{pokemon.name}</h1>
    </div>
  );
}
