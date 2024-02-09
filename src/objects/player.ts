// Player.ts
import "phaser";

export default class Player {
    private sprite: Phaser.Physics.Arcade.Sprite;
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        // Create player sprite
        this.sprite = scene.physics.add.sprite(x, y, 'player');

        // Adjust player scale if needed
        this.sprite.setScale(0.5);

        // Set player properties
        this.sprite.setOrigin(0.5);
        this.sprite.setCollideWorldBounds(true); // Prevent player from moving out of the game world

        // Enable cursor keys for player movement
        this.cursors = scene.input.keyboard.createCursorKeys();

        // Set initial velocity for continuous movement
        this.sprite.setVelocity(100, 0); // Starts moving to the right upon spawn
    }

    update() {
        // Player control logic remains the same
        const speed = 100;

        let velocityX = 0;
        let velocityY = 0;

        if (this.cursors.left?.isDown) {
            velocityX = -speed;
        } else if (this.cursors.right?.isDown) {
            velocityX = speed;
        }

        if (this.cursors.up?.isDown) {
            velocityY = -speed;
        } else if (this.cursors.down?.isDown) {
            velocityY = speed;
        }

        if (velocityX !== 0 || velocityY !== 0) {
            this.sprite.setVelocity(velocityX, velocityY);
        }
    }
}
