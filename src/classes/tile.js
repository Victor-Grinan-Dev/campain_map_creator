export class Tile {
  status = "onSight"; //disabled outSight   selected unexplored  onSight
  isHostileSight = false;
  isExplored = false;

  constructor(
    id,

    posY,
    posX,

    terrain = null, //terrain obj
    isStartingPosition = false,

    formation = null, //formation obj
    objective = null, //objective obj
    building = null, //building obj

    actions = [],
    resources = [],
    claimedBy = undefined //or neutral?, an army name str.
  ) {
    this.id = id;

    this.posY = posY;
    this.posX = posX;

    this.terrain = terrain;
    this.isStartingPosition = isStartingPosition;

    this.formation = formation;
    this.objective = objective;
    this.building = building;
    this.actions = actions;
    this.resources = resources;
    this.claimedBy = claimedBy;
  }
}
