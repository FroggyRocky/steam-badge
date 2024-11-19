import { NextRequest } from "next/server";
import { fetchPlayerSummary } from "../../../lib/playerLib";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const steamId = searchParams.get("steamId");

    if (!steamId) {
      return Response.json({ error: "steamId is required" }, { status: 400 });
    }
    const data = await fetchPlayerSummary(steamId);
    if (!data) {
      return Response.json({ error: "Player not found" }, { status: 404 });
    }
    
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
