import React from "react";
import {PlayerSummaryType} from '../types';


type Props = {
    playerSummary: PlayerSummaryType | undefined;
}
const width = 540
const height = 180

export function SteamBadge(props:Props) {



  if(!props.playerSummary) {
    return <svg
    fill="none"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <foreignObject width={width} height={height}>
      <main >
      {/* <Image src={bg} alt={'carbon background'} fill={true} className="z-1" />  */}
      <div className={'relative z-10 flex items-center'}>
      <p className={'text-white text-lg'}>Player not found</p>
      </div>
      </main>
      </foreignObject>
      </svg>
  }
  return <svg
  fill="none"
  width={width}
  height={height}
  viewBox={`0 0 ${width} ${height}`}
  xmlns="http://www.w3.org/2000/svg"
>
  <foreignObject width={width} height={height}>
    <style>{`

    `}
    </style>
    <div  {...{ xmlns: 'http://www.w3.org/1999/xhtml' }}>
    {/* <Image src={bg} alt={'carbon background'} fill={true} className="z-1" />  */}
    <div>
    {/* <img src={props.playerSummary.avatarfull} alt={'avatar'} /> */}
    <div>
    <p>{props.playerSummary.personaname}</p>
    </div>
    </div>
    </div>
    </foreignObject>
    </svg>
}



