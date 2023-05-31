import { NextResponse } from "next/server";
import pokemon from "@/pokemon.json";

export async function GET(request, { params }) {
  const pokemonData = pokemon.find((p) => p.id == params.id);
  if (!pokemonData) {
    return NextResponse.json({ error: "Pokemon not found" });
  }
  return NextResponse.json(pokemonData);
}
