import { genId } from "../functions/genId";
import { ArmyList } from "./army";

export class User {  
  id=genId();
  type = "user";
  level = 0;
  rank = "Conscript";
  badges = [];
  battles = 0;
  winRate = 0;
  formations = [];
  createdMaps = [];

  createdCampaign = null;
  armyList = new ArmyList()//players can have only one army list;
  email = "";
  avatar = "conscript_red";
  avatars = ["conscript_red", "conscript_blue", "conscript_green", "conscript_yellow"];
  inGame = null;

  constructor(username) {
    this.username = username;
  }
}
