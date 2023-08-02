import { createSlice } from "@reduxjs/toolkit";
import { generateMap } from '../functions/mapGenerator';

export const drawMapSlice = createSlice({
    name:'drawMap',
    initialState:{
        mapObj:generateMap("Name Undefined", "min", "sq" ),
        mapName:"Name Undefined",
        shape:"sq",
        dimension:"min",
        maxPlayers:2,

        tileSize:30,
        brush:null,
        reset:0,
        startPosLeft:2,
    }, 

    reducers:{
        setMapObj(state, action){
            state.mapObj = action.payload;
        },
        setMapName(state, action){
            state.mapName = action.payload;
        },
        setShape(state, action){
            state.shape = action.payload;
        },
        setDimension(state, action){
            state.dimension = action.payload;
        },
        setMaxPlayers(state, action){
            state.maxPlayers = action.payload;
        },

        setTileSize(state, action){
            state.tileSize = action.payload;
        },

        setBrush(state, action){
            state.brush = action.payload;
        },

        setReset(state){
            state.reset = state.reset += 1;
        },
        setStartPosLeft(state, action){
            const alltiles = state.mapObj.totalTiles;
            if (alltiles < 80){
                state.startPosLeft = 2;
            }else{
                if(state.mapObj.playableTiles / 8 >= 30){
                    state.startPosLeft = 8;
                }else{
                    state.startPosLeft = Math.floor(state.mapObj.playableTiles / 8);
                }
            }
            state.startPosLeft = action.payload;
        },
        countDownStartPosLeft(state){
            state.startPosLeft = state.startPosLeft - 1;
        },
    }

});

export const {
    setMapObj,
    setMapName,
    setShape,
    setDimension,
    setMaxPlayers,
    setTileSize,
    setBrush,
    setReset,
    setStartPosLeft,
    countDownStartPosLeft,
} = drawMapSlice.actions;

export default drawMapSlice.reducer;