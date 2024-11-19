import { NextRequest, NextResponse } from "next/server";
import { fetchPlayerSummary } from "../../../lib/playerLib";
import { SteamBadge } from "../../../components/SteamBadge";


export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const ReactDOMServer = (await import('react-dom/server')).default
    const searchParams = request.nextUrl.searchParams;
    const steamId = searchParams.get("steamId")
    if (!steamId) {
      return Response.json({ error: "steamId is required" }, { status: 400 });
    }
    const data = await fetchPlayerSummary(steamId);
    if (!data) {
      return Response.json({ error: "Player not found" }, { status: 404 });
    }

    const svg = ReactDOMServer.renderToStaticMarkup(SteamBadge({ playerSummary: data }));
    return new NextResponse(svg, {
        headers: {
            'Content-Type': 'image/svg+xml'
        }
    });
  } catch (error) {
    console.log(error);
    return Response.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
