import { Tile } from "../../classes/tile";
import { terrainTypes } from "../../data/terrainTypes";
import { Map } from "../../classes/map";

const a00 = new Tile("a00", 0, 0, terrainTypes["hills"], true);
const b00 = new Tile("b00", 0, 1, terrainTypes["forest"], false);
const c00 = new Tile("c00", 0, 2, terrainTypes["city"], false);

const b01 = new Tile("b01", 1, 0, terrainTypes["plains"], true);
const c01 = new Tile("c01", 1, 1, terrainTypes["plains"], false);

const b02 = new Tile("b02", 2, 0, terrainTypes["city"], false);
const c02 = new Tile("c00", 2, 1, terrainTypes["forest"], false);
const d02 = new Tile("d00", 2, 2, terrainTypes["hills"], true);

const nestedMap = [
  [a00, b00, c00],
  [b01, c01],
  [b02, c02, d02],
];

export const testMap = new Map("testMap", "sq", "3x3", nestedMap);

const map = [
  [
    new Tile(100, 0, 0),
    new Tile("a00", 0, 1, terrainTypes["hills"]),
    new Tile("b00", 0, 2, terrainTypes["plains"]),
    new Tile("c00", 0, 3, terrainTypes["plains"]),
    new Tile("d00", 0, 4, terrainTypes["hills"]),
  ],
  [
    new Tile(200, 1, 0),
    new Tile("a01", 1, 1, terrainTypes["plains"]),
    new Tile("b01", 1, 2, terrainTypes["swamp"]),
    new Tile("c01", 1, 3, terrainTypes["swamp"]),
    new Tile("d01", 1, 4, terrainTypes["swamp"]),
    new Tile("e01", 1, 5, terrainTypes["plains"]),
  ],
  [
    new Tile("a02", 2, 0, terrainTypes["plains"], true),
    new Tile("b02", 2, 1, terrainTypes["plains"]),
    new Tile("c02", 2, 2, terrainTypes["forest"]),
    new Tile("d02", 2, 3, terrainTypes["forest"]),
    new Tile("e02", 2, 4, terrainTypes["plains"]),
    new Tile("f02", 2, 5, terrainTypes["plains"], true),
  ],

  [
    new Tile("a03", 3, 0, terrainTypes["hills"], true),
    new Tile("b03", 3, 1, terrainTypes["plains"], true),
    new Tile("c03", 3, 2, terrainTypes["forest"]),
    new Tile("d03", 3, 3, terrainTypes["mountains"]),
    new Tile("e03", 3, 4, terrainTypes["forest"]),
    new Tile("f03", 3, 5, terrainTypes["plains"], true),
    new Tile("g03", 3, 6, terrainTypes["hills"], true),
  ],
  [
    new Tile("b04", 4, 0, terrainTypes["plains"], true),
    new Tile("c04", 4, 1, terrainTypes["plains"]),
    new Tile("d04", 4, 2, terrainTypes["forest"]),
    new Tile("e04", 4, 3, terrainTypes["forest"]),
    new Tile("f04", 4, 4, terrainTypes["plains"]),
    new Tile("g04", 4, 5, terrainTypes["plains"], true),
  ],
  [
    new Tile(600, 5, 0),
    new Tile("c05", 5, 1, terrainTypes["plains"]),
    new Tile("d05", 5, 2, terrainTypes["swamp"]),
    new Tile("e05", 5, 3, terrainTypes["swamp"]),
    new Tile("f05", 5, 4, terrainTypes["swamp"]),
    new Tile("g05", 5, 5, terrainTypes["plains"]),
  ],
  [
    new Tile(700, 6, 0),
    new Tile("d06", 6, 1, terrainTypes["hills"]),
    new Tile("e06", 6, 2, terrainTypes["plains"]),
    new Tile("f06", 6, 3, terrainTypes["plains"]),
    new Tile("g06", 6, 4, terrainTypes["hills"]),
  ],
];

export const hexTestMap = new Map("Hex Test Map", "hx", "4x4x4", map);
