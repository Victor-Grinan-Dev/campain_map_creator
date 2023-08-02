
export class Map {
    playableTiles = 0;
    totalTiles = 0
    maxPlayers = 2;
    constructor(name, shape, dimensions, map, isAutomated = false, author=undefined){
    this.name = name;
    this.shape = shape;
    this.dimensions = dimensions;
    this.map = map;// array of MapLines/bidimentional array
    this.isAutomated = isAutomated;
    this.setPlayableTiles();
    this.setTotalTiles();
    };
    setTotalTiles(){
        for(let row of this.map){
            for (let tile of row){
                if (tile.terrain){
                    this.totalTiles += 1;
                }
            }
        }
    }
    setPlayableTiles(){
        for(let row of this.map){
            for (let tile of row){
                if (tile.terrain && tile.terrain.name !== "mountains" && tile.terrain.name !== "blank"){
                    this.playableTiles += 1;
                }
            }
        }
    }

    getFormation(fromTileId){
        for (let row of this.map){
            for (let tile of row){
                if (tile.id === fromTileId){
                    return tile.formation
                }
            }
        }    
    };

    placeFormation(formation, tileId){
        for (let row of this.map){
            for (let tile of row){
                if (tile.id === tileId){
                    tile.formation = formation
                } 
            }
        }
        return 0;
    };

    deleteFormation(tileId){
        for (let row of this.map){
            for (let tile of row){
                if (tile.id === tileId){
                    tile.formation = null
                }
            }
        }
        return 0;
    };

    moveFormation(fromTileId, toTileId){
        const formation = this.getFormation(fromTileId);
        this.placeFormation(formation, toTileId);
        this.deleteFormation(fromTileId);
        return 0;
    }
}