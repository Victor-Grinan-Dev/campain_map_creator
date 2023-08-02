import { terrainTypes } from '../data/terrainTypes';
import { Tile } from '../classes/tile';
import { Map } from '../classes/map';

const relation = {
    "5":1,
    "7":2,
    "9":4,
    "11":6,
    "13":8,
}

const diagonChar = [
    'a', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    ]

export const generateTileId = (y, x, alphabet_start) => {
    let id;
    if(y < 10){
        id = diagonChar[alphabet_start + x] + "0" + y;
    }else{
        id = `${diagonChar[alphabet_start + x] + y}`;
    }
    return id;
}

export const hexCleaner = (nestedArray) => {

    let cleanedNestedArray = [];
    
    for (let y = 0; y < nestedArray.length; y++){
        let newArray = [];
        let has_started = false;
        const currentRow = nestedArray[y];
        for (let x = 0; x < nestedArray[y].length; x++){
            const currentTile = nestedArray[y][x]
            if (nestedArray[y][x].image !== null){
                has_started = true;
            }
            if(has_started && currentTile.terrain === null){
                // newArray = currentRow.slice(x - 1)
                newArray = currentRow.slice(0, x);
                cleanedNestedArray.push(newArray);
                break;
            }
        }
    }

    return cleanedNestedArray;
}
export const canvasSquare = (name, maxRows, maxCols) => {

    if(maxCols < 9){
        maxCols = 9;
    }
    if(maxRows< 9){
        maxRows = 9;
    }

    let columns;
    const map = [];
    for (let y = 0; y < maxRows; y++){
        const rows = [];
        y % 2 === 0 ? columns = maxCols : columns = maxCols - 1;
        for (let x = 0; x < columns; x++){
            const alphaStart = y;
            const id = generateTileId(y,x, alphaStart)
            const newTile = new Tile(id, x, y, terrainTypes["blank"]);
            rows.push(newTile);
        }
        map.push(rows);
    }
    return new Map(name, "sq",`${maxRows}x${maxCols}`, map, null, true);
}
export const canvasHex = (name, side = 13) => {
    //TODO: fix the generator to start in alphabet "a" instead of "i"

    if (side < 5){
        side = 5;
    }else if (side > 13){
        side = 13;
    }else if (side % 2 === 0){
        side += 1;
    }
    
    const width = side * 3 - 5;
    const height = side * 2 - 1;
    
    let row;
    let funnyCase;  
    side > 5 ? funnyCase = 0 : funnyCase = 1;     
    let rule = Math.floor(side / 2) + 1;
    let hex = [];
		

    for (let y = 0; y < height; y++){
        let alphaStart = 0;
        y % 2 === 0 ? row = width : row = width - 1;
        
        if (y < side && y % 2 !== 0)
		    rule -= 1
	    else if (y > side && y % 2 === 0){
            rule += 1
        }
	    let line = [];
        
        for (let x = 0; x < row; x++){
    
            if (x < rule -1 || x > row - rule - relation[side] + 1 ){
                line.push(new Tile(`${y}00`, y, x, null));
            }else if (x > rule - funnyCase){
                const id = generateTileId(y, x, alphaStart)
                line.push(new Tile(id, y, x, terrainTypes["blank"]));
            }
        }
        hex.push(line);
        alphaStart += 1
    }
    
    //hex = hexCleaner(hex)
    
    return new Map(name, "hx",`${side}`, hex, true);
}
//TODO: generate a proper map:
const generateHexagonalMap = (name, side = 13) => {
    let hexMap;
    hexMap =  canvasHex(name, side);
    return hexMap;
}
//TODO: generate a proper map:
const generateSqMap  = (name = "Blank Canvas", maxRows = 25, maxCols = 25, shape="sq") => {
    //not done
    //this should be a random tile generator
    let map;
    map = canvasSquare(name, maxRows, maxCols);
    return map;
}

const shuffleArr = (array) => {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex !== 0) {      
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
      
    return array;
}

const percentageArray = (plainsPercent = 50,mountainsPercent = 1,forestPercent = 22,hillsPercent = 15, swampPercent= 10, cityPercent=2) => {

    const plainsTiles = new Array(plainsPercent).fill("plains");
    const mountainsTiles = new Array(mountainsPercent).fill("mountains");
    const forestTiles = new Array(forestPercent).fill("forest");
    const hillsTiles = new Array(hillsPercent).fill("hills");
    const swampTiles = new Array(swampPercent).fill("swamp");
    const cityTiles = new Array(cityPercent).fill("city");

    const percentsArray = plainsTiles.concat(mountainsTiles, forestTiles, hillsTiles, swampTiles, cityTiles)

    return shuffleArr(percentsArray);
};

const randomTerrain = () => {
    //returns random terrain with percent chances (percentageArray);
    return terrainTypes[percentageArray()[Math.floor(Math.random() * 100)]];
}

export const mapRandomizer = (nestedArr) => {
    
    const newNestedArr = [];
    for (let row of nestedArr){
        const newRow = [];
        for (let tileObj of row){
            if(tileObj.terrain){
                newRow.push({...tileObj, "terrain" : randomTerrain()});
            }else{
                newRow.push(tileObj);
            }    
        }
        newNestedArr.push(newRow);
    }

    return newNestedArr;   
}

export const generateMap = (name, dimensions, shape) => {
    
    let map;
    let y;
    let x;
    if(shape === "sq"){
        if(dimensions === "min"){
            map = generateSqMap(name, 9, 9);
        }
        else if(dimensions.split('x').length === 2){
            y = dimensions.split('x')[0]
            x = dimensions.split('x')[1]
            if(y < 9 || y === "undefined"){
                y = 9;
            }
            if(x < 9 || x === "undefined"){
                x = 9;
            }
            map = generateSqMap(name, y, x);
        }else{
            map = generateSqMap(name, dimensions, dimensions);
        }
        
    }else if (shape === "hx"){
        if(dimensions === "min"){
            map = generateHexagonalMap(name, 5);
        }
        else if(dimensions.split('x').length === 3){
            x = dimensions.split('x')[0]
            map = generateHexagonalMap(name, x);
        }else{
            map = generateHexagonalMap(name, parseInt(dimensions, 10));
        }
    }
    return map;
}
