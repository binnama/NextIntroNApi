import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";

        const pokedex = [
          { id: "1", name: "Bulbasaur" },
          { id: "2", name: "Ivysaur" },
          { id: "3", name: "Venusaur" },
          { id: "4", name: "Charmander" },
          { id: "5", name: "Charmeleon" },
          { id: "6", name: "Charizard" },
          { id: "7", name: "Squirtle" },
          { id: "8", name: "Wartortle" },
          { id: "9", name: "Blastoise" },
          { id: "10", name: "Caterpie" },
          { id: "11", name: "Metapod" },
          { id: "12", name: "Butterfree" },
          { id: "13", name: "Weedle" },
          { id: "14", name: "Kakuna" },
          { id: "15", name: "Beedrill" },
          { id: "16", name: "Pidgey" },
          { id: "17", name: "Pidgeotto" },
          { id: "18", name: "Pidgeot" },
          { id: "19", name: "Rattata" },
          { id: "20", name: "Raticate" },
        ];

//export default function handler ( req: any, res: any) {
export function GET () {
        return NextResponse.json(pokedex, { status: 200 })
}

export async function POST (req: NextRequest) {
        try {
            const requestBody = await req.json()
            if (!requestBody) {
                return NextResponse.json({ message: "Pokemon name is required" }, { status: 400 })
            }
            const newPokemon = {id: pokedex.length + 1, name: requestBody}
            return NextResponse.json(newPokemon, { status: 201 })
        } catch (error) {
            return NextResponse.json({ error: "Error adding pokemon" }, { status: 500 })
        }
}