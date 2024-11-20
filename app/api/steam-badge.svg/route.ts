import { NextRequest, NextResponse } from "next/server";
import {
  fetchPlayerSummary,
  convertImageToBase64,
} from "../../../lib/playerLib";
import { SteamBadge } from "../../../components/SteamBadge";
import {
  PersonaStateEnum,
  StatusKeyType,
  AdditionalPlayerSummaryType,
  PlayerSummaryType,
} from "../../../types";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const ReactDOMServer = (await import("react-dom/server")).default;
    const searchParams = request.nextUrl.searchParams;
    const steamId = searchParams.get("steamId");
    if (!steamId) {
      return Response.json({ error: "steamId is required" }, { status: 400 });
    }
    const data = await fetchPlayerSummary(steamId);
    if (!data) {
      const svgReactComponent = ReactDOMServer.renderToStaticMarkup(
        SteamBadge({ playerSummary: undefined })
      );
      return new NextResponse(svgReactComponent, {
        headers: {
          "Content-Type": "image/svg+xml",
        },
      });
    }
    const profileImage = await convertImageToBase64(data.avatarfull);
    const status = Object.keys(PersonaStateEnum).find((key) => {
      return PersonaStateEnum[key as StatusKeyType] === data.personastate;
    });
    const responseData = {
      ...data,
      status,
      profileImageBase64: profileImage,
    } as PlayerSummaryType & AdditionalPlayerSummaryType;
    const svgReactComponent = ReactDOMServer.renderToStaticMarkup(
      SteamBadge({ playerSummary: responseData })
    );
    return new NextResponse(svgReactComponent, {
      headers: {
        "Content-Type": "image/svg+xml",
      },
    });
  } catch (error) {
    
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
