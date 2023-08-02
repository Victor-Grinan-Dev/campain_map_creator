import React from 'react';
import Token from '../token/Token';
import { tilesImages } from '../../images/tiles';
import { applyFilter } from '../../data/filters';

const Tile = ({tileObj, posTop, posLeft, func = null, showId=false, tileSize, status=null}) => {
    const filterImage = status ? applyFilter[status] : null;
    //if there is no tile make a blank tile? 
    
    return (
        <div
        id={tileObj.id}
        className="tile"
        onClick={func} 
        style={{
          backgroundImage:`url(${tilesImages[tileObj.terrain.name]}`,
          backgroundSize: `${tileSize}px ${tileSize + 5}px`,
          width:`${tileSize}px`,
          height:`${tileSize + 5}px`,
          left:`${posLeft}px`,
          top:`${posTop}px`,
          position:"absolute"
        }}
        >
          <div className="tileContent" id={tileObj.id}>
            {showId && <p>{tileObj.id}</p>}
            {tileObj.formation && <Token formation={tileObj.formation} />}
            {tileObj.isStartingPosition && <p style={{fontColor:"red"}}>X</p>}
          </div>
          {
      status === 'hostile' ? <div name={`filter_${status}`} className="tileFilter"
        style={{
          backgroundImage:`url(${filterImage})`,
        }} /> : null
    }
    {
      status === 'unexplored' ? <div name={`filter_${status}`} className="tileFilter"
        style={{
          backgroundImage:`url(${filterImage})`,
        }} /> : null
    }
    {/* status === 'selected' && currentFormation.movement > 0 && isFilterUp &&  */
       status === 'selected' ? <div name={`filter_${status}`} className="tileFilter"
        style={{
          backgroundImage:`url(${filterImage})`,
        }} /> : null
    }
        </div>
      )
    }
    

export default Tile;
