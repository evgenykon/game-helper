import type PlayerProperty from "~/entity/monopoly/PlayerProperty";

export default class Player {
    balance: number = 0
    properties: Array<PlayerProperty> = []

    init(balance:number) {
        this.balance = balance
        this.properties = []
    }
}