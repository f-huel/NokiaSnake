import "phaser";
interface GameConfig extends Phaser.Types.Core.GameConfig {}
import GameScene from "./scenes/gameScene";

const config: GameConfig = {
  type: Phaser.AUTO,
  title: "NokiaSnake",
  width: 1400,
  height: 700,
  parent: "game",
  scene: [GameScene],
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics : {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  }
};

export class NokiaSnake extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}
window.onload = () => {
  const game = new NokiaSnake(config);
};
