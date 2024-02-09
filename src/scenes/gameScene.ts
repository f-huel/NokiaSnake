// GameScene.ts
import "phaser";
import Player from "../objects/player";

export default class GameScene extends Phaser.Scene {
    private player!: Player;

    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        // Load player and food sprites
        this.load.image('player', 'assets/player.png');
        // Add preload for food image if not already loaded
    }

    create() {
        // Create player
        this.player = new Player(this, 400, 300);
    }

    update() {
        // Update player
        this.player.update();
    }
}
