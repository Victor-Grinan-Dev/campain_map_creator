export class Terrain {
    image = undefined

  constructor(name, move_in_action, get_out_action, grants_cover, can_hIde_in, blocks_sight, can_build, actions, benefits){
    this.name = name

    this.move_in_action = move_in_action
    this.get_out_action = get_out_action
    this.grants_cover = grants_cover

    this.can_hIde_in = can_hIde_in
    this.is_blocks_sight = blocks_sight
    this.can_build = can_build

    this.actions = actions 
    this.benefits = benefits
    this.image = name
  }
}