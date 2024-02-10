// GameScene.ts
import "phaser";
import * as red from "../assets/red";
import * as blue from "../assets/blue";
import Player from "../objects/player";

export default class GameScene extends Phaser.Scene {
  private player1: Player;
  private player2: Player;

  constructor() {
    super({ key: "GameScene" });
  }

  preload() {
    this.load.image("player1", red.head);
    this.load.image("player2", blue.head);
  }

  create() {
    this.player1 = new Player(
      this,
      200,
      350,
      "player1",
      this.input.keyboard.createCursorKeys(),
      100
    );

    const player2Controls = {
      up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
      space: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
      shift: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT),
    };

    this.player2 = new Player(
      this,
      1200,
      350,
      "player2",
      player2Controls,
      -100
    );
  }

  update() {
    this.player1.update();
    this.player2.update();
  }
}
