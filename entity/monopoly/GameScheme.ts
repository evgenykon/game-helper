import GameOperation from "./GameOperation";
import GamePropertyItem from "./GamePropertyItem";

export default class GameScheme {
    id: number
    name: string
    startBalance: number
    operations: Array<GameOperation>
    fieldTypes: Array<string>
    currencyTypes: Array<number>
    propertyUpgradeLevels: number
    properties: Array<GamePropertyItem>
    roundIncomeAmount: number
}