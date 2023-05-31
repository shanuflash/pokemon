import { NextResponse } from "next/server";
import pokemon from "@/pokemon.json";

export async function GET(request) {
  return NextResponse.json(pokemon.slice(0, 10));
}
