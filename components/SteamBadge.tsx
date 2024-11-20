import React from "react";
import { PlayerSummaryType, AdditionalPlayerSummaryType } from "../types";
import { SteamLogo } from "./SteamLogo";
type Props = {
  playerSummary: (PlayerSummaryType & AdditionalPlayerSummaryType) | undefined;
};
const width = 540;
const height = 120;

export function SteamBadge(props: Props) {
  if (!props.playerSummary) {
    return (
      <svg
        fill="none"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject width={width} height={height}>
          <style>
            {`
          main {
          width: 100%;
          }

          `}
          </style>
          <main {...{ xmlns: "http://www.w3.org/1999/xhtml" }}>
            <div>
              <p>Player not found</p>
            </div>
          </main>
        </foreignObject>
      </svg>
    );
  }
  return (
    <svg
      fill="none"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <foreignObject width={width} height={height}>
        <style>
          {`
          p {
            margin: 0;
          }
          .container {
            background-color: #171a21;
            color: #ecf0f1;
            font-family: Arial, sans-serif;
            font-size: 16px;
            height:max-content;
            width: 100%;
            border-radius: 10px;
            position: relative;
          }
          .content {
            display: flex;
            padding:10px 10px;
          }
            .steamLogo {
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 20;
            }
          .avatar {
            border: 2px solid #1b2838;
            width: 80px;
            height: 80px;
            box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
          }
          .profile__data {
            margin-left: 20px;
          }
          .name {
            font-size: 24px;
            color: #00adee;
            }
            .game__status {
            margin-top:15px;
            }
            .status {
            font-size: 14px;
            color: #00adee;
            font-weight: 100;
            }
            .playing {
            color:#B4E61D;
            }
            .game {
            color:#A4D007;
            opacity:0.9;
            }
            .offline {
            color: gray;
          }
          `}
        </style>

        <main
          className="container"
          {...{ xmlns: "http://www.w3.org/1999/xhtml" }}
        >
          <aside className="steamLogo">
            <SteamLogo />
          </aside>
          <div className="content">
            {props.playerSummary.profileImageBase64 && (
              <img
                className="avatar"
                src={props.playerSummary.profileImageBase64}
                alt={"avatar"}
              />
            )}
            <aside className="profile__data">
              <p
                className={`name ${
                  props.playerSummary.status === "Offline" && "offline"
                }`}
              >
                {props.playerSummary.personaname}
              </p>
              {props.playerSummary.status &&
                !props.playerSummary.gameextrainfo && (
                  <p
                    className={`status ${
                      props.playerSummary.status === "Offline" && "offline"
                    }`}
                  >
                    {props.playerSummary.status}
                  </p>
                )}
              {props.playerSummary.gameextrainfo && (
                <div className={"game__status"}>
                  <p className="playing">In Game:</p>
                  <p className="game">{props.playerSummary.gameextrainfo}</p>
                </div>
              )}
            </aside>
          </div>
        </main>
      </foreignObject>
    </svg>
  );
}
