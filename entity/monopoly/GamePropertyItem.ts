import GamePropertyUpgrade from "./GamePropertyUpgrade";

export default class GamePropertyItem {
    id: string
    upgrades: Array<GamePropertyUpgrade>
    type: string
    groupColor: string
}