import { NextResponse } from "next/server";
import pokemon from "@/pokemon.json";

export async function GET(request, { params }) {
  const pokemonData = pokemon.find((p) => p.id == params.id);
  return NextResponse.json(pokemonData);
}
