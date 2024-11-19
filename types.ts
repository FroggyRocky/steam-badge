export type PlayerSummaryType = {
    steamId: string;
    personaname: string;
    avatar: string;
    avatarfull: string;
    avatarmedium: string;
    gameextrainfo?: string;
    gameid?: string;
  };

export type GetPlayerSummaryResponse = {
    response: {
      players: Array<PlayerSummaryType>;
    };
  };