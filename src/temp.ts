import * as Phaser from "phaser";
import * as blue from "./assets/blue";
import * as red from "./assets/red";
import * as title from "./assets/title-screen";

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "TitleScene" });
  }

  preload() {
    this.load.image("playButton", title.play);
  }

  create() {
    const playButton = this.add.image(900, 400, "playButton").setInteractive();
    playButton.on("pointerdown", () => {
      this.scene.start("GameScene");
    });
  }
}

class GameScene extends Phaser.Scene {
  playerBlue: Phaser.GameObjects.Image;
  playerRed: Phaser.GameObjects.Image;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  blueDirection: Phaser.Math.Vector2;
  redDirection: Phaser.Math.Vector2;
  keys: any;

  constructor() {
    super({ key: "GameScene" });
  }

  preload() {
    // Load assets for the game scene
    this.load.image("blueberry", blue.food);
    this.load.image("blue-head", blue.head);
    this.load.image("cherry", red.food);
    this.load.image("red-head", red.head);
  }

  create() {
    // Display blue and red snake heads
    this.playerBlue = this.add.image(200, 400, "blue-head");
    this.playerRed = this.add.image(1600, 400, "red-head");

    // Enable cursor keys
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keys = {
        A: this.input.keyboard.addKey('A'),
        D: this.input.keyboard.addKey('D'),
        W: this.input.keyboard.addKey('W'),
        S: this.input.keyboard.addKey('S')
    };

    // Set initial directions
    this.blueDirection = new Phaser.Math.Vector2(1, 0); // Right
    this.redDirection = new Phaser.Math.Vector2(-1, 0); // Left
  }

  update() {
    const speed = 2; // Adjust the speed as needed

    // Blue player movement
    if (this.cursors.left.isDown) {
      this.blueDirection.setTo(-1, 0);
    } else if (this.cursors.right.isDown) {
      this.blueDirection.setTo(1, 0);
    } else if (this.cursors.up.isDown) {
      this.blueDirection.setTo(0, -1);
    } else if (this.cursors.down.isDown) {
      this.blueDirection.setTo(0, 1);
    }

    this.playerBlue.x += this.blueDirection.x * speed;
    this.playerBlue.y += this.blueDirection.y * speed;

    // Red player movement
    if (this.keys.A.isDown) {
      this.redDirection.setTo(-1, 0);
    } else if (this.keys.D.isDown) {
      this.redDirection.setTo(1, 0);
    } else if (this.keys.W.isDown) {
      this.redDirection.setTo(0, -1);
    } else if (this.keys.S.isDown) {
      this.redDirection.setTo(0, 1);
    }

    this.playerRed.x += this.redDirection.x * speed; // Corrected playerRed
    this.playerRed.y += this.redDirection.y * speed; // Corrected playerRed
  }
}

const config = {
  type: Phaser.AUTO,
  width: 1800,
  height: 800,
  scene: [TitleScene, GameScene],
  parent: "game",
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

const game = new Phaser.Game(config);
