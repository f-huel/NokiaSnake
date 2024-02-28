// GameScene.ts
import "phaser";
import * as red from "../assets/red";
import * as blue from "../assets/blue";
import Player from "../objects/player";

export default class GameScene extends Phaser.Scene {
  private player1: Player;
  private player2: Player;
  private redFoodGroup: Phaser.Physics.Arcade.Group;
  private blueFoodGroup: Phaser.Physics.Arcade.Group;

  constructor() {
    super({ key: "GameScene" });
  }

  preload() {
    this.load.image("player1", red.head);
    this.load.image("player2", blue.head);
    this.load.image("redFood", red.food);
    this.load.image("blueFood", blue.food);
  }

  create() {
    // Create player objects
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

    // Create food groups
    this.redFoodGroup = this.physics.add.group();
    this.blueFoodGroup = this.physics.add.group();

    // Call the function to continuously spawn food
    this.spawnFood(this.redFoodGroup, "redFood");
    this.spawnFood(this.blueFoodGroup, "blueFood");

    // Enable collisions between players and food
    this.physics.add.collider(this.player1, this.redFoodGroup, (player, food) => this.eatFood(player, food, this.redFoodGroup), undefined, this);
    this.physics.add.collider(this.player2, this.blueFoodGroup, (player, food) => this.eatFood(player, food, this.blueFoodGroup), undefined, this);
  }

  update() {
    this.player1.update();
    this.player2.update();
  }

  spawnFood(foodGroup: Phaser.Physics.Arcade.Group, textureKey: string) {
    this.time.addEvent({
      delay: Phaser.Math.Between(3000, 5000), // Random delay between 3 to 5 seconds
      callback: () => {
        const x = Phaser.Math.Between(0, this.sys.canvas.width);
        const y = Phaser.Math.Between(0, this.sys.canvas.height);
        const food = foodGroup.create(x, y, textureKey);
        food.setScale(0.09); // Set scale to a smaller value
        food.setOrigin(0.5);
      },
      loop: true,
    });
  }

  eatFood(player: Player, food: Phaser.Physics.Arcade.Sprite, foodGroup: Phaser.Physics.Arcade.Group) {
    food.destroy();
    // Add score or perform other actions here
  }
}
