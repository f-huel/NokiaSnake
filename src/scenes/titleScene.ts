import "phaser";
import GameScene from "./gameScene";
import * as title from "../assets/title-screen";

export default class TitleScene extends Phaser.Scene {
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