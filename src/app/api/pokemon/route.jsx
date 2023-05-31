import { NextResponse } from "next/server";
import pokemon from "@/pokemon.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || 1;
  const pokemonData = pokemon.slice((page - 1) * 10, (page - 1) * 10 + 10);
  if (!pokemonData.length) {
    return NextResponse.json({ error: "Page not found" });
  }
  return NextResponse.json(pokemonData);
}
