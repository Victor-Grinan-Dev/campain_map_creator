import React from 'react';
import { capitalStart } from '../../functions/capitalStart';

const CampaignCard = ({campaign}) => {
  return (
    <div className="campaignCard">
        <div className="camapignBannerContainer">
        <img className='campaignBanner' alt='banner' src={campaign.banner} />
        </div>
        <h3>{campaign.id}-{capitalStart(campaign.name)}</h3>
        <p> - Players: {campaign.players.length}/{campaign.map.maxPlayers}</p> 
        <p> - Map Name: {campaign.map.name} </p>
        <p> - Map Size: {campaign.map.dimensions} </p>

        <div className="buttons">
            <button>Join 🔗</button>
            <button>Info 🛈</button>
        </div>
    </div>
  )
}

export default CampaignCard;

/* 
isStarted
isEnded
rules
players
turn
phase
savedMap
campaignId
name
armySize
map
availableFactions
rounds
timeLapse
*/