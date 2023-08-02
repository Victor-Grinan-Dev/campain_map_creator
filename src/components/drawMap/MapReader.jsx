import React from 'react';
import Tile from './Tile';

const MapReader = ({nestedArray, tileSize, shape, action=null, showTilesId=false, topStart=0, leftStart=0, mapObj=true}) => {

    const side = tileSize //width and length of a tile
    
    //logic variables: 
    const evenLeftStart = leftStart + side * 0.5;
    const leftIncrementor = side ; //incrementor (-0.9?)
    const topIncrementor = side * 0.75; //incrementor 
    
    const handleLeft = (y, x) => {
        if (shape === "sq" || mapObj.isAutomated){
            if( y % 2 === 0 ) {
                return leftStart + leftIncrementor * x
            } else {
                return evenLeftStart + leftIncrementor * x
            }
        }else{
            if(y % 2 !== 0) {
                return leftStart + leftIncrementor * x
            } else {
                return evenLeftStart + leftIncrementor * x
            }
        }
    }

  return (
    <div className="canvas"
    style={{
        height:`${nestedArray.length * topIncrementor}px`,
        width:`${nestedArray.length * tileSize}px`,
        position:"relative",
    }}
    >  
        {
         nestedArray.map((row, y) => (
             row.map((tile, x) => (       
                 tile.terrain && <Tile 

                    key={tile.id} 
                    id={tile.id}
                    tileObj={tile}

                    showId={showTilesId}
                    image={tile.terrain.image}  
                    posTop={topStart + topIncrementor * y} 
                    posLeft={handleLeft(y, x)} 

                    tileSize={tileSize} 
                    
                    func={action}  

                    //game varible items
                    objective={tile.objective} 
                    formation={tile.formation}
                    status={tile.status}
                />
            ))
        ))
    }
    </div>
  )
}

export default MapReader;

/*
{
         nestedArray.map((row, y) => (
             row.map((tile, x) => (       
                 tile.terrain && <Tile 
                    key={tile.id} 
                    id={tile.id}
                    tileObj={tile}

                    showId={showTilesId}
                    image={tile.terrain.image}  
                    posTop={topStart + topIncrementor * y} 
                    posLeft={handleLeft(y, x)} 

                    tileSize={tileSize} 
                    
                    func={action}  

                    //game varible items
                    objective={tile.objective} 
                    formation={tile.formation}
                    status={tile.status}
                />
            ))
        ))
    }
*/