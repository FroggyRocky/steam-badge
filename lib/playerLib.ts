'use server';
import { PlayerSummaryType, GetPlayerSummaryResponse } from "../types";

export async function fetchPlayerSummary(steamId: string | null): Promise<PlayerSummaryType | undefined> {
    //use server
    if (!steamId) undefined
    try {
        const res = await fetch(
          `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${process.env.STEAM_API_KEY}&steamids=${steamId}`
        );
        const result: GetPlayerSummaryResponse = await res.json();
        const data = result.response.players[0];
        if (!data) {
          return undefined
        }
        return data
      } catch (error) {
        return undefined
      }
}


export async function convertImageToBase64(imageUrl: string): Promise<string> {
  const response = await fetch(imageUrl);
  const blob = await response.arrayBuffer();
  const buffer = Buffer.from(blob)
  const base64 = buffer.toString('base64')
  return 'data:image/png;base64,' + base64
}