const createValuesArray = (increment, iters, start) => {
    const values = [];
    for (let i = 0; i < iters; i++){
        values.push(Math.floor(start + i * increment))
    }
    return values;
};

export const fillCoords = (tileSize, rows, columns = rows, shape = "sq", topStart = 150, leftStart = 70) => {
    const coords = [];
    
    const topIncrement = tileSize * 0.75;
    const leftIncrement = tileSize;
    //const initialPairRow = tileSize * 0.5;

    if (shape === "sq"){
        const oddRowColumns = columns;
        const pairRowColumns = columns - 1;
        const mapTopValuesArray = createValuesArray(topIncrement, rows, topStart); 
        const mapOddValuesLeft = createValuesArray(leftIncrement, oddRowColumns, leftStart); 
        const mapPairValuesLeft = createValuesArray(leftIncrement, pairRowColumns, Math.floor(leftStart + leftStart * 0.5));

        let row;
        let leftValue;

        for (let y = 0; y < rows; y++){
            const line = [];
            y % 2 === 0 ? row = oddRowColumns  : row =  pairRowColumns;
            y % 2 === 0 ? leftValue = mapOddValuesLeft : leftValue = mapPairValuesLeft  ;
            for (let x = 0; x < row; x++){
                line.push([mapTopValuesArray[y], leftValue[x]])
            } 
            coords.push(line);
        }
    return coords;
    }    
};