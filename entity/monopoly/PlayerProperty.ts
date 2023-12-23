import GamePropertyItem from "./GamePropertyItem";
import type GamePropertyUpgrade from "~/entity/monopoly/GamePropertyUpgrade";

export default class PlayerProperty {
  property: GamePropertyItem
  currentUpgrade: GamePropertyUpgrade
}