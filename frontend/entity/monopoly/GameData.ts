import monopolySchemes from "~/entity/monopoly/monopolySchemes";
import Player from "~/entity/monopoly/Player";
import type GameOperation from "~/entity/monopoly/GameOperation";

class GameDataSchemes {
    list: Array<any> = []
    currentId: string|null = null
}

class GameDataOperations {
    list: Array<any> = []
    current: GameOperation|null = null
    targetId: string|null = null
    inputAmount: number = 0

}

export default class GameData {
    schemes: GameDataSchemes = new GameDataSchemes()
    player: Player = new Player()
    operations: GameDataOperations = new GameDataOperations()
}