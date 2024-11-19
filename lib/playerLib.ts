'use server';
import { PlayerSummaryType, GetPlayerSummaryResponse } from "../types";

export async function fetchPlayerSummary(steamId: string | null): Promise<PlayerSummaryType | undefined> {
    //use server
    if (!steamId) undefined
    try {
        let res = await fetch(
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