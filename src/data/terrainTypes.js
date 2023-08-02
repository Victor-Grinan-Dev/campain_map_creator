import { Terrain } from "../classes/terrain";
                            /*name, in, out, cover, hide, blocks_sight, build, actions, benefits*/
const plains = new Terrain("plains", 1, 0, 0, false, false, true, [], null);
const hills = new Terrain("hills", 2, 0, 1, true, true, true, [], "vision+1");
const forest = new Terrain("forest", 2, 1, 2, true, true, false, [], "luck+4");
const swamp = new Terrain("swamp", 1, 2, -1, false, false, false, [], "luck+9");
const mountains = new Terrain("mountains", 7, 7, 3, true, true, false, [], null);
const city = new Terrain("city", 0, 0, 4, true, true, false, [], []);
const blank = new Terrain("blank", null, null, null, undefined, undefined, undefined, null, null, null)

export const terrainTypes = {
  plains: plains,
  hills: hills,
  forest: forest,
  swamp: swamp,
  mountains: mountains,
  city:city,
  blank:blank,
}