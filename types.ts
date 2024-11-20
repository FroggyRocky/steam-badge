export type PlayerSummaryType = {
  steamId: string;
  personaname: string;
  avatar: string;
  avatarfull: string;
  avatarmedium: string;
  gameextrainfo?: string;
  gameid?: string;
  personastate: number;
  profileurl: string;
}


export type AdditionalPlayerSummaryType = {
  status?: StatusKeyType;
  profileImageBase64?: string;
  
}
export type GetPlayerSummaryResponse = {
  response: {
    players: Array<Omit<PlayerSummaryType, 'status' | 'profileImageBase64'>>;
  };
};

export type StatusKeyType = keyof typeof PersonaStateEnum;

export enum PersonaStateEnum {
  Offline = 0,
  Online = 1,
  Busy = 2,
  Away = 3,
  Snooze = 4,
  LookingToTrade = 5,
  LookingToPlay = 6
}

